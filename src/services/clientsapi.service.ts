import axios, {AxiosResponse} from 'axios';
import {CreateClientDto} from "./dto/create-client.dto";

export default class ClientsApiService {
    private API_URL = 'http://localhost:3000/api/v1/clients';

    public async getClients() {
        try {
            const {data, status} = await axios.get(this.API_URL);

            return {
                data,
                status
            }
        } catch (error: any) {
            return this.handleException(error);
        }
    }

    public async createClient(createClientDto: CreateClientDto) {
        try {
            const { data, status } =  await axios.post(this.API_URL, createClientDto, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return {
                data,
                status
            };
        } catch (error: any) {
            return this.handleException(error);
        }

    }

    private handleException(error: any): any {
        if (error.response) {
            return error.response.data;
        }

        return error;
    }
}
