// @ts-check

import { createContext, useContext } from "react";
import { useTasksQuery } from "@/hooks/use-tasks-query";

/** @type {React.Context<null | import("@/types").TodoList[]>} */
const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const { data } = useTasksQuery();

  return (
    <TasksContext.Provider value={data}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasks must be used within TasksProvider");
  return ctx;
};
