import React from 'react'
import Container from './Container'

const Socials = () => {
    return (
        <div className='socials-section'>
            <Container transparent>
                <div className='socials-icons'>
                    <img src={require('../images/icons8-facebook-48.png')} className='social' alt='facebook'></img>
                    <img src={require('../images/instagram.png')} className='social' alt='instagram'></img>
                    <img src={require('../images/icons8-twitter-circled-48.png')} className='social' alt='twitter'></img>
                    <img src={require('../images/discord-512.webp')} className='social' alt='discord'></img>
                </div>
            </Container>
        </div>
    )
}

export default Socials
