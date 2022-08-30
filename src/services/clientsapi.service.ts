import axios, {AxiosResponse} from 'axios';
import {CreateClientDto} from "./dto/create-client.dto";

export default class ClientsApiService {
    private API_URL = 'http://localhost:3000/api/v1/clients';

    public getClients() {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, status} = await axios.get(this.API_URL);

                resolve( {
                    data,
                    status
                });
            } catch (error: any) {
                reject({
                    error
                });
            }
        })
    }

    public createClient(createClientDto: CreateClientDto) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data, status } =  await axios.post(this.API_URL, createClientDto, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                resolve({
                   data,
                   status
                });
            } catch (error: any) {
                reject(error);
            }
        });
    }
}
