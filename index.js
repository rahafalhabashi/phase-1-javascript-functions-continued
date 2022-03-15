function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(emphasize = "*") {
    // const encouragingFunction = wrapAdjective("!!");
    return function (character = "special") {
        return `You are ${emphasize}${character}${emphasize}!`;
    }
}

console.log(wrapAdjective()());