import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({name,icon,togo}) => {
    return (
        <>
         <Link to='/personal-info'  type='submit' className='heading-button mt-2'>{icon && icon}{name}</Link>   
        </>
    )
}

export default Button
