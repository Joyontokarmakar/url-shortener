import {useEffect, useState} from "react";
import {UrlContainer} from "../component/UrlContainer.jsx";

export const Add = () => {
    const [inputUrl, setInputUrl] = useState("");
    const [urls, setUrls] = useState(()=>{
        const localValue = localStorage.getItem("urls");
        if (localValue == null) {
            return([]);
        } else {
            return(JSON.parse(localValue))
        }
    })

    const [message, setMessage] = useState('');
    const [msgStatus, setMsgStatus] = useState(false);

    const [add, setAdd] = useState(false)
    const [lastAddedUrl, setLastAddedUrl] = useState({})

    useEffect(() => {
        localStorage.setItem("urls", JSON.stringify(urls));
    }, [urls]);

    const shortenUrl = async (e) => {
        if (inputUrl.trim() === "") {return;}
        e.preventDefault();
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
            const data = await response.json()
            const urlData = data.result;
            const urlId = Math.floor(Math.random()*1000)
            setUrls((currentUrls) => {
                return [...currentUrls,
                    { id: urlId, url: inputUrl, shortUrl: urlData.full_short_link, name: urlData.code },
                ];
            });

            setInputUrl("");
            setAdd(true);
            lastAddedUrl.id = urlId
            lastAddedUrl.name = urlData.code
            lastAddedUrl.url = inputUrl
            lastAddedUrl.shortUrl = urlData?.full_short_link

        } catch (e) {
            setMsgStatus(true)
            setMessage('This url may have an issue');
        }
    };

    const handleInputChange = (e) => {
        setInputUrl(e.target.value);
    };

    return (
        <div>
            <form onSubmit={shortenUrl} className={' w-10/12 md:w-1/2 mx-auto flex justify-between mb-3 border border-primaryColor'}>
                <input
                    placeholder="Add a url..."
                    type="text"
                    value={inputUrl}
                    className={'h-8 w-4/5 focus:outline-none px-2'}
                    onChange={handleInputChange}
                />
                <button type={"submit"} className={'w-1/5 bg-primaryColor text-white text-sm px-4'}>
                    Add
                </button>
            </form>
            { add ?
                <UrlContainer
                    id={lastAddedUrl.id}
                    url={lastAddedUrl.url}
                    shortUrl={lastAddedUrl.shortUrl}
                    name={lastAddedUrl.name}
                    fullItem={lastAddedUrl}
                />
                :
                <></>
            }
            { msgStatus ?
                <p className={'text-center text-red-500 text-sm'}>{message}</p>
                : <></>
            }
            <p></p>
        </div>
    )
}
