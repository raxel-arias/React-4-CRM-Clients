import { useNavigate } from "react-router-dom";

import {Formik, Form as FormikForm, Field, FormikHelpers} from 'formik';
import {NewClientSchema} from "../../validations";

import ClientsApiService from "../../services/clientsapi.service";
import {ClientGot} from "../../services/dto/get-client.dto";
import {UpdateClientDto} from "../../services/dto/update-client.dto";

import ValidationError from "./ValidationError";

import {FormCP} from "../../interfaces/form/form-component-props.interface";
import {IClient, DefaultNewClientObj} from "../../interfaces/client.interface";

const Form = (props: FormCP): JSX.Element => {
    const clientsApiService = new ClientsApiService();
    const navigator = useNavigate();

    const {
        editing,
        clientToEdit
    } = props;

    async function handleSubmit(data: IClient, {resetForm}: FormikHelpers<IClient>): Promise<void> {
        if (editing) return await updateClientInfo(data as ClientGot, resetForm);

        await createClient(data, resetForm);
    }

    async function createClient(newData: IClient, resetForm: any): Promise<void> {
        try {
            const response = await clientsApiService.createClient(newData);

            resetForm();
            navigator('/clients');
        } catch (error: any) {
            alert('Hubo un error');
            console.error(error);
        }
    }

    async function updateClientInfo(updatedData: ClientGot, resetForm: any): Promise<void> {
        try {
            const response = await clientsApiService.updateClient(clientToEdit?._id!, sanitizeDataToUpdate(updatedData));

            resetForm();
            navigator('/clients');
        } catch (error: any) {
            alert('Hubo un error');
            console.error(error);
        }
    }

    function sanitizeDataToUpdate(updatedData: ClientGot): UpdateClientDto {
        const {_id, createdAt, updatedAt, __v, ...filteredData} = updatedData
        const clientSanitizedData: UpdateClientDto = {...filteredData};

        return clientSanitizedData;
    }

    function getFormDefaultValues(): IClient {
        return editing && clientToEdit? clientToEdit as IClient : DefaultNewClientObj;
    }

    return (
        <div className={"bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto"}>

            <Formik
                initialValues={getFormDefaultValues()}
                onSubmit={handleSubmit}
                validationSchema={NewClientSchema}>
                {({errors, touched}) => {
                    return(
                        <FormikForm className="mt-10">

                            {/*Client name*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="text-gray-800">Name
                                </label>
                                <Field
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Client name"
                                    autoComplete="off"
                                />
                                {errors.name && touched.name && <ValidationError msg={errors.name} />}
                            </div>

                            {/*Client company*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="company"
                                    className="text-gray-800">Company
                                </label>
                                <Field
                                    id="company"
                                    name="company"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Client company"
                                />
                                {errors.company && touched.company && <ValidationError msg={errors.company} />}
                            </div>

                            {/*Client email*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800">E-mail
                                </label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Client email address"
                                />
                                {errors.email && touched.email && <ValidationError msg={errors.email} />}
                            </div>

                            {/*Client phone number*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="text-gray-800">Phone <span className="text-gray-500">(Optional)</span>
                                </label>
                                <Field
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Client phone number"
                                />
                                {errors.phone && touched.phone && <ValidationError msg={errors.phone} />}
                            </div>

                            {/*Some notes about client info*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="notes"
                                    className="text-gray-800">Notes <span className="text-gray-500">(Optional)</span>
                                </label>
                                <Field as="textarea"
                                    id="notes"
                                    name="notes"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Notes about client"
                                />
                                {errors.notes && touched.notes && <ValidationError msg={errors.notes} />}
                            </div>

                            <input
                                type="submit"
                                className="mt-5 w-full bg-blue-800 hover:bg-blue-600 hover:cursor-pointer p-3 text-white uppercase font-bold text-lg"
                                value={editing ? 'Update Client' : 'Add Client'} />
                        </FormikForm>

                )}}
            </Formik>
        </div>
    )
}

export default Form;