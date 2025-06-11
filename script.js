
const poems = [
    "海上生明月，天涯共此时。",
    "月落乌啼霜满天，江枫渔火对愁眠。",
    "故人西辞黄鹤楼，烟花三月下扬州。",
    "采菊东篱下，悠然见南山。",
];

function getRandomPoem() {
    const index = Math.floor(Math.random() * poems.length);
    document.getElementById('random-poem').innerText = poems[index];
}

function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === "1231") {
        document.getElementById("password-protect").style.display = "none";
    } else {
        alert("密码错误！");
    }
}

window.onload = function() {
    getRandomPoem();
};
