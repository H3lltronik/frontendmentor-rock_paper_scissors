function onSelectedType (selectedType) {
    if (cooldown)
        return

    let userSelected = rules.find(item => item.name == selectedType);
    
    itemPicked (userSelected);

    let homeSelected = homeSelection ();

    let result = game (userSelected, homeSelected);

    showHomeSelection (homeSelected, result)
}

function homeSelection () {
    let index = Math.floor(Math.random() * 3) ;
    let res = rules[index]

    return res
}

function updateScore (score) {
    window.score = score
    $("#score").html(score);
    localStorage.setItem("score", score)
}

function game (user, opponent) {
    cooldown = true;

    if (user.beats == opponent.name) {
        setTimeout(() => {
            updateScore(Number(window.score)+1);
        }, 3000);
        showWinnerAnim (name.el)
        return "YOU WIN"
    }
    else if (opponent.beats == user.name) {
        showWinnerAnim (opponent.el)
        return "YOU LOSE"
    }
    else {
        return "TIE!"
    }
}

$(document).ready(() => {
    let localScore = localStorage.getItem ("score")||0
    updateScore(Number(localScore)||0)
    console.log("Local!", localScore)

    $(".decision-item").each((item, value) => {
        let type = $(value).data('type');
        $(value).on('click', (e) => onSelectedType (type) )

    })

    $("#play-again").on("click", () => {
        window.location.reload()
    })

    $(".modal-close-action").on("click", () => {
        $(".modal").removeClass("fade-in")
        $(".modal").addClass("fade-out")
    })
    
    $(".modal-open-action").on("click", () => {
        $(".modal").removeClass("fade-out")
        $(".modal").addClass("fade-in")
    })
})