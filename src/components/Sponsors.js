import React from 'react'
import Container from './Container'

const Sponsors = () => {
    return (
        <div className='sponsors-section'>
            <Container transparent>
                <div className='sponsors-icons'>
                    <div className='banks-icons'>
                        <img src={require('../images/visa-logo-png-2020.png')} className='bank' alt='visa'></img>
                        <img src={require('../images/Mastercard3-1.png')} className='bank mastercard' alt='mastercard'></img>
                        <img src={require('../images/American-Express-Logo-PNG-Picture.png')} className='bank' alt='americanexpress'></img>
                        <img src={require('../images/Skrill_logo.svg.png')} className='bank' alt='skrill'></img>
                    </div>
                    <div className='crypto-coins'>
                        <img src={require('../images/icons8-bitcoin-240 copy.png')} className='crypto' alt='bitcoin'></img>
                        <img src={require('../images/icons8-ethereum-240.png')} className='crypto' alt='ethereum'></img>
                        <img src={require('../images/icons8-bitcoin-240.png')} className='crypto' alt='bitcoin'></img>
                        <img src={require('../images/icons8-litecoin-240.png')} className='crypto' alt='litecoin'></img>
                    </div>
                    <div className='sponsors-more-text'>
                        and 50+ more
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Sponsors
