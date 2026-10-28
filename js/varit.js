// ===== TESTATTAVAT VÄRIT =====
// Lista väreistä. Jokaisella värillä on nimi ja HEX-koodi.
var varit = [
    { nimi: "Fiesta", hex: "#DD4132" },
    { nimi: "Jester Red", hex: "#9E1030" },
    { nimi: "Turmeric", hex: "#FE840E" },
    { nimi: "Living Coral", hex: "#FF6F61" },
    { nimi: "Pink Peacock", hex: "#C62168" },
    { nimi: "Pepper Stem", hex: "#8D9440" },
    { nimi: "Aspen Gold", hex: "#FFD662" },
    { nimi: "Princess Blue", hex: "#00539C" },
    { nimi: "Toffee", hex: "#755139" },
    { nimi: "Mango Mojito", hex: "#D69C2F" },
    { nimi: "Terrarium Moss", hex: "#616247" },
    { nimi: "Sweet Lilac", hex: "#E8B5CE" },
    { nimi: "Soybean", hex: "#D2C29D" },
    { nimi: "Eclipse", hex: "#343148" },
    { nimi: "Sweet Corn", hex: "#F0EAD6" },
    { nimi: "Brown Granite", hex: "#615550" }
];

// ===== FUNKTIO, JOKA TEKEE YHDEN PALETIN =====
// paletti = mihin napit lisätään
// pinta = minkä pinnan väri vaihtuu
// nimiTeksti = mihin värin nimi kirjoitetaan
function teePaletti(paletti, pinta, nimiTeksti) {

    // Käydään kaikki 16 väriä läpi yksi kerrallaan
    for (var i = 0; i < varit.length; i++) {

        // Tehdään uusi nappi
        var nappi = $("<button></button>");
        nappi.addClass("varinappi");
        nappi.css("background-color", varit[i].hex);
        nappi.attr("title", varit[i].nimi);
        nappi.attr("data-hex", varit[i].hex);
        nappi.attr("data-nimi", varit[i].nimi);

        // Mitä tapahtuu, kun nappia klikataan
        nappi.click(function () {
            // Luetaan klikatun napin väri ja nimi
            var hex = $(this).attr("data-hex");
            var nimi = $(this).attr("data-nimi");

            // Vaihdetaan pinnan väri ja kirjoitetaan nimi näkyviin
            $(pinta).css("background-color", hex);
            $(nimiTeksti).text(nimi + " " + hex);
        });

        // Lisätään valmis nappi palettiin
        $(paletti).append(nappi);
    }
}

// ===== KUN SIVU ON LATAUTUNUT =====
$(document).ready(function () {

    // Tehdään molemmat paletit
    teePaletti("#paletti1", "#pinta1", "#nimi1");
    teePaletti("#paletti2", "#pinta2", "#nimi2");

    // Tyhjennä-painike palauttaa pinnat alkuperäiseen väriin.
    // Tyhjä arvo "" poistaa JavaScriptin asettaman värin,
    // jolloin käytetään style.css:ssä määritettyä väriä.
    $("#tyhjenna").click(function () {
        $("#pinta1").css("background-color", "");
        $("#pinta2").css("background-color", "");
        $("#nimi1").text("Ei valittua väriä");
        $("#nimi2").text("Ei valittua väriä");
    });
});