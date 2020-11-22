if (typeof Storage !== "undefined") {
  if (sessionStorage.user_name) {
    document.getElementById("user-name-header").innerHTML =
      "Hello " + sessionStorage.user_name;
  }
} else {
  alert("Your Browser too old");
}
