import React from 'react'
import Card from './Card'
import styled from 'styled-components'
const ScrollerContainer = styled.div`
height: 32vh;
background-color:#F2AA4CFF;
width:100%;
margin-top:0;
display: flex;
overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none; /* Hide scroll bar for Webkit browsers (e.g. Chrome, Safari) */
  }
  scrollbar-width: none; /* Hide scroll bar for Firefox */
  &:hover{
    height: 55vh;
  }
`
export default function Scroller({moviesList}) {
  return (
    <>
      <ScrollerContainer>
      {moviesList.map((movie)=>
            <Card  key={movie.id} movie = {movie}/>)
            }
      </ScrollerContainer>
    </>
  )
}
