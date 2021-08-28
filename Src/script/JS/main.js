const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    });
}

navSlide();

const ContactList = () => {
    const insta = document.querySelector('.instagram');
    const instaColor = document.getElementById('instagram');
    insta.addEventListener('mouseenter', () => {
        instaColor.style.backgroundColor = 'black';
    })
    insta.addEventListener('mouseleave', () => {
        instaColor.style.backgroundColor = 'white';
    })

    const git = document.querySelector('#Github');
    const gitColor = document.getElementById('Github');
    git.addEventListener('mousemove', () => {
        gitColor.style.backgroundColor = 'black';
    })
    git.addEventListener('mouseleave', () => {
        gitColor.style.backgroundColor = 'white';
    })

    const linkkedin = document.querySelector('.linkedin');
    const linkColor = document.getElementById('linkedin');
    linkkedin.addEventListener('mouseenter', () => {
        linkColor.style.backgroundColor = 'black';
    })
    linkkedin.addEventListener('mouseleave', () => {
        linkColor.style.backgroundColor = 'white';
    })
};
ContactList();

export {navSlide, ContactList} ;