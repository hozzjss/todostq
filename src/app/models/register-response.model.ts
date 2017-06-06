import { LoginResponse } from '../models/login-response.model';

export interface RegisterResponse {
    status: string,
    message: string,
    user: LoginResponse
}
