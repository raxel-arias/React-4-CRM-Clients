import { useNavigate } from "react-router-dom";
import {Formik, Form as FormikForm, Field, FormikHelpers} from 'formik';

import {IClient, DefaultNewClientObj} from "../../interfaces/client.interface";
import {NewClientSchema} from "../../validations";
import ValidationError from "./ValidationError";
import ClientsApiService from "../../services/clientsapi.service";

const Form = (): JSX.Element => {
    const clientsApiService = new ClientsApiService();
    const navigator = useNavigate();

    async function handleSubmit(data: IClient, {resetForm}: FormikHelpers<IClient>) {
        const response = await clientsApiService.createClient(data);

        if (response.error) {
            alert('hubo error');
            return;
        }

        resetForm();
        navigator('/clients');
    }

    return (
        <div className={"bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto"}>
            <h2 className={"text-gray-600 font-bold text-xl uppercase text-center"}>Add Client</h2>

            <Formik initialValues={DefaultNewClientObj} onSubmit={handleSubmit} validationSchema={NewClientSchema}>
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
                                    className="text-gray-800">Phone
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
                                    className="text-gray-800">Notes
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
                                value="Add Client" />
                        </FormikForm>

                )}}
            </Formik>
        </div>
    )
}

export default Form;