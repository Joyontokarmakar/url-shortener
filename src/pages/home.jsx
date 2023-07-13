import {useState} from "react";
import {ADD_PATH} from "../routes/Slug.jsx";
import {Link} from "react-router-dom";
import {UrlContainer} from "../component/UrlContainer.jsx";

export const Home = () => {
    const [urls, setUrls] = useState(() => {
        const localValue = localStorage.getItem("urls");
        if (localValue == null) {
            return([]);
        } else {
            return(JSON.parse(localValue))
        }
    })
    return (
        <div>
            <p className={'text-lg font-bold text-center mb-3'}>
                { urls.length == 0 ? 'Your List is Empty' : 'Your URL List'}
            </p>

            {urls.length > 0 ? (urls.map((item, index) => (
                <UrlContainer
                    key={index}
                    id={item.id}
                    url={item.url}
                    shortUrl={item.shortUrl}
                    name={item.name}
                    fullItem={item}
                />
            ))) : <></>}

            <p className={'text-lg font-bold text-center mt-3'}>
                <Link to={ADD_PATH} className={'bg-dimDarkColor text-lightColor rounded text-sm px-4 py-2 ml-2 '}>
                    { urls.length == 0 ? 'Add Url' : 'Add New Url'}
                </Link>
            </p>
        </div>
    )
}
