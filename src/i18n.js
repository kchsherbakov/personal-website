import i18n from 'i18next'
import intervalPlural from 'i18next-intervalplural-postprocessor';
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import {initReactI18next} from 'react-i18next'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(intervalPlural)
    .init({
        fallbackLng: "en",
        load: 'languageOnly',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: ['index'],
        defaultNS: 'index',
        react: {},
    })

export default i18n;