// Interactive feature: Form submission with a confirmation alert
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const fullname = document.getElementById("full name").value;
      const username = document.getElementById("username").value;
      alert(`Welcome ${fullname}! Your Siege username, ${username}, has been registered successfully.`);
      
      // Reset the form
      form.reset();
    });
  });  