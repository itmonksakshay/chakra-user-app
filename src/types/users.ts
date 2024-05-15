export interface IUser {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string
}

export interface IUsers {
    users: IUser[]
}

export interface DropdownTypes {
    keyName: string | number;
    keyValue: string | number;
}
