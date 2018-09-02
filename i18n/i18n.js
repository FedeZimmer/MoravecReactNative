import I18n from 'react-native-i18n';
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';
import pt from './locales/pt';

I18n.fallbacks = true;

I18n.translations = {
    es,
    en,
    fr,
    pt,
};

export default I18n;