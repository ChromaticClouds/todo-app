export type SuccessResponse<D extends unknown> = {
  success: true;
  message: string;
  data?: D;
};

export type FailResponse = {
  success: false;
  message: string;
};

export type ApiResponse<
  T extends 'success' | 'fail',
  D extends unknown = unknown,
> = T extends 'success' ? SuccessResponse<D> : FailResponse;

export type TodoList = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  category: string;
  completed: boolean;
}