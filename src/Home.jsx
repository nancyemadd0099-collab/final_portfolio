import { useEffect, useRef } from 'react';
import './Home.css'


function Home() {
    const text = "Frontend React.js Developer";
    const speed = 150;
    const typingRef = useRef(null);

    useEffect(() => {
        let i = 0;
        let typingTimeout;

        function typeEffect() {
            if (typingRef.current) {
                if (i < text.length) {
                    typingRef.current.textContent += text.charAt(i);
                    i++;
                    typingTimeout = setTimeout(typeEffect, speed);
                } else {
                    typingTimeout = setTimeout(() => {
                        if (typingRef.current) typingRef.current.textContent = "";
                        i = 0;
                        typeEffect();
                    }, 1000);
                }
            }
        }
        typeEffect();
        return () => clearTimeout(typingTimeout);
    }, []);



    return (
        <>
            <section id="hero-section">
                <div className="container">
                    <div className="hero">
                        <div className="content">
                            <h1 className='linear'>Nancy Emad Abdelrahiem</h1>
                            <p ref={typingRef} id="typing"></p>
                            <p>i build modern and responsive web applications</p>
                            <button
                                onClick={() => {
                                    const link = document.createElement("a")
                                    link.href = "/Nancy-Emad-Abdelrahiem-Front-End Developer.pdf"
                                    link.download = "Nancy-Emad-Abdelrahiem-Front-End Developer.pdf"
                                    link.click();
                                }}>Download CV</button>
                        </div>

                        <div className="pic">
                            <img src="/me.jpeg" alt="imageme" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home