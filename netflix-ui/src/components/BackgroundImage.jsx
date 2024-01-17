import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    img {
        height: 100vh;
        width: 100vw;
    }
`;

const BackgroundImage = () => {
  return (
    <Container>
        <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="background" />
    </Container>
  )
}

export default BackgroundImage