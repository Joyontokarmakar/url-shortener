import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const Edit = () => {
    const location = useLocation();
    const propsData = location.state;
    const navigate = useNavigate()
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

    const handleDeleteUrl = (id, type) => {
        console.log(id)
        const updatedUrls = allUrl.filter((url) => url.id !== id);
        if(type === 'edit'){
            console.log('i am here')
            setAllUrl(updatedUrls);
        }
        localStorage.setItem("urls", JSON.stringify(updatedUrls));
        if (type === 'delete'){
            navigate("/")
        }
    };

    const shortenUrl = async (e) => {
        if (inputUrl.trim() === "") {return;}
        e.preventDefault();
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
            const data = await response.json()
            const urlData = data.result;
            url.name = urlData?.code;
            url.shortUrl = urlData?.full_short_link;
            url.url = inputUrl

            allUrl.map((item)=> {
                if(item.id === propsData.id){
                    handleDeleteUrl(item.id, 'edit')
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
        <div className={'border border-primaryAshColor p-2 bg-dimLightColor mb-2 rounded relative'}>
            <form onSubmit={shortenUrl}>
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
                <div className={'flex justify-center gap-x-4'}>
                    <button type={'submit'} className={'bg-primaryColor text-white rounded text-sm px-4 py-2'}>
                        Update
                    </button>

                </div>
            </form>
            <button
                onClick={()=>handleDeleteUrl(url.id, 'delete')}
                className={'bg-primaryColor text-lightColor rounded text-sm px-2 lg:px-4 py-1 lg:py-2 absolute top-0 right-0'}
            >
                <img className={'w-4 lg:w-5 h-4 lg:h-5'} src="/delete.svg" alt=""/>
            </button>
        </div>
    )
}
