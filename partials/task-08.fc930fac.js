!function(){var e=document.querySelector(".login-form");e.addEventListener("submit",(function(r){var n={};r.preventDefault(),new FormData(r.currentTarget).forEach((function(e,r){if(n[r]=e,""===e)return window.alert("всі поля повинні бути заповнені")})),""!==n.email&&""!==n.password&&(console.log(n),e.reset())}))}();
//# sourceMappingURL=task-08.fc930fac.js.map
