import {Navbar,Nav} from 'react-bootstrap'

function Header()
{
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        localStorage.getItem('user-info') ? 
                        <>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Employee">All Employee</Nav.Link>
                            <Nav.Link href="/UpdateEmployee">Update Employee</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="./Register">Register</Nav.Link>

                        </>
                    }
               
                
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header