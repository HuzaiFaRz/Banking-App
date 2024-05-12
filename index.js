// var count = 0;

// function counter() {
//   document.getElementById("counter").innerHTML = count;
//   count = count + 1;
//   setTimeout(counter, 1000);
// }
// counter();

var toggleContainerLoginBtn = document.querySelector(
  ".toggle-container-login-btn"
);
var toggleContainerRegisterBtn = document.querySelector(
  ".toggle-container-register-btn"
);
var formContainer = document.querySelector(".forms-container");
var registerPasswordEyeSlash = document.querySelector(
  ".register-password-eye-slash"
);
var loginPasswordEyeSlash = document.querySelector(".login-password-eye-slash");
var formContainer = document.querySelector(".forms-container");
var formContainerToggle = document.querySelector(".toggle-container");
var toggleHeading1 = document.querySelector("#toggle-heading-1");
var toggleHeading2 = document.querySelector("#toggle-heading-2");
var toggleH5 = document.querySelector(".toggle-h5");
var registerForm = document.querySelector(".register-form");
var registerUserFirstName = document.querySelector("#Register-First-Name");
var registerUserLastName = document.querySelector("#Register-Last-Name");
var registerUserEmail = document.querySelector("#Register-Email");
var registerUserPassword = document.querySelector("#Register-Password");

var userAcountUserName = document.querySelector(".User-Acount-User-Name");
var loginForm = document.querySelector(".login-form");
var loginUserEmail = document.querySelector("#Login-Email");
var loginUserPassword = document.querySelector("#Login-Password");
var loginFormError = document.querySelector(".login-form-p");
var registerFormError = document.querySelector(".register-form-p");
var bankContainer = document.querySelector(".bank-container");
var logOutBtn = document.querySelector(".log-out");
var deleteAcountBtn = document.querySelector(".delete-account");
var bankAcountUserName = document.querySelector(".user-bank");
var userBankAcountBalance = document.querySelector(".current-balance-value");
var depositWithdrawInput = document.querySelector(".deposit-withdraw-input");
var depositBtn = document.querySelector(".deposit-btn");
var withDrawBtn = document.querySelector(".withdraw-btn");
var bankError = document.querySelector(".number-error");

function toGgleLoginRegisterContainer() {
  toggleContainerLoginBtn.addEventListener("click", () => {
    formContainer.classList.add("active");
  });
  toggleContainerRegisterBtn.addEventListener("click", () => {
    formContainer.classList.remove("active");
  });
}
toGgleLoginRegisterContainer();

function regisTerLoginPasswordEye() {
  registerPasswordEyeSlash.addEventListener("click", () => {
    registerPasswordEyeSlash.classList.toggle("register-password-eye");
    if (registerPasswordEyeSlash.classList.contains("register-password-eye")) {
      registerUserPassword.setAttribute("type", "text");
    } else {
      registerUserPassword.setAttribute("type", "password");
    }
  });

  loginPasswordEyeSlash.addEventListener("click", () => {
    loginPasswordEyeSlash.classList.toggle("login-password-eye");
    if (loginPasswordEyeSlash.classList.contains("login-password-eye")) {
      loginUserPassword.setAttribute("type", "text");
    } else {
      loginUserPassword.setAttribute("type", "password");
    }
  });
}
regisTerLoginPasswordEye();

function registerFormLoginForm() {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (registerUserFirstName.value === "") {
      return (
        (registerFormError.innerHTML = "Please Fill First Name Field"),
        (registerFormError.style.color = "red")
      );
    } else if (registerUserLastName.value === "") {
      return (
        (registerFormError.innerHTML = "Please Fill Last Name Field"),
        (registerFormError.style.color = "red")
      );
    } else if (registerUserEmail.value === "") {
      return (
        (registerFormError.innerHTML = "Please Fill Email Field"),
        (registerFormError.style.color = "red")
      );
    } else if (registerUserPassword.value === "") {
      return (
        (registerFormError.innerHTML = "Please Fill Password Field"),
        (registerFormError.style.color = "red")
      );
    } else if (registerUserPassword.value.length < 8) {
      return (
        (registerFormError.innerHTML = "Password Must Be 8 Least"),
        (registerFormError.style.color = "red")
      );
    } else {
      var userKey = "user_" + registerUserEmail.value;

      if (localStorage.getItem(userKey)) {
        return (
          (registerFormError.innerHTML = "User Already Exists. Please log in."),
          (registerFormError.style.color = "red"),
          setTimeout(loginFormVisible, 2000),
          registerForm.reset()
        );
      }
      var registerFormDataStore = {
        fName: registerUserFirstName.value,
        lName: registerUserLastName.value,
        email: registerUserEmail.value,
        password: registerUserPassword.value,
        amount: 0,
      };

      localStorage.setItem(userKey, JSON.stringify(registerFormDataStore));

      registerFormError.innerHTML = "Registered Successful!";
      registerFormError.style.color = "green";
      registerForm.reset();
      setTimeout(loginFormVisible, 3000);

      userAcountUserName.innerHTML =
        "Hi, " +
        registerFormDataStore.fName +
        " " +
        registerFormDataStore.lName;
    }

    // eHeading2Value = 3;
    // function loginFormVisibleCounter() {
    //   toggleHeading2.innerHTML = eHeading2Value - 1;
    //   setTimeout(loginFormVisibleCounter, 1000);
    // }
    // loginFormVisibleCounter();
    deleteAcountBtn.addEventListener("click", function () {
      loginForm.reset();
      registerForm.reset();
      localStorage.removeItem("email");
      console.log("555");
    });
  });

  loginForm.addEventListener("submit", function (j) {
    j.preventDefault();

    if (loginUserEmail.value === "") {
      return (
        (loginFormError.innerHTML = "Please Fill Email Field"),
        (loginFormError.style.color = "red")
      );
    } else if (loginUserPassword.value === "") {
      return (
        (loginFormError.innerHTML = "Please Fill Password Field"),
        (loginFormError.style.color = "red")
      );
    } else {
      var userKey = "user_" + loginUserEmail.value;
      var storedUserData = JSON.parse(localStorage.getItem(userKey));

      if (
        storedUserData.password === loginUserPassword.value &&
        storedUserData.email === loginUserEmail.value
      ) {
        loginFormError.innerHTML = "Login Successful!";
        loginFormError.style.color = "green";
        userAcountUserName.innerHTML =
          "Hi, " + storedUserData.fName + " " + storedUserData.lName;

        toggleHeading1.innerHTML = "Wait 3 Sec...";
        toggleContentUnVisible();
        function bankAppVisible() {
          loginForm.style.right = "0";
          loginForm.style.zIndex = "0";
          loginForm.style.opacity = "0";
          loginForm.style.visibility = "hidden";
          loginForm.style.scale = "0";

          registerForm.style.transition = "all 0.4s linear";
          registerForm.style.zIndex = "0";
          registerForm.style.opacity = "0";
          registerForm.style.visibility = "hidden";
          registerForm.style.scale = "0";
          registerForm.style.left = "-50%";

          formContainerToggle.style.top = "-100%";

          bankContainer.style.left = "0%";
          bankContainer.style.opacity = "1";
          bankContainer.style.visibility = "visible";
          bankContainer.style.rotate = "0deg";

          bankAcountUserName.innerHTML =
            "Hello Again " + storedUserData.fName + " " + storedUserData.lName;
        }
        setTimeout(bankAppVisible, 3000);
      } else {
        loginFormError.innerHTML = "User Not Found Register Your Info";
        loginFormError.style.color = "red";
      }
    }
  });

  function bankAppUnVisible() {
    loginForm.style.right = "50%";
    loginForm.style.zIndex = "1";
    loginForm.style.opacity = "1";
    loginForm.style.visibility = "visible";
    loginForm.style.scale = "1";

    // registerForm.style.transition = "all 0.4s linear";
    // registerForm.style.zIndex = "1";
    // registerForm.style.opacity = "1";
    // registerForm.style.visibility = "visible";
    // registerForm.style.scale = "1";
    // registerForm.style.left = "0%";

    formContainerToggle.style.top = "0%";

    bankContainer.style.left = "100%";
    bankContainer.style.opacity = "0";
    bankContainer.style.visibility = "hidden";
    bankContainer.style.rotate = "40deg";
    bankAcountUserName.style.fontSize = "16px";
  }

  function loginFormVisible() {
    formContainer.classList.add("active");
  }
  function loginFormUnVisible() {
    formContainer.classList.remove("active");
  }

  function toggleContentUnVisible() {
    toggleContainerRegisterBtn.style.trasition = "all 0.6s linear";
    toggleContainerRegisterBtn.style.opacity = "0";
    toggleH5.style.opacity = "0";
  }
  function toggleContentVisible() {
    toggleContainerRegisterBtn.style.trasition = "all 0.1s linear";
    toggleContainerRegisterBtn.style.opacity = "1";
    toggleH5.style.opacity = "1";
  }
  logOutBtn.addEventListener("click", function () {
    // location.reload();
    bankAppUnVisible();
    loginFormError.innerHTML = "LogOut Successful!";
    loginFormError.style.color = "red";
    loginForm.reset();
    registerForm.reset();
    // registerFormError.innerHTML = "LogOut!";
    formContainer.classList.remove("active");
    // loginForm.reset();

    // console.log("1111");
    // loginFormError.innerHTML = "LogOut!";
    // loginFormError.style.color = "red";
    // console.log("1111111111");

    // toggleHeading1.innerHTML = "Welcome Back!";
    // toggleContentVisible();
  });
}
registerFormLoginForm();

function deposit() {
  var currentBankBalance = 0;
  userBankAcountBalance.innerHTML = currentBankBalance;

  depositBtn.addEventListener("click", function (a) {
    a.preventDefault();

    if (isNaN(depositWithdrawInput.value) && depositWithdrawInput.value <= 0) {
      bankError.innerHTML = "Enter Valid Value";
    } else if (depositWithdrawInput.value >= 50000) {
      bankError.innerHTML = "Amount Greater";
    } else {
      bankError.innerHTML = " ";
      userBankAcountBalance.innerHTML =
        currentBankBalance + depositWithdrawInput.value;
      depositWithdrawInput.value = "";
    }
  });
}
deposit();

// function deposit() {
//   var currentBankBalance = localStorage.getItem("bankBalance") || 0;
//   userBankAcountBalance.innerHTML = currentBankBalance;

//   depositBtn.addEventListener("click", function (e) {
//     e.preventDefault();

//     var depositAmount = parseFloat(depositWithdrawInput.value);

//     if (isNaN(depositAmount) || depositAmount <= 0) {
//       bankError.innerHTML = "Enter a valid amount";
//     } else if (depositAmount >= 50000) {
//       bankError.innerHTML = "Amount greater than limit";
//     } else {
//       // Update bank balance
//       currentBankBalance = parseFloat(currentBankBalance) + depositAmount;

//       // Update UI
//       userBankAcountBalance.innerHTML = currentBankBalance;

//       // Store updated balance in localStorage
//       localStorage.setItem("bankBalance", currentBankBalance);

//       // Clear input and error messages
//       depositWithdrawInput.value = "";
//       bankError.innerHTML = "";
//     }
//   });
// }

// deposit();

// const acctBalanceLbl = document.getElementById("acctBalanceLbl");
// const deposits = [];
// const withdrawals = [];
// let totalBalance = 25;
// const userDeposit = document.getElementById("userDeposit");
// const btnDeposit = document.getElementById("btnDeposit");
// const userWithdraw = document.getElementById("userWithdraw");
// const btnWithdraw = document.getElementById("btnWithdraw");

// btnDeposit.addEventListener("click", () => {
//   // checks if deposit is a number
//   if (isNaN(userDeposit.value)) {
//     alert("Please enter a number.");
//     return (userDeposit.value = "");
//   } else {
//     // checks if deposit meets parameters
//     if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
//       alert("You can only deposit between $0.01 and $10,000.");
//       return (userDeposit.value = "");
//     } else {
//       // push deposit to array
//       deposits.push(Number(userDeposit.value));
//       // calculate Total Balance
//       totalBalance += Number(userDeposit.value);

//       // format TotalBalance to show $ XX.XX (2 decimal places)
//       let totalBalanceFormatted = formatter.format(totalBalance);
//       document.getElementById("acctBalanceLbl").innerHTML =
//         totalBalanceFormatted;

//       // print deposit to console to verify success
//       console.log("$" + userDeposit.value);
//       return (userDeposit.value = "");
//     }
//   }
// });

// // accept withdrawals from user, store withdrawals in array
// btnWithdraw.addEventListener("click", () => {
//   // checks if withdrawal is a number
//   if (isNaN(userWithdraw.value)) {
//     alert("Please enter a number.");
//     return (userWithdraw.value = "");
//   } else {
//     // checks if withdrawal meets parameters
//     if (userWithdraw.value > totalBalance - 5) {
//       alert("Your total balance cannot drop below $5.");
//       return (userWithdraw.value = "");
//     } else {
//       // push withdrawal to array
//       withdrawals.push(Number(userWithdraw.value));
//       // calculate Total Balance
//       totalBalance -= Number(userWithdraw.value);

//       // format TotalBalance to show $ XX.XX (2 decimal places)
//       let totalBalanceFormatted = formatter.format(totalBalance);
//       document.getElementById("acctBalanceLbl").innerHTML =
//         totalBalanceFormatted;

//       // print withdrawal to console to verfify success
//       console.log("$" + userWithdraw.value);
//       return (userWithdraw.value = "");
//     }
//   }
// });

// // format TotalBalance to show $ XX.XX (2 decimal places)

// let totalBalanceFormatted = formatter.format(totalBalance);
// document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
