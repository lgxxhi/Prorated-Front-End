import React from 'react'
import '../../Styles/Global.scss'
import SearchBar from '../../Components/SearchBar'
import ServiceCard from './ServiceCard'

export default function homePage() {

  const contractorImage = require('../../Assets/Images/contractor-homepage-img.png')
  const defaultServices = require('../../Assets/services.json')

  const displayServices = () => {
    return defaultServices.map(({name,description,status,image}) => {
      return(
        <>
          <ServiceCard
          data={{
            name: name,
            description: description,
            status: status,
            image: image
          }}
          />
        </>
      )
    })
  }

  return (
    <div className='home-page'>
      <div className='home-page__search'>
        <div className='home-page__search__input'>
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
        <img src={contractorImage} alt="Contractor and client" className='home-page__search__img'/>
      </div>
      <div className='home-page__popular-services'>
        {displayServices()}
      </div>
    </div>
  )
}
