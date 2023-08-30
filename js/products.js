document.addEventListener('DOMContentLoaded', function() {
    if (isUserLoggedIn()) {
      const loggedInUsername = getLoggedInUsername();
      const loggedInUserType = getLoggedInUserType()
  
      const userInfoUsername = document.querySelector('.userInfo_username');
      const userType = document.querySelector(".userType")
  
      userInfoUsername.textContent = loggedInUsername;
      userType.textContent = loggedInUserType;
    }
  });
  
  function isUserLoggedIn() {
    const storedUsername = localStorage.getItem('username');
    const userType = localStorage.getItem('userType');

    return userType !== null;
    return storedUsername !== null;
}
  
  function getLoggedInUsername() {
    const storedUsername = localStorage.getItem('username');

    return storedUsername;
}

    function getLoggedInUserType(){
        const storedUserType = localStorage.getItem('userType');
        return storedUserType;
    }

