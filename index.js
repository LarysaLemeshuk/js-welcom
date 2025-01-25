/* 
Задача: у нас є обʼєкт з зарплатами по всіх відділах.
Написати функцію, яка повертає загальну суму, витрачену на зарплату всіх відділів
*/

const departmentSalaryCompany1 = {
    HR: 120000,
    development: 550000,
    PR: 50000,
    marceting: 120000,
    assistant: undefined
}

const departmentSalaryCompany2 = {
    HR: 120000,
    JS: 550000,
    PR: 50000,
    Clojure: 120000,
    assistant: undefined
}

function sumSalary(salaryobject){
    let sum = 0;

    for(let key in salaryobject){
        if(typeof salaryobject[key]=== 'number'){
        sum +=  salaryobject[key];
        }
    } 
return sum;
}
