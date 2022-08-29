export interface CreateClientDto {
    name: string;
    company: string;
    email: string;
    phone?: string;
    notes?: string;
}