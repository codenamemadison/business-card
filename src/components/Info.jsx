import './../index.css'
import { Link } from 'react-router-dom';
import pfp from "/src/assets/pfp-film.png";
import emailLogo from "/src/assets/email-icon.png"
import linkedinLogo from "/src/assets/linkedin-icon.png"
export default function Info() {
    return (
        <>
            <img src={pfp} id="pfp"/>
            <div className="info-section">
                <h1>Madison Shimbo</h1>
                <p id="occupation">Software Engineer | UX/UI Designer | <br></br> Multi-Medium Artist </p>
                <a href="https://madison-shimbo-cs-portfolio.netlify.app" target="_blank">
                    <p id="portfolio-link">TECH PORTFOLIO</p>
                </a>
                <div id="contact-buttons">
                    <a id="email-btn" href="mailto:madisonshimbo@gmail.com" target="_blank">
                        <img src={emailLogo}/>
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/madisonshimbo/" id="linkedin-btn" target="_blank">
                        <img src={linkedinLogo}/>
                        LinkedIn
                    </a>
            
                </div>
            </div>
        </>
    )
}