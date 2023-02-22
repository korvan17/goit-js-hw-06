const e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){const n={};t.preventDefault();new FormData(t.currentTarget).forEach(((e,t)=>{n[t]=e,""===e&&window.alert("всі поля повинні бути заповнені")})),e.reset(),console.log(n)}));
//# sourceMappingURL=task-08.27003085.js.map
