const inputA = document.querySelector('#unit1');
const inputB = document.querySelector('#unit2');
const inputC = document.querySelector('#unit3');
const inputD = document.querySelector('#unit4');
const inputE = document.querySelector('#unit5');
const inputF = document.querySelector('#unit6');
const inputG = document.querySelector('#unit7');
const inputH = document.querySelector('#unit8');
const inputI = document.querySelector('#unit9');
const score1 = document.querySelector('#grade1');
const score2 = document.querySelector('#grade2');
const score3 = document.querySelector('#grade3');
const score4 = document.querySelector('#grade4');
const score5 = document.querySelector('#grade5');
const score6 = document.querySelector('#grade6');
const score7 = document.querySelector('#grade7');
const score8 = document.querySelector('#grade8');
const score9 = document.querySelector('#grade9');
const output = document.querySelector('.output');
const submitbtn = document.querySelector('#submit-btn');

submitbtn.addEventListener( 'click', ( event ) => {
    event.preventDefault();
    const unit = getUnit()
    const getGrade = getGradeUnit()
    let gpa = Number.parseFloat( getGrade/unit).toFixed(2)
    output.innerHTML = `<p>YOUR GPA IS ${gpa}</p> `;
})

const getUnit = () => {
     let totalunit = 0
    for ( let i = 1; i <= 9; i++ ) {
        let name = `#unit${ i }`.toString()
        const getInputValue = document.querySelector( name ).value;
        if ( getInputValue !== '' ) {
            totalunit += Number( getInputValue );
        } 
    }
    return totalunit;
};
const getGradeUnit = () => {
     let total = 0
    for ( let i = 1; i <= 9; i++ ) {
        let unitName = `#unit${ i }`.toString()
        let gradeName = `#grade${ i }`.toString()
        const getunitValue = document.querySelector( unitName ).value;
        const getGradeValue = document.querySelector( gradeName ).value;
        if ( getunitValue !== '' &&  getGradeValue !== '') {
            total += Number( getunitValue ) * Number(getGradeValue);
        } 
    }
    return total;
}