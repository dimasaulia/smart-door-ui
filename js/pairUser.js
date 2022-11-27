const form = document.querySelector("form");
const pairButtonn = document.querySelector("#pairButton");

form.username.addEventListener("keyup", () => {
    console.log(
        form.username.value.length >= 4
            ? form.username.value
            : "Waiting for input"
    );
});
