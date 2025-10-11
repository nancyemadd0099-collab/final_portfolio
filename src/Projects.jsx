import Card from './Card'
import './Projects.css'


function Projects() {
    return (
        <>
            <section id="projects-section">
                <div class="container">
                    <p className='linear'>Projects</p>
                    <div class="project">
                        <Card />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Projects