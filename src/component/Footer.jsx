import {Link} from "react-router-dom";

export const Footer = () => {
    const getFullYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className={'bg-gray-300 border-t border-gray-200'}>
            <p className={' text-center text-sm '}>
                API: by <Link to={'https://shrtco.de/docs'} target={'_blank'}>Shortcode</Link>
            </p>
            <div className={'bg-blue-200'}>
                <p className={'text-center text-sm font-bold'}>
                    &copy; {getFullYear()} <Link to={'https://joyontokarmakar.netlify.app'}>Joyonto Karmakar</Link>. All rights reserved.
                </p>
            </div>
        </div>
    )
}
