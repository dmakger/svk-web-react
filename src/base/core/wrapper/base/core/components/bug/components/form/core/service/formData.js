import {
    BUTTON_TYPE,
    TEXT_TYPE,
    TEXTAREA_TYPE,
    WHITE_BUTTON_COLOR
} from "../../../../../../../../../../../core/ui/form/typeFormData";
import {SMALL_SIZE} from "../../../../../../../../../../../core/ui/form/sizeFormData";

const TITLE_PAGE = {
    type: TEXT_TYPE,
    other: {
        size: SMALL_SIZE,
    },
    data: {
        required: true,
        title: 'Страница с ошибкой',
        placeholder: 'Главная страница, О нас, Статья...',
        name: 'page',
    }
}

const FLAG_ERROR = {
    type: TEXTAREA_TYPE,
    other: {
        size: SMALL_SIZE,
    },
    data: {
        required: true,
        title: 'Как вызвать ошибку',
        placeholder: 'Необходимо нажать на кнопку...',
        name: 'calling_error',
    }
}

const DESCRIPTION_PAGE = {
    type: TEXTAREA_TYPE,
    other: {
        size: SMALL_SIZE,
    },
    data: {
        required: true,
        title: 'Описание ошибки',
        placeholder: 'Кнопка закрывает текст...',
        name: 'description',
    }
}

const SUBMIT_BUTTON = {
    type: BUTTON_TYPE,
    other: {
        size: SMALL_SIZE,
        color: WHITE_BUTTON_COLOR,
    },
    data: {
        title: 'Отправить',
        type: 'submit'
    }
}

export const formData = [
    TITLE_PAGE,
    FLAG_ERROR,
    DESCRIPTION_PAGE,
    SUBMIT_BUTTON
]