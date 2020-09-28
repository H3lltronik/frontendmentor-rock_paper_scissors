window.score = 10;
let selected = null;
let selectedType;
let cooldown = false;
const rules = [
    {
        name: "scissors",
        beats: "paper",
        el: ".scissors-inner"
    },
    {
        name: "paper",
        beats: "rock",
        el: ".paper-inner"
    },
    {
        name: "rock",
        beats: "scissors",
        el: ".rock-inner"
    },
];