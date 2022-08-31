import {ClientGot} from "../../services/dto/get-client.dto";
import {Dispatch, SetStateAction} from "react";

export interface ClientsDataState {
    clientsData: ClientGot[],
    setClientsData: Dispatch<SetStateAction<ClientGot[]>>
}