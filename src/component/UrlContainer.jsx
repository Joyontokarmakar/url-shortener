import {Link, useLocation} from "react-router-dom";
import {ADD_PATH, EDIT_PATH, ROOT_PATH} from "../routes/Slug.jsx";

export const UrlContainer = (prop) => {
    let {id, url, shortUrl, name, fullItem} = prop
    let location = useLocation();

    return (
        <div>
             <div className={'border border-primaryAshColor bg-dimLightColor mb-2 flex justify-between items-center p-2'}>
                <div className={'w-4/5'}>
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
                    className={'w-1/5 bg-primaryColor px-4 py-2 mb-2 rounded text-lightColor text-sm text-center'}
                >
                    Edit This URL
                </Link>
            </div>
             { location.pathname === ADD_PATH ?
                <h2 className={'bg-primaryLightColor py-1 text-center text-xs md:text-sm'}>
                    <span className={'text-primaryAshColor'}>You can see your all shortened urls from </span>
                    <Link to={ROOT_PATH} className={'font-medium md:font-bold text-darkAshColor'}>Home Page.</Link>
                </h2> : <></>
             }
        </div>
    )
}
