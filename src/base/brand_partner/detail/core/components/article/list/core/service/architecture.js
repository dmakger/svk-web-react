export const getIndexMain = (data) => {
    for (let i in data) {
        if (data[i].preview_image !== null) {
            return i;
        }
    }
    return -1;
}

export const getData = (data) => {
    const slicedData = getSlicedData(data);
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

const getSlicedData = (data) => {
    let indexWI = 0;
    let indexV = 0;
    const dataWI = [[]];
    const dataV = [[]];
    for (let el of data) {
        if (el.preview_image === null) {
            indexWI = pushData(dataWI, indexWI, el)
        } else {
            indexV = pushData(dataV, indexV, el)
        }
    }
    return [dataWI, dataV]
}

const pushData = (data, index, el) => {
    if (data[index].length === 3) {
        data.push([])
        index += 1
    }
    data[index].push(el)
    return index;
}