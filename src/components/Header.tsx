import { useEffect, useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="flex p-4 py-7 justify-between bg-darkblue font-sans">
            <h1 className="dark:bg-slate-600 font-bold">Where in the world?</h1>
            <button className="text-sm" onClick={toggleDarkMode}>Dark Mode</button>
        </div>
    );
};

export default Header;
