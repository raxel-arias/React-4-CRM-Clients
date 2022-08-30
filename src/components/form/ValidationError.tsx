import {ValidationErrorCP} from "../../interfaces/form/form-component-props.interface";

const ValidationError = (props: ValidationErrorCP): JSX.Element => {

    const { msg } = props;

    return (
        <div className="text-red-500">{msg}</div>
    )
}

export default ValidationError;