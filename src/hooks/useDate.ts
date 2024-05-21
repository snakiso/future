import {useState} from "react";

type MonthesType = {
    [key: string]: string
}


export const UseDate = () => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const months: MonthesType = {
        1: 'Январь',
        2: 'Февраль',
        3: 'Март',
        4: 'Апрель',
        5: 'Мая',
        6: 'Июнь',
        7: 'Июль',
        8: 'Август',
        9: 'Сентябрь',
        10: 'Октябрь',
        11: 'Ноябрь',
        12: 'Декабрь'
    }

    const isLeapYear = (year: string) => {
        return (+year % 4 === 0 && +year % 100 !== 0) || +year % 400 === 0;
    };


    const generateYears = () => {
        const arrOfYear = []
        for (let i = 1950; i <= 2008; i++) {
            arrOfYear.push(i.toString())
        }
        return arrOfYear
    }

    const yearForRender = generateYears().reverse()

    const getDayOptions = (count: number) => {
        const options = [];
        for (let i = 1; i <= count; i++) {
            options.push(i.toString());
        }
        return options;
    };


    const getDaysInMonth = (month: string, year: string) => {
        if (month === '2') {
            // Февраль
            if (isLeapYear(year) && +day >= 30) {
                setDay('29')
            } else if (!isLeapYear(year) && +day >= 29) {
                setDay('28')
            }
            return isLeapYear(year) ? 29 : 28;
        } else if (['4', '6', '9', '11'].includes(month)) {
            if (day === '31') {
                setDay('30')
            }
            return 30;
        } else {
            // Остальные месяцы
            return 31;
        }
    };

    function getKeyByValue(object: MonthesType, value: string) {
        const key = Object.keys(object).find(key => object[key] === value);
        if (key) {
            return Object.keys(object).find(key => object[key] === value);
        }
        return '1'
    }

    const key = getKeyByValue(months, month)


    const daysForRender = getDayOptions(getDaysInMonth(key ?? '1', year))


    const addZero = (value: string) => {
        if (value.length === 1) {
            return '0' + value
        } else {
            return value
        }
    }

    return {day, month, months, year, key, addZero, yearForRender, daysForRender, setMonth, setYear, setDay}
};

