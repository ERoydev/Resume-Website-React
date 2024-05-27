export default function Projects() {
    return(
        <div className="projects-showcase reveal">
            <div className="container-header">
                <h1>Projects</h1>
                <p>- Own Projects -</p>
            </div>

            <div className="slider container">
                    <div className="slider-wrapper">
                        <button id="prev-slide" className="slide-button material-symbols-rounded">chevron_left</button>

                        <div className="image-list">


                        </div>
                        <button id="next-slide" className="slide-button material-symbols-rounded">chevron_right</button>
                    </div>
            </div>
        </div>

    )
}