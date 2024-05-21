import bg from '../../assets/back.mp4'
import './video.scss'
import {useEffect, useRef} from "react";

type VideoProps = {
    isLoading: boolean
    completed: boolean
}

export const Video = ({isLoading, completed}: VideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const preloadVideo = () => {
            if (videoRef.current) {
                videoRef.current.preload = 'auto';
                videoRef.current.load();
            }
        };
        preloadVideo();
    }, [])

    useEffect(() => {
        if (videoRef.current) {
            if (isLoading) {
                // Проверяем, является ли видео воспроизводимым
                if (videoRef.current.readyState >= 4) {
                    videoRef.current.play();
                } else {
                    videoRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
                }
            } else if (completed) {
                videoRef.current.pause();
            }
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
            }
        };
    }, [isLoading, completed]);

    const handleCanPlayThrough = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
        }
    };

    return (
        <video className={'video'} ref={videoRef} muted>
            <source src={bg} type="video/mp4"/>
        </video>
    );
};