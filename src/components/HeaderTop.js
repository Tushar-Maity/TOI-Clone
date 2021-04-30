import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Container } from '@material-ui/core';

const HeaderTop = () => {

    const date = new Date()
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getDay = days[date.getDay()]

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const getMonth = months[date.getMonth()]
    const getMonthInt = date.getMonth()

    const year = date.getFullYear()
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    return (
        <div className="headerTop">
            <Container>
                <div className="headerTop__container">
                    <div className="headerTop__left">
                        <p>EDITION IN</p>
                        <p className="headerTop__time">{`${getDay}, ${getMonth} ${getMonthInt}, ${year} | UPDATED ${time} IST` }</p>
                        <p>Kolkata 35°C</p>
                    </div>
                    <div className="headerTop__right">
                        <p>Sign In</p>
                        <div className="headerTop__social">
                            <TwitterIcon className="social" /> 
                            <FacebookIcon className="social" />  
                            <RssFeedIcon className="social" />
                            <YouTubeIcon className="social" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderTop
