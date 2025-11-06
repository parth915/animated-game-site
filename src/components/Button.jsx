import React from 'react'

const Button = ({title,containerClass,id,rightIcon, leftIcon}) => {
    return (
        <div
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3
        ${containerClass}`}
        >
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xl uppercase text-black">
                {title}
            </span>
        </div>
    )
}
export default Button
