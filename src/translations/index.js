import commonTranslations from './common';
import sensorTranslations from './sensors';
import calculatorTranslations from './calculator';
import navbarTranslations from './navbar';

export const translations = {
  english: {
    ...commonTranslations.english,
    ...sensorTranslations.english,
    ...calculatorTranslations.english,
    ...navbarTranslations.english,
  },
  tamil: {
    ...commonTranslations.tamil,
    ...sensorTranslations.tamil,
    ...calculatorTranslations.tamil,
    ...navbarTranslations.tamil,
  },
  hindi: {
    ...commonTranslations.hindi,
    ...sensorTranslations.hindi,
    ...calculatorTranslations.hindi,
    ...navbarTranslations.hindi,
  },
  haryanvi: {
    ...commonTranslations.haryanvi,
    ...sensorTranslations.haryanvi,
    ...calculatorTranslations.haryanvi,
    ...navbarTranslations.haryanvi,
  },
};

export default translations;  