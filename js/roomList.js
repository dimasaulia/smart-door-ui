const del_btn = document.querySelectorAll(".delete-room");

del_btn.forEach((d) => {
    d.addEventListener("click", (e) => {
        e.preventDefault();
        d.parentElement.parentElement.parentElement.remove();
    });
});
