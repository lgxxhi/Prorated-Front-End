import React from 'react'

export default function ServiceCard({data}) {
  const { name, description, status, image } = data;
  const background = {backgroundImage: `url(${image})`}
  return (
    <div className='serviceCard' style={background}>
      <div className='serviceCard__top'>
        <h2 className='serviceCard__top__title'>{name}</h2>
        <p className='serviceCard__top__info'>{description}</p>
      </div>
    </div>
  )
}
