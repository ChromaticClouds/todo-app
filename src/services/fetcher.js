import { api } from "@/services/api.js";

/**
 * @typedef {object} TodoList
 * @property {string} name
 * @property {string} description
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} category
 * @property {boolean} completed
 */

export const fetchTodoList = () => api.get('task').json();