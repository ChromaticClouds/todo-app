import { AppHeader } from '@/components/app-header.jsx';
import { DateRangePicker } from '@/components/date-range-picker.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field.jsx';
import { Input } from '@/components/ui/input.jsx';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from '@/components/ui/select.js';
import { Textarea } from '@/components/ui/textarea.jsx';
import { TASK_CATEGORIES } from '@/constants/index.js';
import { useTaskForm } from '@/hooks/use-task-form.js';

/** @typedef {React.ChangeEvent<HTMLInputElement>} OnChangeEvent */

export const AddTask = () => {
  const form = useTaskForm();

  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <main className="flex flex-col flex-1 justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldSet className="flex flex-col w-sm">
            <FieldLegend>Add New Task</FieldLegend>
            <FieldDescription>Create your own task</FieldDescription>
            <FieldGroup>
              <form.Field name="name">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <div className="flex flex-col gap-2">
                      <FieldLabel htmlFor={field.name}>Task Name</FieldLabel>
                      <Input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(/** @type {OnChangeEvent} */ e) =>
                          field.handleChange(e.target.value)
                        }
                        aria-invalid={isInvalid}
                        placeholder="Enter task name"
                      />
                      {isInvalid ? (
                        <FieldError errors={field.state.meta.errors} />
                      ) : (
                        field.state.value && (
                          <span className="text-sm">
                            {field.state.value.length}/40
                          </span>
                        )
                      )}
                    </div>
                  );
                }}
              </form.Field>
              <form.Field name="description">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <div className="flex flex-col gap-2">
                      <FieldLabel htmlFor={field.name}>
                        Task Description
                      </FieldLabel>
                      <Textarea
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(/** @type {OnChangeEvent} */ e) =>
                          field.handleChange(e.target.value)
                        }
                        aria-invalid={isInvalid}
                        placeholder="Enter task desciption"
                        className="resize-none h-20 overflow-hidden custom-scrollbar overflow-y-auto"
                      />
                      {isInvalid ? (
                        <FieldError errors={field.state.meta.errors} />
                      ) : (
                        field.state.value && (
                          <span className="text-sm">
                            {field.state.value.length}/350
                          </span>
                        )
                      )}
                    </div>
                  );
                }}
              </form.Field>
              <form.Field name="range">
                {(field) => (
                  <DateRangePicker
                    value={field.state.value}
                    onChange={field.handleChange}
                  />
                )}
              </form.Field>
              <form.Field name="category">
                {(field) => (
                  <Select
                    value={field.state.value}
                    onValueChange={field.handleChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent
                      className="w-sm"
                      position="popper"
                      align="center"
                      side="bottom"
                    >
                      <SelectGroup>
                        <p className="m-2 font-bold">
                          Select Categories (max 3)
                        </p>
                        <SelectLabel>Selected: none</SelectLabel>
                        {TASK_CATEGORIES.map(({ id, value }) => (
                          <SelectItem key={id} value={id}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              </form.Field>
              <form.Subscribe
                selector={(state) => [state.isDirty, state.isValid, state.isSubmitting]}
              >
                {([isDirty, isValid, isSubmitting]) => (
                  <Button
                    type="submit"
                    disabled={!isDirty || !isValid || isSubmitting}
                  >
                    Create task
                  </Button>
                )}
              </form.Subscribe>
            </FieldGroup>
          </FieldSet>
        </form>
      </main>
    </div>
  );
};
