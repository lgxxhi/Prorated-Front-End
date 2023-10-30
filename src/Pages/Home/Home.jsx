import React from 'react'
import '../../Styles/Global.scss'
import SearchBar from '../../Components/SearchBar'

export default function homePage() {

  const displayServices = () => {
    return(
    <>
      <p>
        display cards here
      </p>
    </>)
  }

  return (
    <div className='home-page'>
      <div className='home-page__search'>
        <h1>Building trust</h1>
        <h1>One project at a time</h1>
        <SearchBar location="home-page"/>
        <div className='home-page__search__suggestions'>
          <p>Popular services:</p>
          <button className='btn btn__medium-round'>Plumbing</button>
          <button className='btn btn__medium-round'>Electrician</button>
          <button className='btn btn__medium-round'>Handyman</button>
        </div>
      </div>

      <div className='home-page__popular-services'>
        {displayServices()}
      </div>
    </div>
  )
}
