import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const BlogNavbar = () => {
    return (
        <Navbar
            className="fj-navbar fj-nav-base"
            bg="transparent"
            expand="lg" >
            <Navbar.Brand className="fj-navbar-brand">
                <Link href="/" passHref>
                    <a href="">Filip-Jerga</a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                    <Link href="/" passHref>
                        <Nav.Link className="fj-navbar-item fj-navbar-link">
                            Home
                        </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BlogNavbar;
