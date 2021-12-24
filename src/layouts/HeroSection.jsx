import React from "react";

import {
    HeroStart,
    HeroBody,
    HeroImage,
    HeroText,
    HeroTitle,
    HeroSubtitle
} from "../components/Hero";

function HeroSection() {
    return (
        <HeroStart>
            <HeroBody>
                <HeroImage/>
                <HeroText>
                    <HeroTitle> Atanas Pozharliev</HeroTitle>
                    <HeroSubtitle> The Backend Dev. For You</HeroSubtitle>
                </HeroText>
            </HeroBody>
        </HeroStart>
    )
}

export default HeroSection;
