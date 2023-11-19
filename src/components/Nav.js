function Nav() {

     function about_me() {
        document.querySelector('#about_me').style='display: flex;'
        document.querySelector('#projects_id').style='display: none;'
        document.querySelector('#welcome').style='display: none;'
        document.querySelector('#resume').style='display: none;'

     }

     function projects() {
        document.querySelector('#about_me').style='display: none;'
        document.querySelector('#projects_id').style='display: block;'
        document.querySelector('#welcome').style='display: none;'
        document.querySelector('#resume').style='display: none;'

     }

     function welcome() {
        document.querySelector('#about_me').style='display: none;'
        document.querySelector('#projects_id').style='display: none;'
        document.querySelector('#welcome').style='display: flex;'
        document.querySelector('#resume').style='display: none;'

     }
     function resume() {
        document.querySelector('#about_me').style='display: none;'
        document.querySelector('#projects_id').style='display: none;'
        document.querySelector('#welcome').style='display: none;'
        document.querySelector('#resume').style='display: flex;'

     }

     const displayNone = {
        display: 'none'
     }

    return (
        
    <div className="container">
      <nav>
        <img className="portfolio_name" src= {require("./images/home_png.png" )}alt="Name_button" />
        <div className="header_links">
          <button className="header_tabs" onClick={welcome} >Welcome</button>
          <button className="header_tabs" onClick={about_me} >About Me</button>
          <button className="header_tabs" onClick={projects} >Projects</button>
          <a className="header_tabs" href="#contacts_id">Contact Me</a>
          <button className="header_tabs" onClick={resume}>Resume</button>
        </div>
      </nav>
    </div>

    )
}

export default Nav