import React from 'react'
import '../Styles/Global.scss'

export default function SearchBar(props) {

    const searchIcon = require('../Assets/Images/search-icon.png')
    console.log(props)
    switch(props.location){
        case "navbar":
            return (
                <form className='searchBar'>
                    <img src={searchIcon} alt=''/>
                    <input type="search" className='searchBar__input' placeholder='Search...' required/>
                    <input type="submit" className='searchBar__submitBtn btn'/>
                </form>
          )
          default:
            return (
                <form className='searchBar'>
                    <img src={searchIcon} alt=''/>
                    <input type="search" className='searchBar__input' placeholder='Search...' required/>
                    <input type="submit" className='searchBar__submitBtn btn'/>
                </form>
          )
    }

}
