import React, { useState } from 'react'

export const CheckBox = ({ label, isChecked, onCheck }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    let strokeColor;
    if (isChecked) {
        strokeColor = "white";
    } else if (isHovered && isClicked) {
        strokeColor = "#878787";
    } else {
        strokeColor = "#E3E3E3";
    }

    const handleMouseDown = () => {
        setIsClicked(true);
        onCheck();
    }

    const handleMouseUp = () => {
        setIsClicked(false);
    }

    return (
        <div className='check-tab' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <label className='cursor-pointer selection-off'>{label}</label>
            <div className='relative flex justify-center items-center'>
                <input type="checkbox" className='custom-cb peer' checked={isChecked} onChange={() => { }} />
                <svg className={`absolute top-[5px] left-[3px] ${!isChecked ? 'hidden' : 'block'}  peer-hover`} xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                    <path d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004" stroke={strokeColor} strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}
