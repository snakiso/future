import {useState} from "react";

export const useIsOpen = () => {
    const [isOpen, setIsOpen] = useState(false)
    return {isOpen, setIsOpen}
};

