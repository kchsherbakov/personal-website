import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {StrapiContext} from "./Providers/StrapiProvider";


export const LangSwitcher = () => {
    const context = useContext(StrapiContext);
    const {t, i18n} = useTranslation();
    const {loadData} = context;

    async function changeLanguage(newLang) {
        await i18n.changeLanguage(newLang);
        loadData();
    }

    return (
        <ul className="lang-switch __console-font">
            <li className={`lang-switch-item ${i18n.language === 'en' ? "lang-switch-item_active" : ''}`}>
                <button onClick={() => changeLanguage('en')}>{t('lng_en_label')}</button>
            </li>
            <li className={`lang-switch-item ${i18n.language === 'ru' ? "lang-switch-item_active" : ''}`}>
                <button onClick={() => changeLanguage('ru')}>{t('lng_ru_label')}</button>
            </li>
        </ul>
    )
}