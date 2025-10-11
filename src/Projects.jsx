import Card from './Card'
import './Projects.css'


function Projects() {
    return (
        <>
            <section id="projects-section">
                <div class="container">
                    <p className='linear'>Projects</p>
                    <div class="project">
                        <Card imgCard="/BeautyShop.png" title="BeautyShop Store" demoLink="https://beautyshop-store.vercel.app/" demoText="Live demo" githubLink="https://github.com/nancyemadd0099-collab/Beautyshop-Store" githubText="Git Hub" />
                        <Card imgCard="/Bella Vista Restaurant.png" title="Bella Vista Restaurant" demoLink="https://bella-vista-restaurant-two.vercel.app/" demoText="Live demo" githubLink="https://github.com/nancyemadd0099-collab/Bella_Vista_Restaurant" githubText="Git Hub" />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Projects