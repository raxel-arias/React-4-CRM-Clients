export interface IClient {
    name: string;
    email: string;
    company: string;
    phone: string;
    notes: string;
}

export const DefaultNewClientObj: IClient = {
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: ''
}