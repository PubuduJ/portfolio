let navLinks = document.querySelectorAll("a.inner-link");
let theme = "dark";

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
    document.querySelector("nav ul li a.active").classList.remove("active");
    document
      .querySelector(`nav ul li a[href='${item.getAttribute("href")}']`)
      .classList.add("active");
    document.querySelector("main > section.active").classList.remove("active");
    document
      .querySelector(`main > section${item.getAttribute("href")}`)
      .classList.add("active");
  });
});

document
  .querySelector("#sidebar .toggle-sidebar")
  .addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("open");
  });

var options = {
  strings: ["Software Engineer", "Researcher", "Lecturer"],
  loop: true,
  typeSpeed: 70,
  backSpeed: 10,
};

new Typed(".field h2", options);

for (let i = 1; i <= 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector("#home .meteor-shower").append(meteor);
}

const shuffleInstance = new Shuffle(
  document.querySelector("#my_work .work-items"),
  {
    itemSelector: ".item",
  }
);

const filterButtons = document.querySelectorAll("#my_work .filters button");

filterButtons.forEach((item) => {
  item.addEventListener("click", workFilter);
});

function workFilter() {
  const clickedButton = event.currentTarget;
  const clickedButtonGroup = clickedButton.getAttribute("data-group");
  const activeButton = document.querySelector(
    "#my_work .filters button.active"
  );

  activeButton.classList.remove("active");
  clickedButton.classList.add("active");

  shuffleInstance.filter(clickedButtonGroup);
}

var workModal = new bootstrap.Modal(document.getElementById("workModal"));
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelector("#workModal .modal-body img")
      .setAttribute("src", item.getAttribute("data-image"));
    document.querySelector("#workModal .modal-body .title").innerText =
      item.getAttribute("data-title");
    document.querySelector("#workModal .modal-body .description").innerText =
      item.getAttribute("data-description");
    document.querySelector("#workModal .modal-body .client .value").innerText =
      item.getAttribute("data-client");
    document.querySelector(
      "#workModal .modal-body .completed .value"
    ).innerText = item.getAttribute("data-completed");
    document.querySelector("#workModal .modal-body .skills .value").innerText =
      item.getAttribute("data-skills");
    document
      .querySelector("#workModal .modal-body .project-link a")
      .setAttribute("href", item.getAttribute("data-project-link"));

    workModal.show();
  });
});

var workModalElement = document.getElementById("workModal");
workModalElement.addEventListener("show.bs.modal", function (event) {
  document.getElementById("my_work").classList.add("blur");
  document.getElementById("sidebar").classList.add("blur");
});

workModalElement.addEventListener("hide.bs.modal", function (event) {
  document.getElementById("my_work").classList.remove("blur");
  document.getElementById("sidebar").classList.remove("blur");
});

let testimonialImages = document.querySelectorAll("#testimonial .images img");

testimonialImages.forEach((item, index) => {
  let position = index + 1;

  item.addEventListener("click", function () {
    document
      .querySelector("#testimonial .images img.active")
      .classList.remove("active");
    document
      .querySelector(`#testimonial .images img:nth-child(${position})`)
      .classList.add("active");

    document
      .querySelector("#testimonial .comments .item.active")
      .classList.remove("active");
    document
      .querySelector(`#testimonial .comments .item:nth-child(${position})`)
      .classList.add("active");
  });
});

let contactFromItems = document.querySelectorAll(
  "#contact_me .form input, #contact_me .form textarea"
);

contactFromItems.forEach((item) => {
  item.addEventListener("focus", function () {
    item.parentElement.classList.add("focus");
  });

  item.addEventListener("blur", function () {
    if (!item.value) {
      item.parentElement.classList.remove("focus");
    }
  });
});

function toggleMode() {
  theme = document.querySelector("html").getAttribute("theme");

  if (theme == "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }

  document.querySelector("html").setAttribute("theme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("requestCVLink");
  const link2 = document.getElementById("requestCVLink2");
  const toastElement = document.getElementById("cvToast");
  const toastHeader = toastElement.querySelector(".toast-header");
  const toastButton = toastElement.querySelector(".toast-button");
  const toastBody = toastElement.querySelector(".toast-body");
  const toast = new bootstrap.Toast(toastElement, { delay: 3000 });

  link.addEventListener("click", function (event) {
    if (theme == "dark") {
      toastElement.style.backgroundColor = "black";
      toastElement.style.color = "white";
      toastHeader.style.backgroundColor = "black";
      toastHeader.style.color = "white";
      toastBody.style.backgroundColor = "black";
      toastBody.style.color = "white";
      toastButton.style.backgroundColor = "white";
      toastButton.style.color = "white";
    } else {
      toastElement.style.backgroundColor = "white";
      toastElement.style.color = "black";
      toastHeader.style.backgroundColor = "white";
      toastHeader.style.color = "black";
      toastBody.style.backgroundColor = "white";
      toastBody.style.color = "black";
    }
    event.preventDefault();
    toast.show();
  });
  link2.addEventListener("click", function (event) {
    if (theme == "dark") {
      toastElement.style.backgroundColor = "black";
      toastElement.style.color = "white";
      toastHeader.style.backgroundColor = "black";
      toastHeader.style.color = "white";
      toastBody.style.backgroundColor = "black";
      toastBody.style.color = "white";
      toastButton.style.backgroundColor = "white";
      toastButton.style.color = "white";
    } else {
      toastElement.style.backgroundColor = "white";
      toastElement.style.color = "black";
      toastHeader.style.backgroundColor = "white";
      toastHeader.style.color = "black";
      toastBody.style.backgroundColor = "white";
      toastBody.style.color = "black";
    }
    event.preventDefault();
    toast.show();
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const designation = document.getElementById("designation").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:pubudujanith.dep9@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nDesignation: ${designation}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  });
