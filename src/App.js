import './App.css';
import React, { useEffect, useState } from 'react'
import Styled from 'styled-components';
import Navbar from './Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import TVSeries from './TVSeries'
import WatchLater from './WatchLater'
const WholeContainer = Styled.div`
margin:0;
padding:0;
background-color: #F2AA4CFF;
background-repeat: no-repeat;
background-size: cover;
height:100vh;
width:100%;
`

export default function App() {
//states
const [page,setPage] = useState(1)
const [query,setQuery] = useState("")
const [moviesList,setMoviesList] = useState([])
//following function for fetching the api
const fetchApi=async()=>{
  try{
    const raw = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6aecb59cde3d2c8101324cfd1d2d1c09&language=en-US&page=${page}&query=${query}`)
    const parsedData = await raw.json()
    setMoviesList(parsedData.results)
    console.log(parsedData)
    console.log(parsedData.results)
  }catch(e){
  }
}
useEffect(()=>{
fetchApi()
},[])

  return (
    <WholeContainer>
      
      <BrowserRouter>
      <Navbar setQuery={setQuery}/>
        <Routes>
          <Route path='/' element={<div>
            <Home moviesList={moviesList}/>
          </div>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tv' element={<TVSeries/>}/>
          <Route path='watch-later' element={<WatchLater/>}/>
        </Routes>
      </BrowserRouter>
    </WholeContainer>
  )
}
