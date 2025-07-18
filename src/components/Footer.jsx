import twitterLogo from "/src/assets/twitter-icon.png";
import facebookLogo from "/src/assets/facebook-icon.png";
import instagramLogo from "/src/assets/instagram-icon.png";
import githubLogo from "/src/assets/github-icon.png";

export default function Footer() {
    return (
        <div id="footer">
            <img src={twitterLogo} alt="twitter icon"/>
            <img src={facebookLogo} alt="facebook icon"/>
            <img src={instagramLogo} alt="instagram icon"/>
            <img src={githubLogo} alt="github icon"/>
        </div>
    )
}