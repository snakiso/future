import {Select} from "../select/Select.tsx";
import './form.scss'
import {Switcher} from "../switcher/Switcher.tsx";
import {FormEvent, useEffect, useState} from "react";
import {UseDate} from "../../hooks/useDate.ts";
import {Popup} from "../popup/Popup.tsx";
//import preloader from '../../assets/preloader.svg'
import {AnimatePresence, motion} from "framer-motion";
import {useLazyGetMessageQuery} from "../../services/data-service.ts";
import {Video} from "../video/Video.tsx";


export const Form = () => {
    const [position, setPosition] = useState('personal')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [getFuture, params] = useLazyGetMessageQuery()
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        if (params.status === "fulfilled") {
            setCompleted(true)
        }
    }, [params]);

    const {
        day,
        setDay,
        key,
        addZero,
        year,
        month,
        months,
        setMonth,
        setYear,
        daysForRender,
        yearForRender
    } = UseDate()


    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault()
        const dataForSend = {date: `${year}-${addZero(key ?? '1')}-${addZero(day)}`, type: position}
        getFuture(dataForSend).then(data => {
            if (data.data) {
                if (data.data.STATUS !== 'error') {
                    setDay('')
                    setYear('')
                    setMonth('')
                    setPosition('personal')
                }
                setMessage(data.data.MESSAGE)
                console.log(data.data)
            }
        }).finally(() => setIsLoading(false))

    }

    const formClassName = isLoading ? 'form form_none' : 'form'
    return (
        <>
            <Video isLoading={isLoading} completed={completed}/>
            {!message
                ?
                <form className={formClassName} onSubmit={submitHandler}>
                    <h3 className={'form__subtitle'}>Введите дату рождения</h3>
                    <div className={'form__select-box'}>
                        <Select data={daysForRender} placeholder={'День'} value={day}
                                onValueChange={setDay}/>
                        <Select data={Object.values(months)} placeholder={'Месяц'} value={month}
                                onValueChange={setMonth}/>
                        <Select data={yearForRender} placeholder={'Год'} value={year} onValueChange={setYear}/>
                    </div>
                    <h3 className={'form__subtitle'}>Выберите сферу</h3>
                    <Switcher position={position} setPosition={setPosition}/>
                    <button type={'submit'} disabled={!day || !month || !year || isLoading}
                            className={'form__submit'}>УЗНАТЬ БУДУЩЕЕ
                    </button>
                </form>
                :
                <AnimatePresence>
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1}}>
                        <Popup setMessage={setMessage} message={message}/>
                    </motion.div>
                </AnimatePresence>
            }
        </>

    );
};

