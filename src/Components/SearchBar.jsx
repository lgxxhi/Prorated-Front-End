import React, { useState } from 'react'
import '../Styles/Global.scss'
import { useNavigate } from 'react-router-dom'

export default function SearchBar(props) {
    const searchIcon = require('../Assets/Images/search-icon.png')
    const [search, setSearch] = useState('')
    const [searchNav, setSearchNav] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        let searchQuerie = e.target.children[1].value
        setSearch('')
        setSearchNav('')
        navigate(`/results?q=${searchQuerie}`)
    }
    switch(props.location){
        case "navbar":
            return (
                <form className='searchBar-nav' onSubmit={(e) => {handleSubmit(e)}}>
                    <img src={searchIcon} alt=''/>
                    <input
                    type="search"
                    className='searchBar-nav__input'
                    placeholder='Search...'
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    />
                    <input type="submit" className='searchBar-nav__submitBtn btn'/>
                </form>
          )
          default:
            return (
                <form className='searchBar' onSubmit={(e) => handleSubmit(e)}>
                    <img src={searchIcon} alt=''/>
                    <input
                    type="search"
                    className='searchBar__input' 
                    placeholder='Search...'
                    value={searchNav}
                    onChange={(e) => setSearchNav(e.currentTarget.value)}
                    />
                    <input type="submit" className='searchBar__submitBtn btn'/>
                </form>
          )
    }

}
