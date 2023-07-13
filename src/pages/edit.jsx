import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const Edit = () => {
    const location = useLocation();
    const propsData = location.state;

    const [allUrl, setAllUrl] = useState(() => {
        const localValue = localStorage.getItem("urls");
        if (localValue == null) {
            return([]);
        } else {
            return(JSON.parse(localValue))
        }
    })
    const [url, setUrl] = useState(()=> {
        const urlInfo = allUrl.filter((item)=> item.id === propsData.id)
        return urlInfo[0]
    })
    const [inputUrl, setInputUrl] = useState(propsData.url);

    const handleInputChange = (e) => {
        setInputUrl(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem("urls", JSON.stringify(allUrl));
    }, [allUrl]);

    const handleDeleteUrl = (id) => {
        const updatedUrls = allUrl.filter((url) => url.id !== id);
        setAllUrl(updatedUrls);
        localStorage.setItem("urls", JSON.stringify(updatedUrls));
    };

    const shortenUrl = async (e) => {
        if (inputUrl.trim() === "") {return;}
        e.preventDefault();
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
            const data = await response.json()
            const urlData = data.result;
            url.name = urlData.code;
            url.shortUrl = urlData.full_short_link;
            url.url = inputUrl

            allUrl.map((item)=> {
                if(item.id === propsData.id){
                    handleDeleteUrl(item.id)
                }
            })

            setAllUrl((currentUrls) => {
                return [...currentUrls, url,];
            });

        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className={'border border-primaryAshColor p-2 bg-dimLightColor mb-2'}>
            <form onSubmit={shortenUrl}>
                <div>
                    <p className={'text-sm md:text-md mb-2'}><span className={'text-darkColor font-bold'}>Short Name of your URL: </span> {url.name}</p>
                    <div className={'text-sm md:text-md mb-2'}>
                        <span className={'text-darkColor font-bold'}>Long URL: </span>
                        <input
                            type="text"
                            className={'h-8 w-4/5 focus:outline-none px-2'}
                            value={inputUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                    <p className={'text-sm md:text-md mb-2'}>
                        <span className={'text-darkColor font-bold'}>Short URL: </span>
                        <Link className={'text-darkAshColor font-medium underline'} to={url.shortUrl} target={'_blank'}>{url.shortUrl}</Link>
                    </p>
                </div>
                <button type={'submit'} className={'mx-auto block bg-primaryColor text-white rounded text-sm px-4 py-2'}>
                    Update
                </button>
            </form>
        </div>
    )
}
