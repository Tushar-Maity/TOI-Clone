import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core'
import Header from './Sections/Header'
import LiveNews from './Sections/LiveNews'
import './styles/app.scss'
import HeaderMenu from './Sections/HeaderMenu';
import EntertainmentNews from './Sections/EntertainmentNews';
import Footer from './Sections/Footer';

const App = () => {
    const [stickMenu, setStickMenu] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setStickMenu(true)
        }
        else {
            setStickMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => window.addEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div>
            <Header />
            <HeaderMenu stickMenu={stickMenu} />
            <Container>
                <LiveNews />
                <EntertainmentNews />
            </Container>
            <Footer />
        </div>
    )
}

export default App

