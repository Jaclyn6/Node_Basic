var name = "Mark"; // var라는 단어는 변수를 선언할 때 사용하는 Keyward


//var return = '변수명'; // return은 Reserved Words라서 변수명으로 사용할 수 없음

// Future Reserved Keywords 도 있음

/*-----------------------------------------------------------*/

var name = 'Mark'; // name 이 식별자
function hell() {} // hell()이 식별자
var person = {name: 'Mark', age: 37}; // person, name, age 모두 식별자
var 안녕;// 식별자는 한글도 가능, 숫자로 시작하는 건 불가, 공백문자도 불가

/*-----------------------------------------------------------*/

if ((5 + 10) % 3 === 0) {
    console.log('야호3');
}

if ((5 + 10) % 5 === 0) {
    console.log('야호5');
}

const sum = 10 + 5; //상수형 변수 값한번 정하면 끝
let result = false; // let 은 재할당 가능 var와 다른 점 있음
if (sum % 3 === 0) {
    console.log('야호3');
}

if (sum % 5 === 0) {
    console.log('야호5');
}


