export const getNormForm = (count, one, mid, large) => {
    const units = count % 10
    if (4 < units < 10 || 10 < count < 21 || units === 0)
        return `${count} ${large}`
    else if (1 < units < 5)
        return `${count} ${mid}`
    return `${count} ${one}`
}