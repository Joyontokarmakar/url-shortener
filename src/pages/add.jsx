import {useEffect, useState} from "react";

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

    useEffect(() => {
        localStorage.setItem("urls", JSON.stringify(urls));
    }, [urls]);

    const shortenUrl = async (e) => {
        if (inputUrl.trim() === "") {
            return;
        }
        e.preventDefault();
        try {
            const response = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${inputUrl}`
            )
            const data = await response.json()
            const urlData = data.result;
            setUrls((currentUrls) => {
                return [...currentUrls,
                    { id: Math.floor(Math.random()*1000), url: inputUrl, shortUrl: urlData?.full_short_link, name: urlData.code },
                ];
            });
            setInputUrl("");
        } catch (e) {
            alert(e);
        }
    };

    const handleInputChange = (e) => {
        setInputUrl(e.target.value);
    };

    return (
        <div className={' flex justify-center'}>
            <form onSubmit={shortenUrl} className={'border border-primaryColor w-10/12 md:w-1/2 flex justify-between'}>
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
        </div>
    )
}
