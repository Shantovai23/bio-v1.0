import React from "react";
import {Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Navbar bg="" variant="light">
        <Container>
          <Link to='/' style={{color:'#ff3377'}}  className='logo'>bio</Link>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Nav;
