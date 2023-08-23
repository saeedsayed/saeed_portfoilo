let prog = document.querySelectorAll('.prog span')
let home = document.getElementById("Home")
let skill = document.getElementById("About")
let project = document.getElementById("Project")
let contact = document.getElementById("Contact")
let projectLink = document.querySelectorAll("nav ul li")






window.onscroll = _ => {
    if (scrollY >= skill.offsetTop - 150) {
        prog.forEach(p => {
            p.style.width = p.dataset.prog
            p.innerHTML = p.dataset.prog
        })
    } else {
        prog.forEach(p => {
        p.style.width = '0'
        })
    }
    switch(true){
        case (scrollY >= contact.offsetTop - 150):
        projectLink.forEach(proj=>{
            proj.classList.remove("active");
            proj.classList.contains("nav__link--contact") ? proj.classList.add("active"): '' ;
        })
        break;
        case (scrollY >= project.offsetTop - 150):
        projectLink.forEach(proj=>{
            proj.classList.remove("active");
            proj.classList.contains("nav__link--project") ? proj.classList.add("active"):'' ;
        })
        break;
        case (scrollY >= skill.offsetTop - 150):
        projectLink.forEach(proj=>{
            proj.classList.remove("active");
            proj.classList.contains("nav__link--about") ? proj.classList.add("active"): '' ;
        })
        break;
        case (scrollY >= home.offsetTop - 150):
        projectLink.forEach(proj=>{
            proj.classList.remove("active");
            proj.classList.contains("nav__link--home") ? proj.classList.add("active"): '' ;
        })
        break;
    }
}