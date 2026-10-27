// ===== GALLERIA =====

$(document).ready(function () {

    // Kun galleriakuvaa klikataan, sama kuva laitetaan isoon ikkunaan
    $(".galleriakuva").click(function () {
        var osoite = $(this).attr("src");
        var teksti = $(this).attr("alt");

        $("#isoKuva").attr("src", osoite);
        $("#isoKuva").attr("alt", teksti);
        $("#kuvaTeksti").text(teksti);
    });
});