// @ts-check

import { useForm } from '@tanstack/react-form';
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

const registerSchema = z.object({
  email: z.email('Invalid email format.'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long.')
    .max(16, 'Username must be no longer than 16 characters'),
  password: z
    .string()
    .min(8, 'Password length must be at least 8 characters')
    .max(32, 'Password must be no longer than 16 characters')
    .regex(
      /[!?@#$%^&*]{2,}/,
      'Password must contains 2 or more specific characters',
    ),
});

export const useAuthForm = () => {
  return useForm({
    defaultValues,
    validators: {
      onChange: registerSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
};
