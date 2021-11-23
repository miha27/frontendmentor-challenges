const fname = document.getElementById("fname");
const form = document.getElementById("form");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function isFnameValid(fname) {
  if (fname === "") {
    return false;
  } else {
    return true;
  }
}

function checkInputs() {
  //trim is for removing the white spaces
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let checkFname = isFnameValid(fnameValue);

  if (checkFname) {
    setSuccesFor(fname);
  } else {
    setErrorFor(fname, "cannot be empty");
  }

  //   if (fnameValue === "") {
  //     setErrorFor(fname, "First Name cannot be empty");
  //   } else {
  //     if (fnameValue.length < 4) {
  //       setErrorFor(fname, "First name cannot be shorter than 4 characters");
  //     } else {
  //       if (fnameValue.charAt(0) != fnameValue.charAt(0).toUpperCase()) {
  //         setErrorFor(fname, "First letter should be uppercase");
  //       } else {
  //         if (fnameValue.includes("a") || fnameValue.includes("A")) {
  //           setErrorFor(fname, "Name cannot contain the letter 'a'");
  //         } else {
  //           setSuccesFor(fname);
  //         }
  //       }
  //     }
  //   }

  if (lnameValue === "") {
    setErrorFor(lname, "Last Name cannot be empty");
  } else {
    setSuccesFor(lname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccesFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
