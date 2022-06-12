var names = ["李华","小明","小红","小张","HXD","LPL","LOL"];
var length = names.length;

var displayBoard = document.getElementById("nameDisplay");

mytime = null

function clickButton(btn) {
    var text = btn.innerHTML;
    console.log(text);

    if (text == "Start") {
        btn.innerHTML = "End";

        if (mytime == null) {
            mytime = setInterval(function () {
                var name = randomName();
                console.log(name);
                displayBoard.innerHTML = name;
            }, 100);
        }

    } else if (text == "End") {
        btn.innerHTML = "Start";

        if (mytime != null) {
            clearInterval(mytime);
            mytime = null;
        }
    }


}

function randomName() {
    var randomNum = Math.ceil(Math.random() * 4000) % length + 1;
    return names[randomNum - 1];
}