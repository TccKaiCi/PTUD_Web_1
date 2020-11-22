var password = document.getElementById("passwordInput"),
  confirm_password = document.getElementById("rePasswordInput");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function handleSubmit() {
  alert("Submit cai ne");
  if (typeof Storage !== "undefined") {
    let name = document.getElementById("nameInput").value;
    localStorage.removeItem("customer_name_01");
    localStorage.setItem("customer_name_01", name);
    alert("Đăng ký thành công");
  } else {
    alert("Your Browser too old");
  }
}
