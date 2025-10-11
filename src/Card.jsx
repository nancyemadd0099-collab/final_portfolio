import './Card.css'

function Card(props) {
    return (
        <>

            <div className="card">
                <img src={props.imgCard} alt="imgCard" />

                <div className="desc">
                    <p>{props.title}</p>
                    <div className="links-card">
                        <p>
                            <a href={props.demoLink} target='_blank'>
                                {props.demoText} <i className="fa-solid fa-link"></i>
                            </a>
                        </p>

                        <p>
                            <a href={props.githubLink} target='_blank'>
                                {props.githubText} <i className="fa-solid fa-link"></i>
                            </a>
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card