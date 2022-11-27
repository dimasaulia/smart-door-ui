const uploadBtnTrigger = document.querySelector(".form-upload-trigger");
const uploadForm = document.querySelector("#profil-picture");

uploadBtnTrigger.addEventListener("click", (e) => {
    // e.preventDefault();
    uploadForm.click();
});

uploadForm.addEventListener("change", (e) => {
    console.log("UPLOAD", uploadForm.files[0]);
    const fileSize = uploadForm.files[0].size / 1024 / 1024; // in MiB
    if (fileSize > 2) {
        alert("File size exceeds 2 MiB");
    } else {
    }
});
