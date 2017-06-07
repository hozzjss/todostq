import { Todo } from './todo.model';

export interface DoneResponse {
  "status": string,
  "message": string,
  "todo": object,
  "done": Todo[]
}