import { useEffect, useState } from 'react';
import './styles.scss';

export default function SwitchTheme() {
    const [themeLocalStorage] = useState(localStorage.getItem('themeLocalStorage'));
    const [switchComponent, setSwitchComponent] = useState<boolean>(true);

    const toggleCheckedTheme = () => {
        if (!switchComponent) {
            modificaTema('dark');
            localStorage.setItem('themeLocalStorage', 'dark');
        } else {
            modificaTema('light');
            localStorage.setItem('themeLocalStorage', 'light');
        }

        setSwitchComponent(value => !value);
    }

    async function modificaTema(tema: String) {
        if (tema === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    async function verificaTema() {
        if (themeLocalStorage === 'dark') {
            setSwitchComponent(true);
            modificaTema('dark');
            localStorage.setItem('themeLocalStorage', 'dark');
        } else {
            setSwitchComponent(false);
            modificaTema('light');
            localStorage.setItem('themeLocalStorage', 'light');
        }
    }

    useEffect(() => {
        verificaTema();
    }, [themeLocalStorage]);


    return (
        <div className="switch-theme-container">
            <div className="toggle-theme">
                <label>
                    <input
                        type="checkbox"
                        value={'switchComponent'}
                        checked={switchComponent}
                        onChange={toggleCheckedTheme}
                    />
                    <i></i>
                    <span></span>
                </label>
            </div>
        </div>
    );
}