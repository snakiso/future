import fullscreen from '../../assets/fullscreen.svg'
import './fullScreenButton.scss'
import {useState} from "react";

export const FullScreenButton = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            const element = document.documentElement;
            element.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        !isFullScreen
            ?
            <button className='fullscreen' onClick={toggleFullScreen}>
                <img src={fullscreen} alt=""/>
            </button>
            :
            <></>
    );
};

