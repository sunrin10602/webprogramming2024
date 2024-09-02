// 현재 입력값을 저장하는 변수
let a = '';  

// 이전 입력값을 저장하는 변수
let b = '';  

// 현재 선택된 연산자를 저장하는 변수
let op = ''; 

// 숫자 버튼 클릭 시 호출되는 함수
function numberClick(num) {
    // 현재 입력값(a)에 클릭된 숫자를 추가
    a += num;
    // 화면을 업데이트하여 현재 입력값을 표시
    updateDisplay();
}

// 연산자 버튼 클릭 시 호출되는 함수
function opClick(operator) {
    // 입력값이 없거나 이전 입력값이 없으면 아무것도 하지 않음
    if (a === '' && b === '') return; 

    // 현재 입력값이 있으면 이전 입력값(b)에 현재 입력값(a)을 저장
    // 이후 현재 입력값(a)을 초기화
    if (a !== '') {
        b = a;
        a = '';
    }
    // 클릭된 연산자를 설정
    op = operator;
    // 화면을 업데이트하여 선택된 연산자를 표시
    updateDisplay();
}

// 결과를 계산하고 화면에 표시하는 함수
function calculate() {
    // 입력값이 없거나 연산자가 없으면 연산을 수행하지 않음
    if (a === '' || b === '' || op === '') return;

    let result;  // 계산 결과를 저장할 변수

    // 문자열을 정수로 변환
    const num1 = parseInt(b, 10);
    const num2 = parseInt(a, 10);

    // 선택된 연산자에 따라 계산 수행
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // 분모가 0이면 'Error'를 표시하고, 그렇지 않으면 나눗셈 결과를 저장
            result = num2 === 0 ? 'Error' : num1 / num2;
            break;
    }

    // 계산 결과를 문자열로 변환하여 현재 입력값(a)에 저장
    a = result.toString();
    // 이전 입력값(b)과 연산자(op)를 초기화
    b = '';
    op = '';
    // 화면을 업데이트하여 계산 결과를 표시
    updateDisplay();
}

function updateDisplay() {
    // 입력값(a)이 있다면 그 값을 화면에 표시
    // 입력값(a)이 비어 있다면 이전 입력값(b)을 화면에 표시
    // 둘 다 비어 있다면 '0'을 화면에 표시
    document.getElementById('display').value = a || b || '0';
}

// 화면을 초기화하는 함수
function clearDisplay() {
    // 현재 입력값(a), 이전 입력값(b), 연산자(op)를 모두 초기화
    a = '';
    b = '';
    op = '';
    // 화면을 업데이트하여 초기화된 상태를 반영
    updateDisplay();
}