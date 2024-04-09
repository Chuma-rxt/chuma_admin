import { useState } from 'react';

export const useDropdownMenu = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);

    const toggleDropdownMenu = () => {
        setDropdownMenu((prevState) => !prevState);
    };

    return {
        dropdownMenu,
        toggleDropdownMenu,
    };
};
