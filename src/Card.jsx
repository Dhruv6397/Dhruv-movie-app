import React from 'react'
import styled from 'styled-components'
import CardImage from './cardimage.avif'

const ImageContainer = styled.div`
width:20vw;
height:30vh;
border-radius:20px;
img{
  width:20vw;
  border-radius:20px;
  height:30vh;
  &:hover{
    @media (max-width: 768px) {
      width:50vw;
      height:20vh
    }
  }
}
@media (max-width: 768px) {
  width:50vw;
  height:20vh
}
`
const ImageWrapper = styled.div`
width:20vw;
height:15vh;
display:none;
border-radius:0 0 20px 20px ;
transition: all 0.3s ease;
// margin-top:20px;
display:none;
z-index:1;
&:hover{
  display:none;
}
@media (max-width: 768px) {
  width:50vw;
  height:10vh
}
`
const CardMainContainer = styled.div`
width:20vw;
height:30vh;
box-shadow:5px 5px 5px #101820FF;
display:flex;
color:#F2AA4CFF;
background-color:#101820FF;
cursor:pointer;
flex-direction:column;
text-align:center;
border-radius:20px;
margin-left:8px;
padding:0;
&:hover {
  height:50vh;
  ${ImageContainer}:hover + ${ImageWrapper} {
    display: block;
  }

  @media (max-width: 768px) {
    width:50vw;
    height:30vh
  }
}
`
const MovieTitle = styled.h1`
font-size:1.5em;
`
const MovieDescription = styled.div`
// margin-top:1em;
padding-right:2em;
padding-left:2em;
display:flex;
h3{
  font-size:1em;
}
`
const MovieDescriptionChild = styled.div`
margin:0 0 0 0;
display:flex;
flex-direction:column;
float:right;
h4{
  font-size:1em;
}
`

export default function Card({movie}) {
  const {id,poster_path,title,release_date,vote_count,vote_average}= movie;
  console.log(id)
  return (
    <>
      <CardMainContainer>
        <ImageContainer>
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`?`https://image.tmdb.org/t/p/original/${poster_path}`:CardImage} alt="imag" />
        </ImageContainer>
        <ImageWrapper>
          <MovieTitle>{title}</MovieTitle>
          <MovieDescription>
            <h3>Release Date: {release_date}</h3>
            <MovieDescriptionChild>
              <h4>Votes Count: {vote_count}</h4>
              <h4>Rating: {vote_average}</h4>
            </MovieDescriptionChild>
          </MovieDescription>
        </ImageWrapper>
       
      </CardMainContainer>
    </>
  )
}
