const form = document.querySelector("#ticket__form");
const username = document.querySelector("#username");
const nubmer = document.querySelector("#number");
const emailaddress = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const uploadedFile = document.querySelector("#uplaodFile");


let errorMessaage = [];




form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  console.log(errorMessaage)
  // console.log([validate()]);
});



function validate() {
  const usernameValue = username.value;
  const numberValue = number.value;
  const emailaddressValue = emailaddress.value;
  const subjectValue = subject.value;
  const messageValue = message.value;
  const uploadedFilevalue = uploadedFile.value;

  //first name
  if (usernameValue === "") {
    setErrorMsg(username, "نام خود را وارد کنید");
  }
  else if (usernameValue.length < 2) {
    setErrorMsg(username, "لطفا یک نام معتبر وارد کنید");
  }
  else {
    setSuccessMsg(username);
  }
  //last name
  if (subjectValue === "") {
    setErrorMsg(subject, "یک موضوع انتخاب کنید");
  } else if (subjectValue.length < 2) {
    setErrorMsg(subject, "یک موضوع معتبر انتخاب کنید");
  } else {
    setSuccessMsg(subject);
  }

  // uploaded file
  if (uploadedFilevalue) {
    setSuccessMsg(uploadedFile);
  }
  if (messageValue === "") {
    //message
    setErrorMsg(message, "متن پیام را وارد کنید");
  } else {
    setSuccessMsg(message);
  }

  // email validate
  let regEx =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailaddressValue === "") {
    setErrorMsg(emailaddress, "ایمیل خود را وارد کنید");
  } else if (!regEx.test(String(emailaddressValue))) {
    setErrorMsg(emailaddress, "لطفا ایمیل معتبر وارد کنید");
  } else {
    setSuccessMsg(emailaddress);
  }
  //phone validate
  if (numberValue == "") {
    setErrorMsg(nubmer, "شماره تلفن خود را وارد کنید");
  } else if (numberValue && numberValue.length != 11) {
    setErrorMsg(number, "شماره ای که وارد کردید نا معتبر است");
  } else {
    setSuccessMsg(number);
  }
  // successMsgAlert(uploadedFilevalue);
  // successMsgAlert(usernameValue);
}

function setErrorMsg(input, errMsg) {

  console.log(input.name)
  console.log(errMsg);
  let inputName = input.name;
  errorMessaage.push({inputName: errMsg})
  let formControl_label = input.parentElement;
  if (!input.parentElement) return null;
  let formControl = formControl_label.parentElement;
  console.log(formControl_label)
  
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = errMsg;
}

function setSuccessMsg(input) {

  let formControl_label = input.parentElement;
  let formControl = formControl_label.parentElement;
  formControl.className = "form-control success";
}

function successMsgAlert(usernameVal) {
  let formControll = document.getElementsByClassName("form-control");
  let count = formControll.length - 1;
  for (let i = 0; i <= formControll.length; i++) {
    if (formControll[i].className === "form-control success") {
      let sRate = 0 + i;
      sendData(usernameVal, sRate, count);
    } else {
      return false;
    }
  }
}

function sendData(usernameVal, sRate, count) {
  if (sRate === count) {
    Swal.fire(
      "Welcome! " + usernameVal,
      "Registration Successfully Done",
      "success"
    );
    form.reset();

    let formCon = document.getElementsByClassName("form-control success");
    [...formCon].forEach((element) => {
      element.className = "form-control";
    });
  }
}
