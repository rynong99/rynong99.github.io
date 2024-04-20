//Problem 1
const personnel = {
    'workers':[
        {'firstName' : 'Sam',
        'department' : 'Tech',
        'role' : 'Manager',
        'salary' : 40000,
        'raiseEligible' : true
        },
        {'firstName': 'Mary',
        'department' : 'Finance',
        'role' : 'Trainee',
        'salary' : 18500,
        'raiseEligible' : true
        },
        {'firstName' : 'Bill',
        'department' : 'HR',
        'role' : 'Executive',
        'salary' : 21200,
        'raiseEligible' : false
        }
    ]
}
console.log('Question 1:')
console.log(personnel)
//Problem 2
const company = {
    companyName : 'Tech Stars',
    website : 'www.techstars.site',
    employees : personnel
}
console.log('Question 2:') 
console.log(company)
//Problem 3
company.employees.workers.push({'firstName' : 'Anna',
'department' : 'Tech',
'role' : 'Executive',
'salary' : 25600,
'raiseEligible' : false
})
console.log('Question 3:')
console.log(company.employees.workers)
//Problem 4
var totalSalary = 0
for (let i = 0; i < company.employees.workers.length;i++){
    totalSalary += company.employees.workers[i].salary;
}
console.log('Question 4:')
console.log(totalSalary)
//Problem 5
function raise(){
    for (let i = 0; i < company.employees.workers.length;i++){
        if (company.employees.workers[i].raiseEligible == true){
            company.employees.workers[i].salary *= 1.1;
            company.employees.workers[i].raiseEligible = false;
        }
    }
}
raise()
console.log('Question 5:')
console.log(company.employees.workers)
//Problem 6
const homeWorkers= ['Anna','Sam']
for (let i = 0; i < company.employees.workers.length;i++){
    company.employees.workers[i].wfh = false
    if (homeWorkers.includes(company.employees.workers[i].firstName)){
        company.employees.workers[i].wfh = true
    }
}
console.log('Question 6:')
console.log(company.employees.workers)
