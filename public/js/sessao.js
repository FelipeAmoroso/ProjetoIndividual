// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function protegerPagina() {
    if (!sessionStorage.ID_USUARIO) {
        window.location.href = "login.html";
    }
}

function atualizarMenu() {
    var logado = !!sessionStorage.ID_USUARIO;

    document.querySelectorAll("a[href*='login.html'], a[href*='cadastro.html']").forEach(function(link) {
        var li = link.closest("li");
        if (li) li.style.display = logado ? "none" : "";
    });

    var liSair = document.getElementById("li-sair");
    if (liSair) liSair.style.display = logado ? "" : "none";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

document.addEventListener("DOMContentLoaded", atualizarMenu);
