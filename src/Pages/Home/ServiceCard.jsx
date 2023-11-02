import React from 'react'

export default function ServiceCard({data}) {
  const { name, description, status, image } = data;
  const background = {backgroundImage: `url(${image})`}
  return (
    <div className='serviceCard' style={background}>
        <p className='serviceCard__title'>{name}</p>
        <div className='serviceCard__info'>
          <p>{description}</p>
        </div>
    </div>
  )
}
