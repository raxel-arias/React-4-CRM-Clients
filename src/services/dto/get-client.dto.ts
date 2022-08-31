import Client from "./client.entity";

export interface ClientGot extends Client {
    _id: string;
    createdAt?: number;
    updatedAt?: number;
    __v?: any
}

export const DefaultClientGot: ClientGot = {
    _id: '',
    name: '',
    company: '',
    notes: '',
    email: '',
    phone: ''
}