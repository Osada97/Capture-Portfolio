import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from 'styled-components';

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to Make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams </span>Come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us from any photography or videography ideas that you have.we
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="gye" />
      </Image>
    </About>
  );
}

//styled components
const About = styled.div`
  min-height:90vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 5rem 10rem;
  color:#fff;
`
const Description = styled.div`
  flex:1;
  padding-right:5rem;
  h2{
    font-weight:lighter;
  }
`
const Image = styled.div`
flex:1;
overflow:hidden;
img{
  width:100%;
  height:80vh;
  object-fit:cover;
}
`
const Hide = styled.div`
overflow:hidden
`

export default AboutSection;
