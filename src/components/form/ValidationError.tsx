import {ValidationErrorCP} from "../../interfaces/components-props.interface";

const ValidationError = (props: ValidationErrorCP): JSX.Element => {

    const { msg } = props;

    return (
        <div className="text-red-500">{msg}</div>
    )
}

export default ValidationError;