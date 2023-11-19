import { ReactSVG } from "react-svg"
import icon_react from './icons/react.svg'
import icon_html from './icons/html_5.svg'
import icon_js from './icons/js.svg'
import icon_css from './icons/css.svg'
function AboutMe() {
  const displayNone = {
    display: 'none'
 }
    return (
        <section id="about_me" className="about" style = {displayNone}>
        <div className="container">
          <div className="about_list">
            <div className="portfolio_photo">
              <img src=  {require("./images/portfolio_photo.jpg")} alt="photo" />
            </div>
            <div className="about_content">
              <h2>About Me</h2>
              <p>I am a web developer with a deep interest in cutting edge technology. I have experience in developing websites and applications using HTML, CSS and JavaScript. I confidently use frameworks, learn and am ready for challenges.</p>
              <p> I specialize in frontend. Ready to find new solutions and constantly improve skills. I work in a team and am ready to join projects that require a creative approach and technical expertise.</p>
            </div>
          </div>
          <h3>My Skills</h3>
          <img className="skills_icons" src={icon_react} alt="react_icon" />
          <img className="skills_icons" src={icon_html}  alt="html5_icon" />
          <img className="skills_icons" src={icon_js}  alt="js_icon" />
          <img className="skills_icons" src={icon_css} alt="css_icon" />
        </div>
      </section>
    
    )
}

export default AboutMe