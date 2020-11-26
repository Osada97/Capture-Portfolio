import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from "framer-motion";
import { useScroll } from './useScro';
import {scrollReveal} from '../animation';

function FaqSection() {

    const [element,controls] = useScroll();

    return (
        <div style={{overflow:"hidden"}}>
            <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
                <h2>Any Questions <span>FAQ</span></h2>
                <AnimateSharedLayout>
                    <Toggle title="How Do I Start?">
                                <div className="answer">
                                    <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum nam ut architecto corrupti sit itaque, quidem illo? Magni culpa n
                                    </p>
                                </div>
                    </Toggle>
                    <Toggle title="How Do Start?">
                                <div className="answer">
                                    <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum nam ut architecto corrupti sit itaque, quidem illo? Magni culpa n
                                    </p>
                                </div>
                    </Toggle>
                    <Toggle title="Different Payment Methods?">
                                <div className="answer">
                                    <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum nam ut architecto corrupti sit itaque, quidem illo? Magni culpa n
                                    </p>
                                </div>
                    </Toggle>
                    <Toggle title="What Products Do you Sell">
                                <div className="answer">
                                    <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum nam ut architecto corrupti sit itaque, quidem illo? Magni culpa n
                                    </p>
                                </div>
                    </Toggle>
                </AnimateSharedLayout>
            </Faq>
        </div>
    )
}

const Faq = styled(About)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom:1rem;
    font-weight: lighter;
}
.faq-line{
    background:#cccccc;
    height:0.1rem;
    margin:1rem 0rem;
    width:100%;
}
.question{
    padding:2rem 0rem;
    cursor: pointer;
}
.answer{
    padding:2rem 0rem;
    p{
        padding:1rem 0rem
    }
}
`

export default FaqSection
