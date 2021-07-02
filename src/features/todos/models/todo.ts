/**
 * Application todo, represents the datamodel in the application
 */
export interface Todo {
  id: number | string;
  name: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
}
