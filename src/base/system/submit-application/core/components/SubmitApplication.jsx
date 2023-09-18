import React from 'react';
import cl from './_SubmitApplication.module.scss'
import clH2 from '../../../../core/scss/_h2.module.scss'
import SubmitApplicationForm from './core/components/form/SubmitApplicationForm';

const SubmitApplication = () => {
    return (
        <div>
            <p className={clH2.content}>
                <h2>Заполнение заявки</h2>
            </p>
            <SubmitApplicationForm className={cl.form}/>
        </div>
    );
};

export default SubmitApplication;