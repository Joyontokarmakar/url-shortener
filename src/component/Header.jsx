import {Link, useLocation} from "react-router-dom";
import {ADD_PATH, ROOT_PATH} from "../routes/Slug.jsx";

export const Header = () => {
    let location = useLocation();
    return (
        <div className={'bg-gray-300 flex justify-center'}>
            <Link to={ROOT_PATH} className={'text-md my-2 p-2 ' + (location.pathname === ROOT_PATH ? 'text-blue-500 underline font-bold' : ' text-gray-500')}>Home</Link>
            <Link to={ADD_PATH} className={'text-md my-2 p-2 ' + (location.pathname === ADD_PATH ? 'text-blue-500 underline font-bold' : ' text-gray-500')}>Add</Link>
        </div>
    )
}
