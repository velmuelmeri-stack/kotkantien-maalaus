// ===== YHTEINEN JAVASCRIPT KAIKILLE SIVUILLE =====

$(document).ready(function () {

    // Etusivun hero-teksti ilmestyy näkyviin häivyttäen.
    // Ensin teksti piilotetaan ja sitten tuodaan näkyviin 1,5 sekunnissa.
    $(".hero-sisalto").hide().fadeIn(1500);
});