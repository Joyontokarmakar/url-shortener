import {Link} from "react-router-dom";
import {EDIT_PATH} from "../routes/Slug.jsx";

export const UrlContainer = (prop) => {
    let {id, url, shortUrl, name, fullItem} = prop
    return (
        <div className={'flex justify-between items-center border border-primaryAshColor p-2 bg-dimLightColor mb-2'}>
            <div>
                <p className={'text-sm md:text-md mb-2'}><span className={'text-darkColor font-bold'}>Short Name of your URL: </span> {name}</p>
                <p className={'text-sm md:text-md mb-2'}>
                    <span className={'text-darkColor font-bold'}>Long URL: </span>
                    <Link className={'text-darkAshColor font-medium underline'} to={url} target={'_blank'}>{url}</Link>
                </p>
                <p className={'text-sm md:text-md mb-2'}>
                    <span className={'text-darkColor font-bold'}>Short URL: </span>
                    <Link className={'text-darkAshColor font-medium underline'} to={shortUrl} target={'_blank'}>{shortUrl}</Link>
                </p>
            </div>
            <Link
                to={`${EDIT_PATH}/${id}`}
                state={fullItem}
                className={'bg-primaryColor text-white rounded text-sm px-4 py-2'}
            >
                Edit This URL
            </Link>
        </div>
    )
}
