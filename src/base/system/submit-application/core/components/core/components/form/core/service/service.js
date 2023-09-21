import {createClientPOST, submitApplicationPOST} from "../../../../../../../../../core/api/clientAPI";

export const getClientData = (data) => {
    return {
        username: data.username,
        number_phone: data.phone,
        email: data.email,
        communication: data.communication,
    }
}

export const getServicesPackageData = (data, client_id) => {
    const result = {
        "title": data.nameBusiness,
        "description": data.comment,
        "client_id": client_id,
        "services_package": []
    }

    if (data.interview === 'on') {
        result.services_package.push(1)
    }
    if (data.license === 'on') {
        result.services_package.push(2)
    }
    return result
}

export const getData = async (data) => {
    const result = {
        hasError: false,
        data: null,
    }
    try {
        const clientData = await createClientPOST(getClientData(data));
        result.data = await submitApplicationPOST(
            getServicesPackageData(data, clientData.id)
        )

    } catch (error) {
        result.hasError = true
    }
    return result;
}