const whatsappNumber = "2349034829116";

document.querySelectorAll(".whatsapp-form").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    const projectDetails = String(formData.get("project") ?? "").trim();
    const message = `Hi, my project details are: ${projectDetails}. I found you from your website.`;
    const feedback = form.parentElement.querySelector(".form-note, .form-feedback");

    if (!projectDetails) {
      if (feedback) feedback.textContent = "Please enter your project details.";
      return;
    }

    if (feedback) feedback.textContent = "Opening WhatsApp with your message.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});
