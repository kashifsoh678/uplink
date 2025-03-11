"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = ({ children }) => {
    useEffect(() => {
        AOS.init({
            offset: 200, // Offset (in pixels) from the top of the element
            duration: 650, // Duration of the animation
            easing: 'ease-in-out', // Easing type
            delay: 100, // Delay before the animation starts
            once: true
        });
    }, [])
    return (
        <>{children}</>
    )
}
export default AosAnimation;