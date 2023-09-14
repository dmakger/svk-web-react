import React from 'react';
import {formData} from './core/service/formData'
import InputWOTBase from '../../../../../../../../core/ui/input/WOT/base/InputWOTBase';

const SubmitApplicationForm = ({className, ...props}) => {
    // (
    //     <InputWOTBase key={index}
    //                         title={it.title} 
    //                         type={it.type}
    //                         placeholder={it.placeholder}
    //                         other={it.other} 
    //             />
    // )
    
    return (
        <div className={className} {...props}>
            {formData.map((it, index) => ({
                
            }
            ))}
        </div>
    );
};

export default SubmitApplicationForm;