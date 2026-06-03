const btn = document.querySelector('button');
let userInput = document.querySelector('#date');

userInput.max = new Date().toISOString().split('T')[0]

const result = document.querySelector('#result');


console.log(userInput.max = new Date().toISOString().split('T')[0]);

btn.addEventListener('click', () => {
    let birthDate = new Date(userInput.value);
    
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    
    let today = new Date()
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0){
        y3--;
        m3 = 12;
    }

    //  result.innerHTML = `You are <span> ${d3} </span> Days <span> ${m3} </span> Months and <span> ${y3}</span> Years old`
        result.innerHTML = 'You are <span>' + d3 + '</span> Days <span>' + m3 + '</span> Months and <span>' + y3 + '</span> Years old'
}) 

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}