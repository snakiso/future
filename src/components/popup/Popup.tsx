import './popup.scss'
import {Dispatch, SetStateAction} from "react";

type PopupProps = {
    message: string
    setMessage: Dispatch<SetStateAction<string>>
}

export const Popup = ({message, setMessage}: PopupProps) => {
    return (

        <div className={'popup'}>
            <div className={'popup__close-button'} onClick={() => setMessage('')}>
            </div>
            <p>{message}</p>
        </div>

    );
};

