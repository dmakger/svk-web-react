import React, {useEffect, useState} from 'react';
import {getBrandSupports} from "../../../../../core/api/coreAPI";
import BrandSupportList from "./core/components/list/BrandSupportList";

const BrandSupport = () => {
    const [brandPartners, setBrandPartners] = useState([]);
    useEffect(() => {
        getBrandSupports()
            .then(response => {setBrandPartners(response.results)})
    }, [])

    return (
        <BrandSupportList list={brandPartners} />
    );
};

export default BrandSupport;