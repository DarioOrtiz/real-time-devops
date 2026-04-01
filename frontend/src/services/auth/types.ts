export interface UserCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  username: string;
  message?: string;
  token?: string; 
}