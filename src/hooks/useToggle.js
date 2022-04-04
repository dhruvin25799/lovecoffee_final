import { useState } from "react"

export const useToggle = (isTrue=false) => {
    const [toggle, setToggle] = useState(isTrue);
    const toggleOption = () => {
        setToggle(prevValue => !prevValue);
    }
    return {toggle, toggleOption};
}