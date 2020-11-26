import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import {MovieState} from '../movieState'
import styled from 'styled-components';
//animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop';

export default function MovieDetail() {
    const history =  useHistory();
    const url = history.location.pathname;

    const [movies, setmovies] = useState(MovieState)
    const [movie,setMovie] = useState(null);

    //useEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0])
    }, [movies.url])

    return (
        <>
        {movie && (
        <Details variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <ScrollTop />
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt=""/>
            </HeadLine>
            <Awards>
                {movie.awards.map((award)=>(
                    <Award  title={award.title} description={award.description} key={award.title} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt=""/>
            </ImageDisplay>
        </Details>

        )}
        </>
    )
}


const Details = styled(motion.div)`
    color:white;
`
const HeadLine = styled.div`
    min-height:90vh;
    padding-top:20vh;
    position:relative;
    h2{
        position:absolute;
        top:10%;
        left:50%;
        transform:translate(-50%,-10%);
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`
const Awards = styled.div`
    min-height:80vh;
    display:flex;
    margin:2rem 10rem;
    align-items:center;
    justify-content:space-around;
    @media (max-width:800px){
    display:block;
    margin:1rem;
}
`
const AwardStyle = styled.div`
padding:2rem;
    h3{
        font-size:1.2rem
    }
    .line{
        width:100%;
        background: #23d997;
        height:0.2rem;
        margin:1rem 0rem;
    }
`
const ImageDisplay = styled.div`
min-height:50vh;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`

//award components
const Award = ({title,description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}