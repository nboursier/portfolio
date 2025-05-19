
import { useState, createContext } from 'react';


export const LanguageContext = createContext();

function LanguageContextProvider({children}) {
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (

        <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;
