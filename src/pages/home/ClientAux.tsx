import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {ClientGot, DefaultClientGot} from "../../services/dto/get-client.dto";
import ClientsApiService from "../../services/clientsapi.service";

import Spinner from "../../components/spinner/Spinner";
import ViewClient from "./ViewClient";
import EditClient from "./EditClient";

import {ClientAuxCP} from "../../interfaces/home/pages.interface";

const ClientAux =(props: ClientAuxCP): JSX.Element => {
    const [client, setClient]: [ClientGot, Dispatch<SetStateAction<ClientGot>>] = useState(DefaultClientGot);
    const [found, setFound]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);

    const clientApiService = new ClientsApiService();
    const {id} = useParams();

    const {view} = props;

    useEffect(() => {
        (async () => {
            try {
                const clientFound: ClientGot = await clientApiService.getSingleClient(id!);

                setClient(clientFound);
                setFound(true);
            } catch (error: any) {
                console.error(error);
            } finally {
                setLoading(false);

                if (!loading && !client._id) {
                    setFound(false);
                }
            }
        })();
    }, []);

    return (
        <div className={loading ? 'min-h-screen flex items-center justify-center' : ''}>
            {loading
                ? <Spinner />
                :
                    !found
                        ? <p className="text-4xl text-red-600 font-bold text-center">Not found</p>
                        :
                            view === 'view'
                                ? <ViewClient client={client} />
                                : <EditClient client={client} />
            }
        </div>
    )
}

export default  ClientAux;