document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1084807874", form.name.value);
    formData.append("entry.141506866", form.email.value);
    formData.append("entry.1043983715", form.message.value);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSe7V8tFhVNysco6fW48t6DDXJB6l-uGx-cPjMkXaPYfp6B8Qw/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then(() => {
        status.innerText = "Message sent successfully! If you don't get reply ,please email again.";
        status.style.color = "green";
        form.reset();
      })
      .catch(() => {
        status.innerText = "Something went wrong!";
        status.style.color = "red";
      });
  });
});
