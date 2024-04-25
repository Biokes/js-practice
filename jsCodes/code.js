const { valid } = require("semver");

function getTestScores(numberGive){
    output = []
    numberGive.filter(num => {if(num> 70)
        output.push(num)
    });
    return output
}
function totalScores(scores){
    scores = scores.map(num=>(num+5));
    return scores;
}
function getSquares(scores){
    return scores.map(num => num*num )
}
function getNoonClasses(timeZones){
    output=[]
    timeZones= timeZones.filter(time => {if(time.endsWith("PM")){
        output.push(time);
        }
    })
    return output;
}
function calculateTotalExpenses(given){
    let totalExpenses = 0;
    for(values in given){
        totalExpenses+= given[values]
    }
    return totalExpenses;
}
function assignBook(users,books){
    let output= [];
    counter = 0;
    for(values  of users){
        output.push({"name" : users[counter],"book":books[counter]});
        counter++;
    }
    return output;
}
function select(list){
    output= []
    list.forEach(element => {if(element.isHealthy){
        console.log(element.name);
    }
    });
    list.filter(elements=> {if(elements.isHealthy)output.push(elements.name);})
    return output;
}
module.exports = {getTestScores, totalScores,getSquares,getNoonClasses, calculateTotalExpenses,select,assignBook}