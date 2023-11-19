import icon_github from './icons/github_icon.svg'
import icon_telegram from './icons/telegram_icon.svg'
import icon_email from './icons/mail_icon.svg'

function Contact() {
    return (
        
        <div className="container">
        <div id="contacts_id" className="contacts_info">
          <h2>Contact Me</h2>
        </div>
        <div className="links_list">
          <div className="contact_link">
            <img src= {icon_github} alt="github" />
            <a target="_blank" href="https://github.com/stasbaz ">GitHub</a>
          </div>
          <div className="contact_link">
            <img src= {icon_telegram} alt="telegram" />
            <a target="_blank" href="https://t.me/StasBazeliuk">Telegram</a>
          </div>
          <div className="contact_link">
            <img src= {icon_email} alt="gmail" />
            <a target="_blank" href="mailto:bazuluk989@gmial.com">Email</a>
          </div>
        </div>
      </div>
    )
}

export default Contact