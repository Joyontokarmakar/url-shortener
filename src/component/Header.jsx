import {Link, useLocation} from "react-router-dom";
import {ADD_PATH, ROOT_PATH} from "../routes/Slug.jsx";

export const Header = () => {
    let location = useLocation();
    return (
        <div className={'bg-darkAshColor flex justify-center gap-x-2'}>
            <Link
                to={ROOT_PATH}
                className={'text-md my-2 p-2 ' + (location.pathname === ROOT_PATH ? 'text-primaryLightColor underline font-bold' : ' text-dimLightColor')}
            >
                Home
            </Link>

            <Link
                to={ADD_PATH}
                className={'text-md my-2 p-2 ' + (location.pathname === ADD_PATH ? 'text-primaryLightColor underline font-bold' : ' text-dimLightColor')}
            >
                Add
            </Link>
        </div>
    )
}
