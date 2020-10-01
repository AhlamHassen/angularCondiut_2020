export interface UserEnvelope{
    user: User;
}

export interface User{
    userName: string;
    email: string;
    password: string;
}

export interface CreateCommand{
    user: User; 
}