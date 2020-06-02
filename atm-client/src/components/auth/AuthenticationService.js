class AuthenticationService {

  registerSuccessfulLogin(username, password) {
    console.log('registerSuccessfulLogin!');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) return user
    return user;
  }

}

export default new AuthenticationService();