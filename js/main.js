import { projectsArr } from "./projects.js";
let prog = document.querySelectorAll(".prog span");
let home = document.getElementById("Home");
let skill = document.getElementById("About");
let project = document.getElementById("Project");
let contact = document.getElementById("Contact");
let navLinks = document.querySelectorAll("nav ul li");
let projectContainer = document.querySelector(".Projects");
let sendEmailBtn = document.querySelector(".send-btn");
let formEmail = document.getElementById("formEmail");
let senderName = document.getElementById("senderName");
let senderEmail = document.getElementById("senderEmail");
let senderMessage = document.getElementById("senderMessage");
((_) => {
  projectsArr.forEach((project) => {
    let technologyUsedList = "";
    project.technologyUsed.forEach((tech) => {
      technologyUsedList += `<li>${tech}</li>`;
    });
    projectContainer.innerHTML += `
    <div class="Project-card wow animate__animated animate__fadeInRight">
          <img src="${project.thumbnails}" alt="" />
            <div class="Proj-detail">
              <h3>${project.projectName}</h3>
              <h4>technology used</h4>
              <ul>
              ${technologyUsedList}
              </ul>
              <a
                href="${project.projectLink}"
                target="_blank"
                >open</a
              >
            </div>
          </div>
    `;
  });
})();

formEmail.addEventListener("submit", (event) => {
  event.preventDefault();
  if (senderName.value.length < 3) {
    senderName.classList.add("invalid");
  } else if (senderMessage.value.length < 9) {
    senderMessage.classList.add("invalid");
  } else {
    sendEmailBtn.innerHTML = '<div class="loader"></div>';
    let emailObj = {
      to_name: "saeed",
      from_name: `name:${senderName.value}; Email:${senderEmail.value}`,
      message: senderMessage.value,
    };
    console.log(emailObj);
    emailjs.send("service_brxqlrv", "template_pqi434c", emailObj).then(
      function (response) {
        senderMessage.value = "";
        sendEmailBtn.innerHTML = "has been sent✔. thanks";
      },
      function (error) {
        sendEmailBtn.innerHTML = "oops❗❌ something wrong try again";
      }
    );
  }
  setTimeout(() => {
    senderName.classList.remove("invalid");
    senderMessage.classList.remove("invalid");
  }, 700);
});

window.onscroll = (_) => {
  if (scrollY >= skill.offsetTop - 20) {
    prog.forEach((p) => {
      p.style.width = p.dataset.prog;
      p.innerHTML = p.dataset.prog;
    });
  } else {
    prog.forEach((p) => {
      p.style.width = "0";
    });
  }
  switch (true) {
    case scrollY >= contact.offsetTop - 90:
      navLinks.forEach((proj) => {
        proj.classList.remove("active");
        proj.classList.contains("nav__link--contact")
          ? proj.classList.add("active")
          : "";
      });
      break;
    case scrollY >= project.offsetTop - 90:
      navLinks.forEach((proj) => {
        proj.classList.remove("active");
        proj.classList.contains("nav__link--project")
          ? proj.classList.add("active")
          : "";
      });
      break;
    case scrollY >= skill.offsetTop - 90:
      navLinks.forEach((proj) => {
        proj.classList.remove("active");
        proj.classList.contains("nav__link--about")
          ? proj.classList.add("active")
          : "";
      });
      break;
    case scrollY >= home.offsetTop - 90:
      navLinks.forEach((proj) => {
        proj.classList.remove("active");
        proj.classList.contains("nav__link--home")
          ? proj.classList.add("active")
          : "";
      });
      break;
  }
};
