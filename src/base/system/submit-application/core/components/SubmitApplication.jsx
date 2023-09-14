import React from 'react';
import cl from './_SubmitApplication.module.scss'
import clH2 from '../../../../core/scss/_h2.module.scss'
import InputWOTBase from '../../../../../core/ui/input/WOT/base/InputWOTBase';
import SubmitApplicationForm from './core/components/form/SubmitApplicationForm';

const SubmitApplication = () => {
    return (
        <div>
            {/* <h2 className={clH2.h2}>Заполнение заявки</h2> */}
            <SubmitApplicationForm className={cl.form} />
        </div>
    );
};

export default SubmitApplication;