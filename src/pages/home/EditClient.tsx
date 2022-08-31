import {EditClientCP} from "../../interfaces/home/pages.interface";
import Heading from "../../components/shared/Heading";
import Form from "../../components/form/Form";

const EditClient = (props: EditClientCP): JSX.Element => {
    const {client} = props;

    return (
        <div>
            <Heading title={"Edit Client"} subtitle={"Complete the fields to update the client info"} />

            <Form editing={true} clientToEdit={client} />
        </div>
    )
}

export default EditClient;