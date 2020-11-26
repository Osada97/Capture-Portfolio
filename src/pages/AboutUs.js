import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
//animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop';

export default function AboutUs() {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <ScrollTop />
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}
