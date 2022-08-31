import Heading from "../../components/shared/Heading";
import {ViewClientCP} from "../../interfaces/home/pages.interface";

const ViewClient = (props: ViewClientCP): JSX.Element => {
    const {client} = props;

    const pClasses = 'my-5 text-2xl text-gray-800 font-bold';
    const spanClasses = 'text-gray-600';

    return (
        <div>
            <Heading title={"Client Info"} subtitle={client.name} />

            <div className="bg-white p-8 shadow-xl rounded-md" >
                <p className={pClasses}>Name:{' '}
                    <span className={spanClasses}>{client.name}</span>
                </p>

                <p className={pClasses}>Company:{' '}
                    <span className={spanClasses}>{client.company}</span>
                </p>

                <p className={pClasses}>Email:{' '}
                    <span className={spanClasses}>{client.email}</span>
                </p>

                {client.phone &&
                    <p className={pClasses}>Phone:{' '}
                        <span className={spanClasses}>{client.phone}</span>
                    </p>}

                {client.notes &&
                    <p className={pClasses}>Notes:{' '}
                        <span className={spanClasses}>{client.notes}</span>
                    </p>}
            </div>
        </div>
    )
}

export default ViewClient;