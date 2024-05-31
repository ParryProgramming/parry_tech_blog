const signupFormHandler = async (event) => {
    
  console.log("Signed In")
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  localStorage.setItem('error',JSON.stringify (response))
  
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  
    const loginFormHandler = async (event) => {
      event.preventDefault();
    
      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password-login').value.trim();
    
      if (username && password) {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
    };
    
    document
      .querySelector('#login-form')
      .addEventListener('submit', loginFormHandler);