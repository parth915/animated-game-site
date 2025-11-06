import React, {useRef} from 'react'
import gsap from "gsap";

const Button = ({title,containerClass,id,rightIcon, leftIcon}) => {
    const textRef = useRef(null);

    const handleMouseHover = () => {
        const element = textRef.current;
        if(!element) return;

        gsap.fromTo(
            element,
            {
                y: "100%", // start below
                rotateX: -90, // rotated away
                opacity: 0,
            },
            {
                y: "0%",
                rotateX: 0,
                opacity: 1,
                duration: 0.6,
                ease: "circ",
            }
        );
    }

    return (
        <div
        onMouseEnter={handleMouseHover}
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3
        ${containerClass}`}
        >
            {leftIcon}
            <span ref={textRef} className="relative inline-flex overflow-hidden font-general text-xl uppercase text-black">
                {title}
            </span>
        </div>
    )
}
export default Button
