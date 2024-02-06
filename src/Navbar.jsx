import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';



const NavContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
display:flex;
background-color:#101820FF;
color:#F2AA4CFF;
padding:10px;
position:fixed;
width:100%;
font-family: 'Caveat', cursive;
text-align:center;
justify-content:space-between;
cursor:pointer;
`
const NavLogo = styled.div`
font-size:40px;
width:20%;
font-weight:bold;
&:hover{
    translation:transformX(3px);
}
`
const ListNavLink = styled.ul`
width:80%;
display:flex;
padding:10px 10px 0 10px;
text-align:center;
justify-content:space-between;

`
const NavLink = styled.li`
position:relative;
list-style:none;
font-size:1.5em;
a{
    color:#F2AA4CFF;
    text-decoration:none;
    &:hover{
        color:white;
    }
}
&:hover{
    color:white;
}
`
const DropDownMenu = styled.ul`
display:none;
position:absolute;
list-style:none;
width:20em;
position:relative;
background-color:#101820FF;
${NavLink}:hover & {
    display: block; 
  }
`
const DropDownLink = styled.li`
display:block;
margin:10px;
&:hover{
    color:red;
}
`
const SearchI = styled.div`
padding-right:20px;
`
const SearchBar = styled.div`
margin-top:11vh;
width:60%;
input{
    border:5px solid #101820FF;
    background-color:#101820FF;
    color:#F2AA4CFF;
    font-size:2em;
    border-radius:20px;
    padding:10px;
    width:100%;
}
`
const WholeNav =styled.div`
display:flex;
flex-direction:columns;
text-align:center;
justify-content:center;
`

export default function Navbar({setQuery}) {
    const [searchIconState,setSearchIconState] = useState(false)

    const handleSearch=()=>{
        setSearchIconState(! searchIconState)
    }
  return (
   <WholeNav>
    <NavContainer>
        <NavLogo>
            DMA
        </NavLogo>
        <ListNavLink>
            <NavLink>
                <Link to='/'>HOME</Link>
            </NavLink>
            <NavLink>
                <Link to='/movies'>MOVIES</Link>
            </NavLink>
            <NavLink>
                <Link to='/tv'>TV SHOW</Link>
            </NavLink>
            <NavLink>
                <Link to='/watch-later'>WATCH LATER</Link>
            </NavLink>
            <NavLink>
                <span>MORE</span>
                <DropDownMenu>
                    <DropDownLink>
                        RELEASE DATE ASCENDING
                    </DropDownLink>
                    <DropDownLink>
                        RELEASE DATE DESCENDING
                    </DropDownLink>
                    <DropDownLink>
                        RATING ASCENDING
                    </DropDownLink>
                    <DropDownLink>
                        RATING DESCENDING
                    </DropDownLink>
                    <DropDownLink>
                        POPULARITY ASCENDING
                    </DropDownLink>
                    <DropDownLink>
                        POPULARITY DESCENDING
                    </DropDownLink>
                </DropDownMenu>
                
            </NavLink>
            <NavLink>
                <SearchI onClick={handleSearch}>
                    <SearchIcon/>
                </SearchI>
            </NavLink>
        </ListNavLink>
          
    </NavContainer>
   {searchIconState && (<SearchBar>
        <input type="text" onSubmit={(e)=>{setQuery(e.target.value)}} placeholder='Search your movie...'/>
    </SearchBar>)}
    </WholeNav>
  )
}
