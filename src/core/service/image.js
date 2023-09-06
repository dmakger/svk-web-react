import { GLOBAL_URL } from "../api/mainAPI"

export const getImage = (url) => {
    return `${GLOBAL_URL}/${url}`
}