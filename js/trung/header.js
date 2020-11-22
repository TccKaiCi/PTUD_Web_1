function checkLogin() {
  if (typeof Storage !== "undefined") {
    let name = localStorage.getItem("customer_name_01");
    if (name !== null) {
      let items = document.getElementById("div-account-info");
      items.innerHTML = "";
      let pItem = document.createElement("P");
      pItem.innerHTML = "Hello " + name;
      pItem.className = "dropdown-item";
      let buttonItem = document.createElement("BUTTON");
      buttonItem.className = "btn btn-danger dropdown-item";
      buttonItem.innerHTML = "Đăng xuất";
      buttonItem.addEventListener("click", logOut);
      items.append(pItem);
      items.append(buttonItem);
    }
  } else {
    alert("Your Browser too old");
  }
}
function logOut() {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem("customer_name_01");
    window.location.reload();
  } else {
    alert("Your Browser too old");
  }
}
checkLogin();
