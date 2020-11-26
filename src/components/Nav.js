import { motion } from 'framer-motion';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {

    const {pathName} = useLocation(); 
    
    console.log(pathName);
    return (
        <StyledNav>
            <h1><Link id="logo" to='/'>Capture</Link></h1>
            <ul>
                <li>
                    <Link to='/'>1. About Us</Link>
                    <Line transition={{duration:0.75}} initial={{width:'0%'}} animate={{width: pathName === '/' ? '50%' : '0%'}}/>
                </li>
                <li>
                    <Link to='work'>2. Our Work</Link>
                    <Line transition={{duration:0.75}} initial={{width:'0%'}} animate={{width: pathName === '/work' ? '50%' : '0%'}}/>
                </li>
                <li>
                    <Link to='contact'>3. Contact Us</Link>
                    <Line transition={{duration:0.75}} initial={{width:'0%'}} animate={{width: pathName === '/contact' ? '50%' : '0%'}}/>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav  = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 10rem;
background:#282828;
position:sticky;
top:0;
z-index:10;
a{
    color:white;
    text-decoration:none;
    font-size:0.9rem;
}
ul{
    display:flex;
    list-style:none
}
#logo{
    font-size:1.5rem;
    font-family:'Lobster',cursive;
    font-weight: lighter;
}
li{
    padding-left:5rem;
    position:relative;
}
    @media (max-width:800px){
        flex-direction:column;
        padding:1rem 0rem;
        #logo{
            display:inline-block;
            margin:1rem;
        }
        ul{
            padding:2rem;
            justify-content:space-around;
            width:100%;
        }
        li{
            padding:0;
        }
    }
`
const Line = styled(motion.div)`
height:0.2rem;
background:#23d997;
width:0%;
position:absolute;
bottom:-80%;
left:55%;
`