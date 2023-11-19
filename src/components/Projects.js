function Projects() {
    const displayNone = {
        display: 'none'
     }
    return (
        
        <section id="projects_id" className="projects" style = {displayNone}>
    <div className="container">
      <h2>My Projects</h2>
      <div className="project_block">
        <a target="_blank" href="https://mighty-reaches-45633-a7b714f2317a.herokuapp.com/">
          <div className="project_body">
            <img src= {require(  "./images/project_two.png")} alt="Project Image" />
          </div>
        </a>
        <div className="project_info">
          <h4>Horiseon</h4>
          <p>html/css</p>
        </div>
      </div>
      <div className="projects_other">
        <div className="strawberry">
          <a target="_blank" href="https://stasbaz.github.io/quiz-challenge/">
            <div className="project_body">
              <img src= {require( "./images/quiz challenge.png")} alt="Project Image" />
            </div>
          </a>
          <div className="strawberry_info">
            <h4>Quiz Chllng</h4>
            <p>html/css/js</p>
          </div>
        </div>
        <div className="strawberry">
          <a target="_blank" href="https://sharktank3800.github.io/recipe_finder//">
            <div className="project_body">
              <img src=  {require("./images/foodfinder-img.jpg" )}alt="Project Image" />
            </div>
          </a>
          <div className="strawberry_info">
            <h4>FoodFinder</h4>
            <p>html/css/js/Bulma</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    )
}

export default Projects

