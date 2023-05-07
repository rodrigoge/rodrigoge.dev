import { useState, useEffect } from 'react';
import './styles.scss';

export default function SwitchLanguage() {
    const [languageLocalStorage] = useState(localStorage.getItem('language'));
    const [isChecked, setIsChecked] = useState<boolean>(true);

    async function changeLanguage(language: String) {
        if (language === 'en-US') {
            document.body.classList.remove('en-US');
            document.body.classList.add('pt-BR');
        } else {
            document.body.classList.remove('pt-BR');
            document.body.classList.add('en-US');
        }
    }

    const toggleCheckedLanguage = () => {
        if (!isChecked) {
            changeLanguage('pt-BR');
            localStorage.setItem('language', 'pt-BR');
        } else {
            changeLanguage('en-US');
            localStorage.setItem('language', 'en-US');
        }

        setIsChecked(value => !value);
    }

    async function checkLanguage() {
        if (languageLocalStorage === 'pt-BR') {
            setIsChecked(true);
            changeLanguage('pt-BR');
            localStorage.setItem('language', 'pt-BR');
        } else {
            setIsChecked(false);
            changeLanguage('en-US');
            localStorage.setItem('language', 'en-US');
        }
    }

    useEffect(() => {
        checkLanguage();
    }, [languageLocalStorage]);

    return (
        <div className="switch-language-container">
            <label>
                <input
                    type="checkbox"
                    value={'isChecked'}
                    checked={isChecked}
                    onChange={toggleCheckedLanguage}
                />
                <i></i>
                <span></span>
            </label>
        </div>
    );
}