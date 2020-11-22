const Swal = require("sweetalert2");
function handleSubmit() {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem("customer_name_01");
    localStorage.setItem("customer_name_01", "Customer 01");
    alert("Đăng nhập thành công");
  } else {
    alert("Your Browser too old");
  }
}
