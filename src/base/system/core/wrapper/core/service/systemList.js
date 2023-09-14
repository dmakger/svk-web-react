
const systemListId = [1, 2, 3]

export const getFormatSystemList = (toc) => {
    const formatList = [];
    for (let el of toc) {
        let isExists = systemListId.includes(el.id)
        if (isExists) {
            formatList.push(el)
        }
    }
    return formatList;
}