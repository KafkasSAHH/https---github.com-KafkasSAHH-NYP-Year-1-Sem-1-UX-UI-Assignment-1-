document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("ccaSignupForm");
    const successAlert = document.getElementById("successAlert");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        successAlert.style.display = "block";

        setTimeout(() => {
            successAlert.style.display = "none";
        }, 4000);

        form.reset();

        const modalElement = document.getElementById('termsModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    });
});
