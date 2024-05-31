const logout = async () => {
    console.log("logged out");
      const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    };
    
    document.getElementById('logout').addEventListener('click', logout);