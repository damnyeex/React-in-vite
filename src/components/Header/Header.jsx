import { useEffect, useState } from 'react'
import logo from '/logo.png'
import styled from 'styled-components'
//import '../Header/Header.css'

const HeaderContainer = styled.header`
    display: flex;
    padding: 0 2rem;
    justify-content: center;
    border-bottom: 1px solid silver;
    align-items: center;
    background-color: darkgrey;
    font-weight: 700;
`

const LogoImage = styled.img`
    width: 50px;
    height: 50px;
`

const Title = styled.h3`
    margin: 2rem;
`

function Header() {
const  [now, setNow] = useState(new Date())

useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => {
        clearInterval(interval)
        console.log('cleaning...')
    }
}, [])

    return (
        <HeaderContainer>
            <LogoImage src={logo} alt={'logo'} />
            <Title>Yaroslavl</Title>
            <span >Время сейчас: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    );
}

export default Header