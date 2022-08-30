import Form from "../../components/form/Form";
import Heading from "../../components/shared/Heading";

const NewClient = (): JSX.Element => {
    return (
        <>
            <Heading title={"New Client"} subtitle={"Complete the fields to register a client"} />

            <Form />
        </>
    )
}

export default NewClient;