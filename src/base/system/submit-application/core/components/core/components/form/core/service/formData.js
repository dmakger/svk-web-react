import {CHECKBOX_TYPE, ROW_TYPE, TEXT_TYPE, TEL_TYPE, EMAIL_TYPE, BUTTON_TYPE} from "./typeFormData"

const NAME_BUSINESS = {
    type: TEXT_TYPE,
    data: {
        required: true,
        title: 'Название вашего бизнес-проекта',
        placeholder: 'Сделано в Королёве',
    }
}

const FIO = {
    type: TEXT_TYPE,
    data: {
        required: true,
        title: 'Как к вам обращаться',
        placeholder: 'Гагарин Юрий Алексеевич',
    }
}

const PHONE = {
    type: TEL_TYPE,
    data: {
        required: true,
        pattern: '[0-9]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{3}',
        maxLength: 15,
        title: 'Номер телефона',
        placeholder: '8 (999) 999-99-99',
    }
}

const EMAIL = {
    type: EMAIL_TYPE,
    data: {
        title: 'Email',
        placeholder: 'kolev@mail.ru',
        required: true
    }
}

const SOCIAL_NETWORK = {
    type: TEXT_TYPE,
    data: {
        title: 'Телеграм или Вконтакте (абсолютная ссылка)',
        placeholder: 'vk.com/sdelano_v_korolyove',
        required: true
    }
}

const ROW_PACKAGE_STANDARD = {
    type: CHECKBOX_TYPE,
    data: {
        title: 'Стандартный',
        isActive: false,
    }
}

const ROW_PACKAGE_ADVANCED = {
    type: CHECKBOX_TYPE,
    data: {
        title: 'Расширенный',
        isActive: false,
    }
}

const ROW_PACKAGE = {
    type: ROW_TYPE,
    data: {
        title: '<p>Выберите пакеты <a>(существующие пакеты)</a></p>',
        list: [
            ROW_PACKAGE_STANDARD,
            ROW_PACKAGE_ADVANCED
        ]
    }
}

const COMMENTS = {
    type: TEXT_TYPE,
    data: {
        required: true,
        title: 'Комментарий',
        placeholder: 'Раскажите о вашем бренде',
    }
}

const APPROVAL = {
    type: CHECKBOX_TYPE,
    data: {
        title: 'Я даю своё согласие на обработку моих персональных данных, в соответствии с ФЗ от 27.07.2006 года №152-ФЗ«О персональных данных», на условиях и для целей, определенных Политикой конфиденциальности.',
        isActive: false,
    }
}

const SUBMIT_BUTTON = {
    type: BUTTON_TYPE,
    data: {
        title: 'Подать заявку',
    }
}


export const formData = [
    NAME_BUSINESS,
    FIO,
    PHONE,
    EMAIL,
    SOCIAL_NETWORK,
    ROW_PACKAGE,
    COMMENTS,
    APPROVAL,
    SUBMIT_BUTTON
]