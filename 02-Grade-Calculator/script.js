const gradeForm = document.querySelector('#gradecalcform');
const inputField = document.querySelectorAll('.input-field');
// const submitButton = document.querySelector('#submit-btn');
const resetButton = document.querySelector('#reset-btn');
const result = document.querySelector('#result');
const studentName = document.querySelector('#sname');
const studentRegistration = document.querySelector('#rnumber');

const sm1 = document.querySelector('#sm1');
const sm2 = document.querySelector('#sm2');
const sm3 = document.querySelector('#sm3');
const sm4 = document.querySelector('#sm4');
const sm5 = document.querySelector('#sm5');


gradeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const subject1 = Number(sm1.value);
    const subject2 = Number(sm2.value);
    const subject3 = Number(sm3.value);
    const subject4 = Number(sm4.value);
    const subject5 = Number(sm5.value);

    const userName = studentName.value;
    const userRegistration = studentRegistration.value;
    const totalmarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const userPercentage = (totalmarks / 500) * 100;
    console.log(userPercentage);

    let grade;

    if (userPercentage >= 90) {
        grade = "A+";
    } else if (userPercentage >= 80) {
        grade = "A";
    } else if (userPercentage >= 70) {
        grade = "B";
    } else if (userPercentage >= 60) {
        grade = "C";
    } else if (userPercentage >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    result.innerHTML = `
    <h2>Result</h2>
    <p>Name: ${userName}</p>
    <p>Registration Number: ${userRegistration}</p>
    <p>Total Marks: ${totalmarks} / 500</p>
    <p>Percentage: ${userPercentage.toFixed(2)}%</p>
    <p>Grade: ${grade}</p>
    `;

    result.style.display = "block";
})


resetButton.addEventListener('click' , (e)=>{
    studentName.value = ""; 
    studentRegistration.value = "";
    inputField.forEach((input)=>{
        input.value = "";
    })
    result.innerHTML = "";
    result.style.display = "none";
    


})