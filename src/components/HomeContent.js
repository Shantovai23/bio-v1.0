import React from 'react'
import { Container } from 'react-bootstrap'
import Button from './Button'

const HomeContent = () => {
    return (
        <Container>
           <div className='main-div'>
              <div>
              <h1 className='main-heading'>Make Your Curriculum Vitae with <span className='logo-name'>bio</span></h1> 
              </div>
              <div className='text-center'>
                  <Button  name="Get Started" icon={<i class="fas fa-file-alt"></i>} togo='personal-info'/>
              </div>
           </div>
           
        </Container>
    )
}

export default HomeContent
