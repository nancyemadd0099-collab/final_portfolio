import { useEffect } from "react";

function NavScroll() {
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]:not(#nav-section)");
        const navLinks = document.querySelectorAll(".links a");
        const nav = document.getElementById("nav-section");
        const navHeight = nav ? nav.offsetHeight : 0;

        function setActiveOnScroll() {
            let current = "";
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const top = section.offsetTop - navHeight - 8;
                const bottom = top + section.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    current = section.id;
                }
            });

            navLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }

        window.addEventListener("scroll", setActiveOnScroll);
        window.addEventListener("resize", setActiveOnScroll);
        setActiveOnScroll();

        return () => {
            window.removeEventListener("scroll", setActiveOnScroll);
            window.removeEventListener("resize", setActiveOnScroll);
        };
    }, []);

    return null;
}

export default NavScroll;
