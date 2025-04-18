
let minNumber = 1;
let maxNumber = 30;

function openRangeDialog() {
    document.getElementById('rangeDialog').style.display = 'block';
}

function confirmRange() {
    minNumber = parseInt(document.getElementById('minValue').value);
    maxNumber = parseInt(document.getElementById('maxValue').value);
    if (isNaN(minNumber) || isNaN(maxNumber) || minNumber >= maxNumber) {
        alert('请正确输入有效的区间值！');
    } else {
        alert('区间设置成功：' + minNumber + ' - ' + maxNumber);
        document.getElementById('rangeDialog').style.display = 'none';
    }
}

function startLottery() {
    let ball = document.getElementById('ball');
    let count = 20;
    let interval = setInterval(() => {
        let randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        ball.textContent = randomNum;
        count--;
        if (count === 0) {
            clearInterval(interval);
            alert('本次抽中的号码是：' + randomNum);
        }
    }, 100);
}
