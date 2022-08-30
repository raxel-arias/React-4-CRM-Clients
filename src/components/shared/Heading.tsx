import {HeadingCP} from "../../interfaces/shared/heading-component-props.interface";

const Heading = (props: HeadingCP): JSX.Element => {

    const {title, subtitle} = props;

    return (
        <div className="">
            <h1 className={"font-black text-4xl text-center text-blue-900"}>{title}</h1>

            <p className={"my-4 text-center text-gray-600 font-semibold text-2xl"}>{subtitle}</p>
        </div>
    )
}

export default Heading;