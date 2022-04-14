// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(tasks = "go to the office"){
    return `This Monday, I will ${tasks}.`;
}

function wrapAdjective(symbol){
    return function result(work){
        return `You are ${symbol}${work}${symbol}!`;       
    }
}