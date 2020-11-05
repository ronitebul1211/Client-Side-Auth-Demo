class AuthService {
   login(username, password) {
      //verify in server & get auth token and save in local storage
      if (username === "roni" && password === "123") {
         localStorage.setItem("user", "dummy-token");
         return console.log("log in");
      }

      return console.log("unable log in");
   }

   logout() {
      // delete token from local storage
      localStorage.removeItem("user");
   }

   isAuthenticated() {
      // check token in local storage

      return localStorage.getItem("user") ? true : false;
   }
}

export default new AuthService();
