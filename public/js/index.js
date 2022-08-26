var btn = document.querySelector("#btn-enviar");
var form = document.querySelector("#form");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    var datos = new FormData(form);
    fetch('guardar', {
            method: 'post',
            body: datos
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.alerta == "danger") {

                var nombre = document.querySelector(".error-nombre");
                nombre.textContent = result.nombre[0];
                var primer = document.querySelector(".error-primer");
                primer.textContent = result.primer[0];
                var segundo = document.querySelector(".error-segundo");
                segundo.textContent = result.segundo[0];
                var email = document.querySelector(".error-email");
                email.textContent = result.email[0];
                var password = document.querySelector(".error-password");
                password.textContent = result.password[0];
                var confpassword = document.querySelector(".error-confirmarpassword");
                confpassword.textContent = result.confirmarpassword[0];
                var direccion = document.querySelector(".error-direccion");
                direccion.textContent = result.direccion[0];
                var ciudad = document.querySelector(".error-ciudad");
                ciudad.textContent = result.ciudad[0];
                var rol = document.querySelector(".error-rol");
                rol.textContent = result.rol[0];
                var postal = document.querySelector(".error-postal");
                postal.textContent = result.postal[0];

                var badge = document.querySelectorAll(".badge");
                badge.forEach(span => {
                    span.style.display = "block"
                    span.style.textAlign = "left";
                });

                setTimeout(() => {
                    badge.forEach(span => {
                        span.style.display = "none";
                    });
                }, 10000);

            }

            if (result.alerta == "success") {
                var success = document.querySelector(".alert");
                success.textContent = "Datos validados correctamente";
                success.style.display = "block";
            }

        })
});