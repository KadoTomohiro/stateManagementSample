export interface Todo {
  id?: number;
  task: string;
  finished: boolean;
}

export type TodoType = 'open' | 'close' | 'all';
