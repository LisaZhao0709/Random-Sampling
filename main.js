var names = ["莫雁如","宋旻烨","余梓莹","刘雅静","邱博阳","张金豪","陈致羽","王艺儒","李沛园","吴婉宁","马仁浩","张金豪","杨雨龙","张梓涵"];
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