import { api } from '@/services/api.js';
import { useForm } from '@tanstack/react-form';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import z, { ZodError } from 'zod';

const defaultValues = {
  name: '',
  description: '',
  range: { from: new Date(), to: new Date() },
  category: '',
};

const taskFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Task name is required')
    .max(40, 'Name should be less than or equal to 40 characters'),
  description: z
    .string()
    .max(350, 'Description should be less than or equal to 350 characters'),
  range: z.object({ from: z.date(), to: z.date() }),
});

/**
 * @template D
 * @typedef {object} SuccessResponse
 * @property {true} success
 * @property {string} message
 * @property {D} [data]
 */

/**
 * @typedef {object} FailResponse
 * @property {false} success
 * @property {string} message
 */

/**
 * @template D
 * @typedef {SuccessResponse<D> | FailResponse} ApiResponse
 */

/** @param {typeof defaultValues} taskForm */
const createTaskRequest = (taskForm) => ({
  name: taskForm.name,
  description: taskForm.description,
  startDate: format(taskForm.range.from, 'yyyy-MM-dd'),
  endDate: format(taskForm.range.to, 'yyyy-MM-dd'),
  category: taskForm.category,
});

export const useTaskForm = () => {
  const navigate = useNavigate();

  return useForm({
    defaultValues,
    validators: { onChange: taskFormSchema },
    onSubmit: async ({ value }) => {
      try {
        const parsed = taskFormSchema.parse(value);
        const payload = createTaskRequest(parsed);

        /** @type {ApiResponse<'success'>} */
        const response = await api.post('task', { json: payload }).json();
        if (response.success) {
          toast.success(response.message);
          navigate('/');
        }
      } catch (err) {
        if (err instanceof ZodError) return toast.error(err.issues[0]?.message);

        toast.error('Unexpected error.');
      }
    },
  });
};
