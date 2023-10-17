export const getIndexMain = (data) => {
    for (let i in data) {
        if (data[i].preview_image !== null) {
            return i;
        }
    }
    return -1;
}

export const getData = (data, amount=3) => {
    const slicedData = getSlicedData(data, amount);
    const dataWI = slicedData[0];
    const dataV = slicedData[1];

    const formattedData = [];
    const maxLength = Math.max(dataWI.length, dataV.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < dataWI.length)
            pushFormattedData(formattedData, dataWI[i])
        if (i < dataV.length)
            pushFormattedData(formattedData, dataV[i])
    }
    return formattedData;
}

// 
const pushFormattedData = (formattedData, data) => {
    for (let el of data) 
        formattedData.push(el)
}

const getSlicedData = (data, amount=3) => {
    let indexWI = 0;
    let indexV = 0;
    const dataWI = [[]];
    const dataV = [[]];
    for (let el of data) {
        if (el.preview_image === null) {
            indexWI = pushData(dataWI, indexWI, el, amount)
        } else {
            indexV = pushData(dataV, indexV, el, amount)
        }
    }
    return [dataWI, dataV]
}

const pushData = (data, index, el, amount=3) => {
    if (data[index].length === amount) {
        data.push([])
        index += 1
    }
    data[index].push(el)
    return index;
}