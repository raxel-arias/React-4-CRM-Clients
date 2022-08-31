import {useNavigate} from "react-router-dom";
import {editClientRoute, homeRoute, viewClientRoute} from "../../../global/route-paths.global";
import {ClientsCP} from "../../../interfaces/home/clients-table/client-component-props.interface";
import ClientsApiService from "../../../services/clientsapi.service";

const Client = (props: ClientsCP): JSX.Element => {
    const clientsApiService = new ClientsApiService();

    const {
        clientsDataState: {setClientsData},
        client: {
            _id,
            name,
            company,
            email,
            phone,
            notes
        }
    } = props;

    const navigator = useNavigate();

    function viewClient(id: string): void {
        navigator(homeRoute + viewClientRoute + `/${id}`);
    }

    function editClient(id: string): void {
        navigator(homeRoute + editClientRoute + `/${id}`);
    }

    async function deleteClient(id: string): Promise<void> {
        try {
            const response = await clientsApiService.deleteClient(id);

            setClientsData(clientsData => [...clientsData.filter(client => client._id !== id)]);
        } catch (error: any) {
            alert('Hubo un error');
            console.error(error);
        }
    }

    return (
    <tr className="border-b-2 hover:bg-gray-300 z-50 hover:shadow-sm">
        <td className="p-3">{name}</td>
        <td className="p-3">
            <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
            <p><span className="text-gray-800 uppercase font-bold">Phone: </span>{phone || "Empty"}</p>
        </td>
        <td className="p-3">{company}</td>
        <td className="p-3">
            <button onClick={() => viewClient(_id)}
                className="bg-green-500 hover:bg-green-600 block w-full text-white p-2 uppercase font-bold text-xs"
            >View</button>
            <button onClick={() => editClient(_id)}
                className="bg-blue-500 hover:bg-blue-600 block w-full text-white p-2 uppercase font-bold text-xs mt-2.5"
            >Edit</button>
            <button onClick={() => deleteClient(_id)}
                className="bg-red-500 hover:bg-red-600 block w-full text-white p-2 uppercase font-bold text-xs mt-2.5"
            >Delete</button>
        </td>
    </tr>
    )
};

export default Client;