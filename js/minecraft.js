function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

var msgList = [
    "Hugo best boy :D",
    "Terraria > Minecraft",
    "Lisez GunnM"
]
var len = msgList.length

console.log(choose(msgList))

document.getElementById('name').placeholder = choose(msgList)