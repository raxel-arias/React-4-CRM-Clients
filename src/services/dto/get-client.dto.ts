import Client from "./client.entity";

export interface ClientGot extends Client {
    _id: string;
}

export const DefaultClientGot: ClientGot = {
    _id: '',
    name: '',
    company: '',
    notes: '',
    email: '',
    phone: ''
}