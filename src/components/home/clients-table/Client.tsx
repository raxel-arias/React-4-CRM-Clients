import {ClientsCP} from "../../../interfaces/home/clients-table/client-component-props.interface";

const Client = (props: ClientsCP): JSX.Element => {
    const {client: {
        _id,
        name,
        company,
        email,
        phone,
        notes
    }} = props;

    //<th className={"p-2"}>Name</th>
    //<th className={"p-2"}>Company</th>
    //<th className={"p-2"}>E-mail</th>
    //<th className={"p-2"}>Actions</th>

    return (
    <tr className="border-b-2 hover:bg-gray-300 z-50 hover:shadow-sm">
        <td className="p-3">{name}</td>
        <td className="p-3">
            <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
            <p><span className="text-gray-800 uppercase font-bold">Phone: </span>{phone || "Empty"}</p>
        </td>
        <td className="p-3">{company}</td>
        <td className="p-3">
            <button
                className="bg-green-500 hover:bg-green-600 block w-full text-white p-2 uppercase font-bold text-xs"
            >View</button>
            <button
                className="bg-blue-500 hover:bg-blue-600 block w-full text-white p-2 uppercase font-bold text-xs mt-2.5"
            >Edit</button>
            <button
                className="bg-red-500 hover:bg-red-600 block w-full text-white p-2 uppercase font-bold text-xs mt-2.5"
            >Delete</button>
        </td>
    </tr>
    )
};

export default Client;