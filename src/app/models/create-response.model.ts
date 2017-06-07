import { Todo } from './todo.model';

export interface CreateResponse {
    "status": string,
    "message": string,
    "tasks": object
}