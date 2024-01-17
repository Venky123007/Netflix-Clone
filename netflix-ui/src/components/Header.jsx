import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { buttonClick } from '../ButtonClick/ButtonClick';

const Container = styled.div`
    padding: 0 4rem;
    .logo {
        img {
            height: 5rem;
        }
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;   
    }
`;

const Header = (props) => {
    const navigate = useNavigate();
    
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="" />
        </div>
        <motion.button {...buttonClick}
        onClick={() => navigate(props.login? "/login" : "/signup")}>{props? "Log In" : "Sign Up" }</motion.button>

    </Container>
  )
}

export default Header