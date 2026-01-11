// @ts-check

import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchTodoList } from '@/services/fetcher.js';

export const useTasksQuery = () => {
  return useSuspenseQuery({
    queryKey: ['tasks'],
    queryFn: fetchTodoList,
    /** @param {import('@/types').ApiResponse<'success', import('@/types').TodoList[]>} response */
    select: (response) => response.data ?? [],
  });
};
