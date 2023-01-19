// "use client";
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scrollspy from 'react-scrollspy';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ThemeChanger from '../ThemeChanger.jsx';
import logo from '../../Assets/logo.webp';

const navItems = [
  {
    name: 'About',
    id: '#about',
  },
  {
    name: 'Work',
    id: '#work',
  },
  {
    name: 'My Journey',
    id: '#myjourney',
  },
  {
    name: 'Contact',
    id: '#contact',
  },
];

function NavbarComponent() {
  const [state, setState] = useState({
    show: true,
    scrollPos: 0,
  });
  const [expand, setExpand] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const { scrollPos } = state;
    setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const nav = navItems.map((i, index) => (
    <li key={index}>
      <Nav.Item key={index}>
        <Nav.Link href={i.id} className="">
          {i.name}
          /&gt;
        </Nav.Link>
      </Nav.Item>
    </li>
  ));

  return (
    <Container>
      <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className={`${state.show ? 'active-navbar' : 'hidden-navbar'} ${expand ? 'navbar-expanded' : ''}`} onToggle={handleExpand}>
        <Navbar.Brand
          href="#home"
          onClick={() => {
            if (router.pathname !== '/') {
              router.push('/');
            }
          }}
        >
          <Image className="navbar-logo" src={logo} alt="logo" />
        </Navbar.Brand>
        {router.pathname === '/' && (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto text-center">
                <Scrollspy items={['home', 'about', 'work', 'myjourney', 'contact']} currentClassName="active-option">
                  <li key="5"><Nav.Item><Nav.Link className="" href="#home">Start/&gt;</Nav.Link></Nav.Item></li>
                  {nav}
                  <li key="6"><Nav.Item><Nav.Link className=""><ThemeChanger /></Nav.Link></Nav.Item></li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;
