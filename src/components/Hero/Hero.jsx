import React from 'react'
import { HeroArrow, HeroContainerStyled, HeroText } from './HeroStyles'
import HeroImg from '../../assets/img/img-hero2.jpg'

import { HiArrowDown } from 'react-icons/hi'
const Hero = () => {
    return (
        <HeroContainerStyled>
            <img src={HeroImg}/>
            <HeroText>
                <h1>¿ya probaste <span>él mejor pollo frito</span>  de tu vida?</h1>
            </HeroText>
            <HeroArrow>
                <HiArrowDown />
            </HeroArrow>
        </HeroContainerStyled>
    )
}

export default Hero