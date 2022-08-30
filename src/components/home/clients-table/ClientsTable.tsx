import {ClientsTableCP} from "../../../interfaces/home/clients-table/clients-table-component-props.interface";
import { ClientGot } from "../../../services/dto/get-client.dto";
import Client from "./Client";

const ClientsTable = (props: ClientsTableCP): JSX.Element => {

    const {clientList} = props;

    return (
        <table className="w-full bg-white">
            <thead className={"bg-blue-800 text-white"}>
            <tr>
                <th className={"p-2"}>Name</th>
                <th className={"p-2"}>Contact</th>
                <th className={"p-2"}>Company</th>
                <th className={"p-2"}>Actions</th>
            </tr>
            </thead>

            <tbody>
            {clientList.map((client: ClientGot) => <Client key={client._id} client={client} />)}
            </tbody>
        </table>
    )
}

export default ClientsTable;