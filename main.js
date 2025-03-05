document.addEventListener("DOMContentLoaded", function() {
    var tlacidloPrihlasenie = document.getElementById("login-tlacidlo");
    if (tlacidloPrihlasenie) {
        tlacidloPrihlasenie.addEventListener("click", function() {
            window.location.href = "subpages/login.html";
        });
    }

    var tlacidloTuNicNieJe = document.getElementById("tu-nic-nie-je");
    if (tlacidloTuNicNieJe) {
        tlacidloTuNicNieJe.addEventListener("click", function() {
            window.location.href = "subpages/tu-nic-nie-je/konto-logged-in.html";
        });
    }

    var tlacidloLogin = document.getElementById("logged-in");
    if (tlacidloLogin) {
        tlacidloLogin.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "logged-in/prehlad-logged-in.html";
        });
    }

    var tlacidloNahrat = document.getElementById('tlacidlo-nahrat');
    if (tlacidloNahrat) {
        tlacidloNahrat.addEventListener("click", function() {
            window.location.href = "/subpages/logged-in/nahrat-vysledky.html";
        });
    }

    var tlacidloLogout = document.getElementById('tlacidlo-odhlasit-sa');
    if (tlacidloLogout) {
        tlacidloLogout.addEventListener("click", function() {
            window.location.href = "/index.html";
        });
    }
});