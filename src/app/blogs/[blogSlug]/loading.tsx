import React from 'react'
import { PuffLoader } from 'react-spinners'

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <PuffLoader color='#007ded'/>
        </div>
    )
}

export default loading
