import { Task } from "../types";

export const loadTasksFromLocalStorage = (taskId: string): Task[] => {
  try {
    const storedTasks = localStorage.getItem(taskId);
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Error parsing tasks from localStorage:", error);
    return [];
  }
};

export const saveTasksToLocalStorage = (
  taskId: string,
  taskNote: Task[]
): void => {
  try {
    localStorage.setItem(taskId, JSON.stringify(taskNote));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};
