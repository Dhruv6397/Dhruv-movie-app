import React from 'react'
import styled from 'styled-components'
import Scroller from './Scroller'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const HomeContainer = styled.div`
height: 100%;
width:100%;
margin-top:12vh;
display: flex;
flex-direction:column;
`
const ListTitle = styled.h1`
background-color:#F2AA4CFF;
padding-left:1em;
color:#101820FF;
cursor:pointer;
&:hover{
    transform:translateX(10px);
    overflow:hidden;
}
`
const ScrollerType = styled.div`
display:flex;
flex-direction:column;
` 
export default function Home({moviesList}) {
  return (
    <>
    <HomeContainer>
        <ScrollerType>
            <ListTitle>NEW MOVIES <DoubleArrowIcon/></ListTitle>
            <Scroller moviesList={moviesList}/>
        </ScrollerType>
        <ScrollerType>
            <ListTitle>MOST WATCHED <DoubleArrowIcon/></ListTitle>
            <Scroller moviesList={moviesList}/>
        </ScrollerType>
        <ScrollerType>
            <ListTitle>TOP RATED <DoubleArrowIcon/></ListTitle>
            <Scroller moviesList={moviesList}/>
        </ScrollerType>
        <ScrollerType>
            <ListTitle>ALL TIME BLOCKBUSTER <DoubleArrowIcon/></ListTitle>
            <Scroller moviesList={moviesList}/>
        </ScrollerType>
        <ScrollerType>
            <ListTitle>MOST SUGGESTED <DoubleArrowIcon/></ListTitle>
            <Scroller moviesList={moviesList}/>
        </ScrollerType>
        
         
    </HomeContainer>
</>
  )
}
