const dropDownContent = document.querySelector(".form-dropdown");
const toggler = document.querySelector("#show-role");
const values = document.querySelectorAll(".role");
const form = document.querySelector("#userRole");

toggler.addEventListener("click", () => {
    dropDownContent.classList.toggle("active");
});

values.forEach((f) => {
    f.addEventListener("click", () => {
        form.value = f.getAttribute("data-role");
        dropDownContent.classList.toggle("active");
    });
});
