import {ClientGot} from "../../../services/dto/get-client.dto";
import {ClientsDataState} from "../../state/states.interface";

export interface ClientsCP {
    client: ClientGot,
    clientsDataState: ClientsDataState
}