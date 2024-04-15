document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve input values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Placeholder validation logic (replace with your actual validation)
    if (email === "worker@example.com" || password !== "password") {
      // Redirect to the dashboard upon successful login
      window.location.href = "../HTML/admindash.html";
    } else {
      // Show an error message or handle invalid login
      alert("Invalid email or password. Please try again.");
    }
  });