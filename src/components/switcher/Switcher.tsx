import './switcher.scss'
import {Dispatch, SetStateAction, useRef} from "react";


type SwitcherProps = {
    position: string
    setPosition: Dispatch<SetStateAction<string>>

}

export const Switcher = ({position, setPosition}: SwitcherProps) => {


    const privateButton = useRef<HTMLSpanElement>(null);
    const careerButton = useRef<HTMLSpanElement>(null);
    const isPrivate = position === 'personal'
    const swipeStyle = isPrivate ? 'switcher__swipe switcher__swipe_personal' : 'switcher__swipe switcher__swipe_professional'
    const privateStyle = isPrivate ? 'switcher__item switcher__item_personal active' : 'switcher__item switcher__item_personal'
    const careerStyle = !isPrivate ? 'switcher__item switcher__item_professional active' : 'switcher__item switcher__item_professional'


    const checkWidth = () => {
        const padding = 80
        if (position === 'personal' && privateButton.current) {
            return privateButton.current.clientWidth + padding
        } else if (careerButton.current) {
            return careerButton.current.clientWidth + padding
        }
        return 182
    }

    const currentWidth = checkWidth()
    const personalClick = () => {
        setPosition('personal')
    }
    const professionalClick = () => {
        setPosition('professional')
    }


    return (
        <div className={'switcher'}>
            <span className={swipeStyle} style={{width: currentWidth}}></span>
            <span className={privateStyle} ref={privateButton}
                  onClick={personalClick}>Личное</span>
            <span className={careerStyle} ref={careerButton}
                  onClick={professionalClick}>Профессиональное</span>
        </div>
    );
};

