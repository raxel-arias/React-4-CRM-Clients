import {ClientGot} from "../../services/dto/get-client.dto";

export interface FormCP {
    editing: boolean,
    clientToEdit?: ClientGot
}

export interface ValidationErrorCP {
    msg: string
}