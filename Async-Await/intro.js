const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 2000);
    });
  }
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  
  async function loginActivities() {
    const returnedLogin = await login();
    console.log(returnedLogin);
  
    const returnedUpdateAccount = await updateAccount();
    console.log(returnedUpdateAccount);
  }
  
  loginActivities();


//   Combining Async / Await with Closures to Ensure All Processes Have Run 
const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 4000);
    });
  }
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  
  async function loginActivities(login, updateAccount) {
    const returnedLogin = await login;
    console.log(returnedLogin);
  
    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
  }
  
  loginActivities(login(), updateAccount());


  