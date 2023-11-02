import React from 'react'

export default function ServiceCard({data}) {
  const { name, description, status, image } = data;
  return (
    <div className='serviceCard'>

      <div className='serviceCard__info'>
        <p>{name}</p>
        <div className='serviceCard__info__descriptionDropdown'>
          <p>{description}</p>
        </div>
      </div>
      
        <img src={image} alt="" className='serviceCard__image'/>

    </div>
  )
}
