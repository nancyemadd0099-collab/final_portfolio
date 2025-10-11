import './Skills.css'


function Skills() {
    return (
        <>
            <section id="skills-section">
                <div className="container">
                    <p>Skills</p>
                    <div className="box-skills">
                        <div>
                            <div className="logo"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="HTML5" width="60" height="60" />
                            </div>
                            <p>HTML5</p>
                        </div>

                        <div>
                            <div className="logo"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"
                                width="60" height="60" />
                            </div>
                            <p>CSS3</p>
                        </div>

                        <div>
                            <div className="logo"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="JavaScript" width="60" height="60" /></div>
                            <p>JavaScript</p>
                        </div>

                        <div>
                            <div className="logo"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="React.js" width="60" height="60" />
                            </div>
                            <p>React.js</p>
                        </div>

                        <div>
                            <div className="logo"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                alt="Bootstrap" width="60" height="60" /></div>
                            <p>Bootstrap</p>
                        </div>

                        <div>
                            <div className="logo"><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                                alt="Redux" width="60" height="60" />
                            </div>
                            <p>Redux</p>
                        </div>

                        <div>
                            <div className="logo">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                    alt="Next.js" width="60" height="60" />

                            </div>
                            <p>Next.js</p>
                        </div>
                        <div>
                            <div className="logo">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                                    alt="jQuery" width="60" height="60" />
                            </div>
                            <p>jQuery</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Skills