import {
    CHECKBOX_TYPE,
    ROW_TYPE,
    TEXT_TYPE,
    TEL_TYPE,
    EMAIL_TYPE,
    BUTTON_TYPE,
    TEXTAREA_TYPE, BLUE_BUTTON_COLOR
} from "../../../../../../../../../../core/ui/form/typeFormData"
import {LARGE_SIZE} from "../../../../../../../../../../core/ui/form/sizeFormData";

const NAME_BUSINESS = {
    type: TEXT_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        required: true,
        title: 'Название вашего бизнес-проекта',
        placeholder: 'Сделано в Королёве',
        name: 'nameBusiness',
    }
}

const FIO = {
    type: TEXT_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        required: true,
        title: 'Как к вам обращаться',
        placeholder: 'Королёв Сергей Павлович',
        name: 'username',
    }
}

const PHONE = {
    type: TEL_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        required: true,
        // pattern: '[0-9]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{3}',
        maxLength: 15,
        title: 'Номер телефона',
        placeholder: '8 (999) 999-99-99',
        name: 'phone',
    }
}

const EMAIL = {
    type: EMAIL_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        title: 'Email',
        placeholder: 'kolev@mail.ru',
        required: true,
        name: 'email',
    }
}

const SOCIAL_NETWORK = {
    type: TEXT_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        title: 'Соцсеть для связи',
        placeholder: 'vk.com/sdelano_v_korolyove',
        required: true,
        name: 'communication',
    }
}

const ROW_PACKAGE_STANDARD = {
    type: CHECKBOX_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        title: 'Хочу интервью',
        isActive: false,
        name: 'interview',
    }
}

const ROW_PACKAGE_ADVANCED = {
    type: CHECKBOX_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        title: 'Хочу лицензию',
        isActive: false,
        name: 'license',
    }
}

const ROW_PACKAGE = {
    type: ROW_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        // title: '<p>Выберите пакеты <a>(существующие пакеты)</a></p>',
        title: 'Выберите опции партнёрства:',
        list: [
            ROW_PACKAGE_STANDARD,
            ROW_PACKAGE_ADVANCED
        ]
    }
}

const COMMENTS = {
    type: TEXTAREA_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        required: true,
        title: 'Комментарий',
        placeholder: 'Задайте вопрос',
        name: 'comment',
    }
}

const APPROVAL = {
    type: CHECKBOX_TYPE,
    other: {
        size: LARGE_SIZE,
    },
    data: {
        title: 'Я даю своё согласие на обработку моих персональных данных в соответствии с ФЗ от 27.07.2006 года №152-ФЗ«О персональных данных», на условиях и для целей, определенных Политикой конфиденциальности.',
        isActive: false,
        name: 'approval',
    }
}

const SUBMIT_BUTTON = {
    type: BUTTON_TYPE,
    other: {
        size: LARGE_SIZE,
        color: BLUE_BUTTON_COLOR,
    },
    data: {
        title: 'Подать заявку',
        type: 'submit'
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