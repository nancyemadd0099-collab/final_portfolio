import { useRef } from 'react'
import './ContactMe.css'
import emailjs from "emailjs-com";


function ContactMe() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_6u1q5wf",
            "template_3a1j0jc",
            form.current,
            "nx_dO9dpTdzk7D15P"
        ).then(() => {
            alert("✅ Message sent successfully!")
            e.target.reset();
        },
            (error) => {
                alert("❌ Failed to send message. Try again later.");
                console.log(error.text);
            }
        )
    };


    return (
        <>
            <section id="contact-section">
                <div className="container">
                    <p className='linear'>Contact Me</p>
                    <div>
                        <div className="content-contactme">
                            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
                            <div className="link-contactme">
                                <div><a href=""><i className="fa-brands fa-github"></i></a></div>
                                <div><a href="https://www.linkedin.com/in/nancy-emadd-2a4480312"><i className="fa-brands fa-linkedin"></i></a></div>
                                <div><a href="mailto:nancyemadd009@gmail.com"><i className="fa-solid fa-envelope"></i></a></div>
                            </div>
                        </div>


                        <div className="form-contactme">
                            <form ref={form} onSubmit={sendEmail}>
                                <input className='input-name' type="text"  name="from_name" placeholder="Your Name" required />
                                <input className='input-mail' type="email" name="from_email" placeholder="Your Email" required />
                                <textarea name="message" placeholder="Your Message" required></textarea>
                                <button className='btn-submit' type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ContactMe