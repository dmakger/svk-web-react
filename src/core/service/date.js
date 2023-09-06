export const getDate = (date) => {
    const dateF = date.split('-');
    return `${dateF[2]} ${getMonth(dateF[1])} ${dateF[0]}`
}


const MONTH = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]

const getMonth = (digit) => {
    if (digit > 12)
        return -1
    return MONTH[digit-1]
}