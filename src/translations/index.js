import sensorTranslations from './sensors';
import navbarTranslations from './navbar';
import soilManureTranslations from './soilManure';

const translations = {
  english: {
    brandName: navbarTranslations.english.brandName,
    home: navbarTranslations.english.home,
    calculator: navbarTranslations.english.calculator,
    ...sensorTranslations.english,
    navbar: navbarTranslations.english,
    soilManure: soilManureTranslations.english
  },
  tamil: {
    brandName: navbarTranslations.tamil.brandName,
    home: navbarTranslations.tamil.home,
    calculator: navbarTranslations.tamil.calculator,
    ...sensorTranslations.tamil,
    navbar: navbarTranslations.tamil,
    soilManure: soilManureTranslations.tamil
  },
  hindi: {
    brandName: navbarTranslations.hindi.brandName,
    home: navbarTranslations.hindi.home,
    calculator: navbarTranslations.hindi.calculator,
    ...sensorTranslations.hindi,
    navbar: navbarTranslations.hindi,
    soilManure: soilManureTranslations.hindi
  },
  punjabi: {
    brandName: navbarTranslations.punjabi.brandName,
    home: navbarTranslations.punjabi.home,
    calculator: navbarTranslations.punjabi.calculator,
    ...sensorTranslations.punjabi,
    navbar: navbarTranslations.punjabi,
    soilManure: soilManureTranslations.punjabi
    
  },
  gujarati: {
    brandName: navbarTranslations.gujarati.brandName,
    home: navbarTranslations.gujarati.home,
    calculator: navbarTranslations.gujarati.calculator,
    ...sensorTranslations.gujarati,
    navbar: navbarTranslations.gujarati,
    soilManure: soilManureTranslations.gujarati
    
  },
  haryanvi: {
    brandName: navbarTranslations.haryanvi.brandName,
    home: navbarTranslations.haryanvi.home,
    calculator: navbarTranslations.haryanvi.calculator,
    ...sensorTranslations.haryanvi,
    navbar: navbarTranslations.haryanvi,
    soilManure: soilManureTranslations.haryanvi
  }
};

export default translations;  