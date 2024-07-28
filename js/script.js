window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#252525';
    } else {
        header.style.backgroundColor = '#1C1C1E';
    }
});

const htmlHover = document.querySelector(".html-image");
const htmlImage1 = document.querySelector(".html-image-icon-1");
const htmlImage2 = document.querySelector(".html-image-icon-2");

htmlHover.addEventListener("mouseover", function(){
    htmlImage1.classList.add("hover");
    htmlImage2.classList.add("hover");
})

htmlHover.addEventListener("mouseout", function(){
    htmlImage1.classList.remove("hover")
    htmlImage2.classList.remove("hover")
})

const cssHover = document.querySelector(".css-image");
const cssImage1 = document.querySelector(".css-image-icon-1");
const cssImage2 = document.querySelector(".css-image-icon-2");

cssHover.addEventListener("mouseover", function(){
    cssImage1.classList.add("hover");
    cssImage2.classList.add("hover");
})

cssHover.addEventListener("mouseout", function(){
    cssImage1.classList.remove("hover")
    cssImage2.classList.remove("hover")
})

const javascriptHover = document.querySelector(".javascript-image")
const javascriptImage = document.querySelector(".javascript-image-icon");

javascriptHover.addEventListener("mouseover", function(){
    javascriptImage.classList.add("hover");
})

javascriptHover.addEventListener("mouseout", function(){
    javascriptImage.classList.remove("hover");
})

const phpHover = document.querySelector(".php-image")
const phpImage = document.querySelector(".php-image-icon");

phpHover.addEventListener("mouseover", function(){
    phpImage.classList.add("hover");
})

phpHover.addEventListener("mouseout", function(){
    phpImage.classList.remove("hover");
})

const pythonHover = document.querySelector(".python-image")
const pythonImage = document.querySelector(".python-image-icon");

pythonHover.addEventListener("mouseover", function(){
    pythonImage.classList.add("hover");
})

pythonHover.addEventListener("mouseout", function(){
    pythonImage.classList.remove("hover");
})

const reactHover = document.querySelector(".react-image")
const reactImage1 = document.querySelector(".react-image-icon-1");
const reactImage2 = document.querySelector(".react-image-icon-2");
const reactImage3 = document.querySelector(".react-image-icon-3");
const reactImage4 = document.querySelector(".react-image-icon-4");


reactHover.addEventListener("mouseover", function(){
    reactImage1.classList.add("hover");
    reactImage2.classList.add("hover");
    reactImage3.classList.add("hover");
    reactImage4.classList.add("hover");
})

reactHover.addEventListener("mouseout", function(){
    reactImage1.classList.remove("hover");
    reactImage2.classList.remove("hover");
    reactImage3.classList.remove("hover");
    reactImage4.classList.remove("hover");
})

const sqlHover = document.querySelector(".sql-image")
const sqlImage1 = document.querySelector(".sql-image-icon-1")
const sqlImage2 = document.querySelector(".sql-image-icon-2")
const sqlImage3 = document.querySelector(".sql-image-icon-3")

sqlHover.addEventListener("mouseover", function(){
    sqlImage1.classList.add("hover");
    sqlImage2.classList.add("hover");
    sqlImage3.classList.add("hover");
})

sqlHover.addEventListener("mouseout", function(){
    sqlImage1.classList.remove("hover");
    sqlImage2.classList.remove("hover");
    sqlImage3.classList.remove("hover");
})

const javaHover = document.querySelector(".java-image")
const javaImage = document.querySelector(".java-image-icon")

javaHover.addEventListener("mouseover", function(){
    javaImage.classList.add("hover")
})

javaHover.addEventListener("mouseout", function(){
    javaImage.classList.remove("hover")
})

const homeLink = document.querySelector("#homeLink")
const aboutLink = document.querySelector("#aboutLink")
const skillsLink = document.querySelector(".skills-link")
const projectsLink = document.querySelector(".projects-link")
const contactLink = document.querySelector(".contact-link")

aboutLink.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

skillsLink.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 850,
        behavior: "smooth"
    })
})

projectsLink.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 1915,
        behavior: "smooth"
    })
})

contactLink.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 2870,
        behavior: "smooth"
    })
})

const project1 = document.querySelector(".proj1-container");
const project2 = document.querySelector(".proj2-container");
const project3 = document.querySelector(".proj3-container");

project1.addEventListener("mouseover", function(){
    project1.classList.add("hover")
    const projectName = document.querySelector(".name-1")
    projectName.style.left = "20%"
    projectName.style.width = "200px"
    const otherInfo = document.querySelector(".project1-other-info")
    otherInfo.style.opacity = "1";
})

project1.addEventListener("mouseout", function(){
    project1.classList.remove("hover")
    const projectName = document.querySelector(".name-1")
    projectName.style.transition = "left 1s ease"
    projectName.style.left = "50%"
    const otherInfo = document.querySelector(".project1-other-info")
    otherInfo.style.opacity = "0"
})

project2.addEventListener("mouseover", function(){
    project2.classList.add("hover")
    const projectName2 = document.querySelector(".name-2")
    projectName2.style.left = "28%"
    projectName2.style.transition = "left 1s ease"
    const otherInfo2 = document.querySelector(".project2-other-info")
    otherInfo2.style.opacity = "1"
})

project2.addEventListener("mouseout", function(){
    project2.classList.remove("hover")
    const projectName2 = document.querySelector(".name-2")
    projectName2.style.left = "50%"
    projectName2.style.transition = "left 1s ease"
    const otherInfo2 = document.querySelector(".project2-other-info")
    otherInfo2.style.opacity = "0"
    otherInfo2.style.transition = "opacity 0.1s ease"
})

project3.addEventListener("mouseover", function(){
    project3.classList.add("hover")
    const projectName3 = document.querySelector(".name-3")
    projectName3.style.left = "25%"
    projectName3.style.transition = "left 1s ease"
    const otherInfo3 = document.querySelector(".project3-other-info")
    otherInfo3.style.opacity = "1"
})

project3.addEventListener("mouseout", function(){
    project3.classList.remove("hover")
    const projectName3 = document.querySelector(".name-3")
    projectName3.style.transition = "left 1s ease"
    projectName3.style.left = "50%"
    const otherInfo3 = document.querySelector(".project3-other-info")
    otherInfo3.style.opacity = "0"
})

const footerHome = document.querySelector(".footer-link-home")
const footerAbout = document.querySelector(".footer-link-about")
const footerSkills = document.querySelector(".footer-link-skills")
const footerProjects = document.querySelector(".footer-link-projects")
const footerContact = document.querySelector(".footer-link-contact")

footerHome.addEventListener("click", function(){
    location.reload()
})

footerAbout.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

footerSkills.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 850,
        behavior: "smooth"
    })
})

footerProjects.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 1915,
        behavior: "smooth"
    })
})

footerContact.addEventListener("click", function(event){
    event.preventDefault();

    window.scrollTo({
        top: 2870,
        behavior: "smooth"
    })
})

document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('headerMenu').classList.toggle('show');
});