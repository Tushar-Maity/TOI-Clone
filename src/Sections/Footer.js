import { Container } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className="footer" >
            <Container>
                <div className="footer__main">
                    <div className="footer_left">
                        <div className="footer__about">
                            <div className="footer__aboutImage">
                                <img src="https://static.toiimg.com/photo/71215965.cms" alt="logo"/>
                            </div>
                            <div className="footer__leftSection">
                                <ul>
                                    <li>About us</li>
                                    <li>Newsletter</li>
                                    <li>Create Your Own Ad</li>
                                    <li>Feedback</li>
                                    <li>Terms of Use and Grievance Redressal Policy</li>
                                    <li>ePaper</li>
                                    <li>Privacy policy</li>
                                    <li>Sitemap</li>
                                    <li>dvertise with us</li>
                                    <li>Archives</li>
                                    <li>RSS</li>
                                </ul>
                            </div>

                            <h2>FOLLOW US ON</h2>
                            <div className="footer__aboutSocial">
                                <TwitterIcon className="social" /> 
                                <FacebookIcon className="social" />  
                                <RssFeedIcon className="social" />
                                <YouTubeIcon className="social" />
                            </div>

                            <h2>OTHER TIMES GROUP NEWS SITES</h2>
                            <div className="footer__leftSection">
                                <ul>
                                    <li>The Economic Times</li>
                                    <li>Hindi Economic Times</li>
                                    <li>Navbharat Times</li>
                                    <li>Maharashtra Times</li>
                                    <li>Vijaya Karnataka</li>
                                    <li>Telugu Samayam</li>
                                    <li>Tamil Samayam</li>
                                    <li>Malayalam Samayam</li>
                                    <li>Ei Samay</li>
                                    <li>I am Gujarat</li>
                                    <li>Times Now</li>
                                    <li>Times Now Hindi</li>
                                    <li>TimesPoints</li>
                                    <li>Indiatimes</li>
                                    <li>Brand Capital</li>
                                    <li>Education Times</li>
                                    <li>Times Food</li>
                                    <li>Miss Kyra</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__rightSection">
                            <h2>POPULAR CATEGORIES</h2>
                            <ul>
                                <li>Headlines</li>
                                <li>Sports News</li>
                                <li>Business News</li>
                                <li>India News</li>
                                <li>World News</li>
                                <li>Bollywood News</li>
                                <li>Health &amp; Fitness Tips</li>
                                <li>Indian TV Shows</li>
                                <li>Celebrity Photos</li>
                            </ul> 
                        </div>
                        <div className="footer__rightSection">
                            <h2>HOT ON THE WEB</h2>
                            <ul>
                                <li>Janhvi Kapoor</li>
                                <li>Raai Laxmi</li>
                                <li>Kajal Aggarwal</li>
                                <li>Rakul Preet Singh</li>
                                <li>Covaxin Vs Covishield</li>
                                <li>Cornavirus Symptoms</li>
                                <li>Coronavirus Tests</li>
                                <li>KV Anand Death</li>
                                <li>Rishi Kapoor</li>
                                <li>Radhe</li>
                            </ul>
                        </div>
                        <div className="footer__rightSection">
                            <h2>TOP TRENDS</h2> 
                            <ul>
                                <li>Corona cases in India</li>
                                <li>Exit polls 2021</li>
                                <li>West Bengal Exit poll 2021</li>
                                <li>DC vs KKR</li>
                                <li>Tamil Nadu Exit Poll 2021</li>
                                <li>Coronavirus India update live</li>
                                <li>Maharashtra lockdown news</li>
                                <li>Delhi lockdown news</li>
                                <li>KV Anand</li>
                                <li>AP Inter Hall Ticket 2021</li>
                                <li>Kerala Exit Poll 2021</li>
                                <li>Puducherry Exit Poll</li>
                                <li>IPL 2021 Schedule</li>
                                <li>Bank Holidays in May 2021</li>
                                <li>Farmers protest in India</li>
                                <li>News</li>
                                <li>Horoscope today</li>
                                <li>Step by Step Pizza Recipe</li>
                            </ul>
                        </div>

                        <div className="footer__rightSection">
                            <h2>TRENDING TOPICS</h2>
                            <ul>
                                <li>Randhir Kapoor</li>
                                <li>Pooja Hegde</li>
                                <li>Samantha Akkineni</li>
                                <li>Anushka Sharma And Virat Kohli</li>
                                <li>Kangana Ranaut</li>
                                <li>Priyanka Chopra</li>
                                <li>Riddhima Kapoor</li>
                                <li>Anushka Sharma Audition</li>
                                <li>KV Anand</li>
                                <li>Kareena Kapoor Khan</li>
                                <li>Rishi Kapoor's Wife</li>
                                <li>Bipasha Basu And Karan Singh Grover</li>
                                <li>5G Mobile</li>
                                <li>Recharge Plans</li>
                                <li>Mobile Phones</li>
                                <li>Compare Mobile</li>
                                <li>Upcoming Mobile</li>
                                <li>AC under 40000</li>
                                <li>Pulse Oximeter</li>
                                <li>Oxygen Concentrator</li>
                            </ul>
                        </div>
                        <div className="footer__rightSection">
                            <h2>LIVING AND ENTERTAINMENT</h2>

                            <ul>
                                <li>iDiva</li>
                                <li>MensXP.com</li>
                                <li>Femina</li>
                                <li>ETimes</li>
                                <li>Grazia</li>
                                <li>Zoom</li>
                                <li>Travel Destinations</li>
                                <li>Bombay Times</li>
                                <li>Cricbuzz.com</li>
                                <li>Filmfare</li>
                                <li>Online Songs</li>
                                <li>TV</li>
                                <li>Lifestyle</li>
                                <li>Longwalks App</li>
                                <li>Newspaper Subscription</li>
                                <li>Food News</li>
                                <li>Times Prime</li>
                                <li>Whats Hot</li>
                            </ul>
                        </div>
                        <div className="footer__rightSection">
                            <h2>SERVICES</h2>
                            <ul>
                                <li>Ads2Book</li>
                                <li>Bank Exam App</li>
                                <li>CouponDunia</li>
                                <li>Dineout</li>
                                <li>Magicbricks</li>
                                <li>TechGig</li>
                                <li>TimesJobs</li>
                                <li>Bollywood News</li>
                                <li>Times Mobile</li>
                                <li>Remit 2 India</li>
                                <li>Astro Speak</li>
                                <li>Gadgets Now</li>
                                <li>Careers</li>
                                <li>Colombia</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__copy">
                    <p>
                        Copyright &copy; {year} Made with ❤ by Tushar Maity &amp; Developers Clan This is a Clone Version.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer
