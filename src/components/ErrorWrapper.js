import React from "react";
import {useTranslation} from "react-i18next";

const ErrorWrapper = () => {
    const {t} = useTranslation();

    return (
        <div className="popup d-flex justify-content-center align-items-center">
            <div className="popup__container popup__padding col-12 col-md-8 col-l-6">
                <h2 className="popup__title __title-font">{t('oops')}</h2>
                <p className="popup__text">{t('error_loading_data')}</p>
            </div>
        </div>
    )
}

export default ErrorWrapper;