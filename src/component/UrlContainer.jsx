import {Link} from "react-router-dom";
import {EDIT_PATH} from "../routes/Slug.jsx";

export const UrlContainer = (prop) => {
    let {url, shortUrl, code, fullItem} = prop
    return (
        <div className={'flex justify-between items-center border border-primaryAshColor p-2 bg-dimLightColor mb-2'}>
            <div>
                <p className={'text-sm md:text-md'}><b>Short Name of your URL:</b> {code}</p>
                <p className={'text-sm md:text-md'}><b>Long URL:</b> {url} </p>
                <p className={'text-sm md:text-md'}><b>Short URL:</b> {shortUrl} </p>
            </div>
            <Link
                to={`${EDIT_PATH}/${code}`}
                state={fullItem}
                className={'bg-primaryColor text-white rounded text-sm px-4 py-2'}
            >
                Edit This URL
            </Link>
        </div>
    )
}
