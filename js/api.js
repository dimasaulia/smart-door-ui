console.log("API");

const copys = document.querySelectorAll(".copy");

copys.forEach((copy) => {
    copy.addEventListener("click", (e) => {
        e.preventDefault();
        const copyText = `?id=${copy.parentElement.parentNode.children[1].getAttribute(
            "data-id"
        )}&key=${copy.parentElement.parentNode.children[2].getAttribute(
            "data-key"
        )}`;
        navigator.clipboard.writeText(copyText);
        copy.parentElement.parentNode.children[3].children[1].setAttribute(
            "data-hover",
            "Copy to your clipboard"
        );

        copy.addEventListener("mouseleave", () => {
            copy.parentElement.parentNode.children[3].children[1].setAttribute(
                "data-hover",
                "Copy"
            );
        });
    });
});
