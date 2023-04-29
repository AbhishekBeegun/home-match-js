import React from 'react'

const AgencyCard = ({agency}) => {

  return (
    <div className='h-32 w-64 flex justify-between items-center gap-5 hover:scale-110 transition-all ease-in-out'>
        <img 
        className='w-32'
        src={agency?.agencylogo?.url} alt='Agency card'/>
        <div>
            <p>{agency?.name}</p>
        
        </div>
    </div>
  )
}

export default AgencyCard