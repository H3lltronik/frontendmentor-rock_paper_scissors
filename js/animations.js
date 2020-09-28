function itemPicked (userSelected) {
    rules.forEach(item => {
        if (item.name !== userSelected.name) {
            $(item.el).addClass("fade-out");
        }
    })
    $(userSelected.el).addClass(`selected-${userSelected.name}-animation`)
    $(".decision-bg").addClass("fade-out");

    setTimeout(() => {
        $(".decision-result-user").addClass("fade-in");
    }, 1000);
}

function restartUser (selection) {
    $(selection.el).removeClass(`selected-${selection.name}-animation`)
    setTimeout(() => {
        $(selection.el).addClass(`reverse-${selection.name}-animation`)
    }, 1);
}

function showHomeSelection (homeSelected, result) {
    $("#home-selection-inner").addClass("fade-in")

    setTimeout(() => {
        $(".decision-result-home").addClass("fade-in")
    }, 1000);

    setTimeout(() => {
        $("#home-selection-inner, #home-selection-outer").removeClass("no-bg");
        $("#home-selection-content-outer, #home-selection-content-inner").removeClass("home-selection-bg");

        $("#home-selection-inner").addClass (homeSelected.name + "-inner");
        $("#home-selection-outer").addClass (homeSelected.name + "-outer");
        $("#home-selection-icon").addClass (homeSelected.name + "-icon");
    }, 2000);

    setTimeout(() => {
        $("#user-result").html(result)
        $(".decision-result").addClass("fade-in");

        
        $(".decision").addClass("expanded-container");

        setTimeout(() => {
            // BUG! :/
            $(".paper-container").attr("style", "left: -50% !important");
        }, 250);
    }, 3000);

}

function restartHome (selection) {
    $("#home-selection-inner").removeClass (selection.name + "-inner");
    $("#home-selection-outer").removeClass (selection.name + "-outer");
    $("#home-selection-icon").removeClass (selection.name + "-icon");
}