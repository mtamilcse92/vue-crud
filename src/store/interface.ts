export interface UserForm {
    email: string;
    password: string;
}

export interface User {
    form: UserForm;
    list: object[];
}
