import React from 'react'
//animation
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from '../animation'
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

export default function ContactUs() {
    return (
        <ContactStyle variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <ScrollTop />
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle></Circle>
                            <h2>Send Us A message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle></Circle>
                            <h2>Send an Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle></Circle>
                            <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
padding:3rem 8rem;
color:#353535;
min-height:90vh;
background:#fff;
@media (max-width:1100px){
    padding:1rem;
    font-size:0.5rem;
}
`
const Title = styled.div`
    margin-bottom:3rem;
    color:black;
    @media (max-width:1100px){
    margin-top:3rem;
}
`
const Hide = styled.div`
overflow:hidden;
`
const Circle  = styled.div`
    border-radius:50%;
    width:2rem;
    height:2rem;
    background:#353535;
`
const Social = styled(motion.div)`
display:flex;
align-items:center;
h2{
    margin:1rem;
}
`
