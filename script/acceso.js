window.onload = () => {
    document.getElementById("user-guardar").value = localStorage.getItem("usuario");
};


function guardarUsuario() {
    let usuarioAGuardar = document.getElementById("user-guardar").value;
    localStorage.setItem("usuario", usuarioAGuardar);
}