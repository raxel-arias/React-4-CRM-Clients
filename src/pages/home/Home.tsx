import {Dispatch, SetStateAction, useEffect, useState} from "react";
import ClientsApiService from "../../services/clientsapi.service";
import Heading from "../../components/shared/Heading";
import ClientsTable from "../../components/home/clients-table/ClientsTable";
import {ClientGot} from "../../services/dto/get-client.dto";

const Home = (): JSX.Element => {
    const [clientsData, setClientsData]: [ClientGot[], Dispatch<SetStateAction<ClientGot[]>>] = useState([] as ClientGot[]);
    const clientsService = new ClientsApiService();

    useEffect(() => {
        (async () => {
            try {
                const data = await clientsService.getClients();

                setClientsData(data);
            } catch (error) {
                alert('Hubo un error');
                console.error(error);
            }
        })();
    }, [clientsData]);

    return (
        <>
            <Heading title={"Clients"} subtitle={"Manage your clients"} />

            <div className="w-full overflow-x-scroll h-3/4">
                <ClientsTable clientsDataState={{clientsData, setClientsData}} />
            </div>
        </>
    )
}

export default Home;