document.getElementById("send-email").addEventListener("click", function (e) {
    e.preventDefault();
  
    // Get values from form fields
    const fullName = document.getElementById("full-name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Create the mailto link
    const mailtoLink = `mailto:ieeeslsywc@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `${message}`
    )}`;
  
    // Open the user's email client with the pre-filled email
    window.location.href = mailtoLink;
  });