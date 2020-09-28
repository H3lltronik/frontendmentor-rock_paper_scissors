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
    $("#score").html(score);
    localStorage.setItem("score", score)
}

function game (user, opponent) {
    cooldown = true;
    if (user.beats == opponent.name) {
        score++
        setTimeout(() => {
            updateScore(score);
        }, 3000);
        return "YOU WIN"
    }
    else if (opponent.beats == user.name) {
        return "YOU LOSE"
    }
    else {
        return "TIE!"
    }
}

$(document).ready(() => {
    let localScore = localStorage.getItem ("score")||0
    updateScore(localScore)

    $(".decision-item").each((item, value) => {
        let type = $(value).data('type');
        $(value).on('click', (e) => onSelectedType (type) )

    })

    $("#play-again").on("click", () => {
        window.location.reload()
    })
})