//Step 1: Global Variables
    var globalVar = "Global Scope Var";
    var anotherGlobalVar = 10;

//Step 2: 
    function demoFunctionScope (){
        let localVar = "Block Scope Var";
        console.log(`localVar:`, typeof localVar);
        console.log(`anotherGlobalVar:`, typeof globalVar);
 
        return `Local Variable: ${localVar}, Global Variable: ${anotherGlobalVar}`;
    }

//Step 3:
    var returnValue = demoFunctionScope();
    console.log(returnValue);
    
//Step 4: 
    if(true){
        let blockVar = "\nInside Block Variable";
        console.log(blockVar);
    }

    //console.log(blockVar);
        //results in error since its block-scoped