document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform your login logic, e.g., send a request to a server
  
    // For demonstration purposes, just show a message
    if (username === 'admin' && password === 'password') {
      document.getElementById('message').textContent = 'Login successful!';
      // Redirect to another page or perform other actions after successful login
    } else {
      document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
  });
  