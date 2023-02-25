const e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){const r={};t.preventDefault();new FormData(t.currentTarget).forEach(((e,t)=>{if(r[t]=e,""===e)return window.alert("всі поля повинні бути заповнені")})),""!==r.email&&""!==r.password&&(console.log(r),e.reset())}));
//# sourceMappingURL=task-08.77dd15c6.js.map
