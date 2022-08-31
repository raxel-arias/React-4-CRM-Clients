import {ClientGot} from "../../services/dto/get-client.dto";

export interface ClientAuxCP {
    view: string;
}

export interface ViewClientCP {
    client: ClientGot
}

export interface EditClientCP {
    client: ClientGot
}