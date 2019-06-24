var globalVar = 10;

function creatingNewGlobalScopeInsideAFunction(){
    globalVarByAccident = 20;   //Esta variable será convertida en global!
}

function testingGlobalScope(){
    console.log(globalVar);
    console.log(globalVarByAccident);
}

creatingNewGlobalScopeInsideAFunction();
testingGlobalScope();