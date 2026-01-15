// @ts-check

import { api } from '@/services/api.js';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import z from 'zod';

/**
 * @typedef {object} RegisterSchema
 * @property {string} email
 * @property {string} username
 * @property {string} password
 */

/** @type {RegisterSchema} */
const defaultValues = {
  email: '',
  username: '',
  password: '',
};

const { email, ...loginValues } = defaultValues;

const registerSchema = z.object({
  email: z.email('Invalid email format.'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long.')
    .max(16, 'Username must be no longer than 16 characters'),
  password: z
    .string()
    .min(8, 'Password length must be at least 8 characters')
    .max(32, 'Password must be no longer than 32 characters')
    .regex(
      /.*[!?@#$%^&*].*[!?@#$%^&*].*/,
      'Password must contain at least 2 special characters',
    ),
});

/**
 * @param {string} path
 * @param {import('react-router-dom').NavigateFunction} navigate
 */
const submitHandler =
  (path, navigate) =>
  async ({ value }) => {
    try {
      /** @type {import('@/types').ApiResponse<'success'>} */
      const response = await api.post(path, { json: value }).json();

      if (!response.success)
        return toast.error(response.message ?? 'Registration failed');

      toast.success(response.message);
      navigate('/');
    } catch {
      toast.error('Netwrok error. Please try again');
    }
  };

export const useAuthForm = () => {
  const navigate = useNavigate();

  return {
    register: useForm({
      defaultValues,
      validators: { onChange: registerSchema },
      onSubmit: submitHandler('auth/register', navigate),
    }),
    login: useForm({
      defaultValues: loginValues,
      onSubmit: submitHandler('auth/login', navigate),
    }),
  };
};
