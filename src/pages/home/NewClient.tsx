import Form from "../../components/form/Form";

const NewClient = (): JSX.Element => {
    return (
        <>
            <h1 className={"font-black text-4xl text-center text-blue-900"}>New Client</h1>

            <p className={"mt-3"}>Complete the fields to register a client:</p>

            <Form />
        </>
    )
}

export default NewClient;