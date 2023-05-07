import { useState, useEffect } from 'react';
import './styles.scss';

export default function SwitchTheme() {
    const [themeLocalStorage] = useState(localStorage.getItem('theme'));
    const [isChecked, setIsChecked] = useState<boolean>(true);

    async function changeTheme(theme: String) {
        if (theme === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    const toggleCheckedTheme = () => {
        if (!isChecked) {
            changeTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            changeTheme('light');
            localStorage.setItem('theme', 'light');
        }

        setIsChecked(value => !value);
    }


    async function checkTheme() {
        if (themeLocalStorage === 'dark') {
            setIsChecked(true);
            changeTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setIsChecked(false);
            changeTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        checkTheme();
    }, [themeLocalStorage]);

    return (
        <div className="switch-theme-container">
            <label>
                <input
                    type="checkbox"
                    value={'isChecked'}
                    checked={isChecked}
                    onChange={toggleCheckedTheme}
                />
                <i></i>
                <span></span>
            </label>
        </div>
    );
}