// ===== YHTEYDENOTTOLOMAKKEEN TARKISTUS =====

$(document).ready(function () {

    // Kun lomake lähetetään (Lähetä-painiketta painetaan)
    $("#lomake").submit(function (event) {

        // Estetään sivun latautuminen uudelleen
        event.preventDefault();

        // Luetaan kenttien arvot.
        // trim() poistaa välilyönnit alusta ja lopusta,
        // jotta pelkät välilyönnit eivät kelpaa vastaukseksi.
        var nimi = $("#nimi").val().trim();
        var email = $("#email").val().trim();
        var viesti = $("#viesti").val().trim();

        // Oletetaan aluksi, että kaikki on kunnossa
        var kaikkiOk = true;

        // --- Tarkistetaan nimi ---
        if (nimi === "") {
            $("#nimi").addClass("is-invalid");
            kaikkiOk = false;
        } else {
            $("#nimi").removeClass("is-invalid");
        }

        // --- Tarkistetaan sähköposti ---
        // Osoitteessa pitää olla @-merkki ja piste
        if (!email.includes("@") || !email.includes(".")) {
            $("#email").addClass("is-invalid");
            kaikkiOk = false;
        } else {
            $("#email").removeClass("is-invalid");
        }

        // --- Tarkistetaan viesti ---
        if (viesti === "") {
            $("#viesti").addClass("is-invalid");
            kaikkiOk = false;
        } else {
            $("#viesti").removeClass("is-invalid");
        }

        // --- Jos kaikki kentät olivat kunnossa ---
        if (kaikkiOk) {
            $("#kiitosNimi").text(nimi);   // nimi kiitosviestiin
            $("#lomake").hide();           // piilotetaan lomake
            $("#kiitos").fadeIn();         // näytetään kiitosviesti pehmeästi
        }
    });
});