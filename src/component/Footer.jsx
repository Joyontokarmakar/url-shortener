import {Link} from "react-router-dom";

export const Footer = () => {
    const getFullYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className={'bg-primaryAshColor border-t border-gray-200'}>
            <p className={' text-center text-sm py-1'}>
                <span>API by </span>
                <span>
                    <Link
                        to={'https://shrtco.de/docs'}
                        target={'_blank'}
                        className={'font-bold'}
                    >
                        Shortcode
                    </Link>
                </span>
            </p>
            <div className={'bg-darkAshColor py-1'}>
                <p className={'text-center text-xs md:text-sm text-primaryLightColor'}>
                    <span>&copy; {getFullYear()} </span>
                    <span className={'font-bold'}>url-abbreviate </span>
                    <span>all rights reserved by — </span>
                    <Link
                        to={'https://joyontokarmakar.netlify.app'}
                        target={'_blank'}
                        className={'font-bold text-dimLightColor'}
                    >
                        Joyonto Karmakar.
                    </Link>
                </p>
            </div>
        </div>
    )
}
