

//  Set 1: Advanced Syntax, Types, and Quirks


/*************   Exercise 1   *************/

var result = 3 + 5 * (10 / 2) - (8 - 4);
console.log(result);

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   24                                                                                      *
*                                                                                           *
*   [Done] exited with code=0 in 0.052 seconds                                              *
********************************************************************************************/




/*************   Exercise 2   *************/

var projectIdentifier = "COMP484";


//This line fails based on JavaScript's rules because variable names are case-sensitive.
//"ProjectIdentifier" is not the same as "projectIdentifier".
ProjectIdentifier = "JS_Advanced";

//This line works correctly because it uses the correct case for the variable name.
projectIdentifier = "JS_Advanced";
console.log(projectIdentifier);

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   JS_Advanced                                                                             *
*                                                                                           *
*   [Done] exited with code=0 in 0.052 seconds                                              *          
********************************************************************************************/




/*************   Exercise 3   *************/

var courseDescription = "The course is \"interactive\" and involves 'scripting' logic."; 
console.log(courseDescription);

/*************************************** Result *********************************************
*    [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js" *
*                                                                                           *
*   The course is "interactive" and involves 'scripting' logic.                             *
*                                                                                           *
*   [Done] exited with code=0 in 0.059 seconds                                              *
********************************************************************************************/




/*************   Exercise 4   *************/

var errorMessage = `An internal server error occurred: \"Access Denied\"`;
console.log(errorMessage);

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   An internal server error occurred: "Access Denied"                                      *
*                                                                                           *
*   [Done] exited with code=0 in 0.052 seconds                                              *
********************************************************************************************/




/*************   Exercise 5   *************/

var valueA = 10;
var valueB = "4";

var resultSubtraction = valueA - valueB;
var reresultMultiplication = valueA * valueB;

console.log("Result Subtraction: " + resultSubtraction);
console.log("Result Multiplication: " + reresultMultiplication);

console.log("\nType of valueB: " + typeof valueB);

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  * 
*                                                                                           *
*   Result Subtraction: 6                                                                   *
*   Result Multiplication: 40                                                               *
*                                                                                           *
*   Type of valueB: string                                                                  * 
*                                                                                           *      
*   [Done] exited with code=0 in 0.059 seconds                                              *
********************************************************************************************/ 




//  Set 2: Operators and Type Theory


/*************   Exercise 6   *************/

var unassignedVar;
var explicitNull = null;

console.log("Type of unassignedVar: " + typeof unassignedVar);
console.log("Type of explicitNull: " + typeof explicitNull);

/*From MDN: "In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. 
The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). 
Consequently, null had 0 as type tag, hence the typeof return value 'object'." */

/*************************************** Result *********************************************
*    [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js" *
*                                                                                           *
*   Type of unassignedVar: undefined                                                        *
*   Type of explicitNull: object                                                            *
*                                                                                           *
*   [Done] exited with code=0 in 0.052 seconds                                              *
********************************************************************************************/




/*************   Exercise 7   *************/

var isBlocking  = true;
console.log(typeof isBlocking);

isBlocking = "true";
console.log(typeof isBlocking);

/*************************************** Result *********************************************
*    [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js" *
*                                                                                           *
*   boolean                                                                                 * 
*   string                                                                                  *      
*                                                                                           *
[Done] exited with code=0 in 0.061 seconds                                                  *
********************************************************************************************/




/*************   Exercise 8   *************/

//var 3String;    Having a number as the first character is not allowed because JavaScript needs to be able to distinguish between variable names and numeric literals
//var f unction;  Having a space in the variable name is not allowed because spaces are delimiters and determine where one token ends and another begins
//var &;          Having a special character like & is not allowed because variable names can only contain letters, digits, underscores, and dollar signs




/*************   Exercise 9   *************/

var counterValue = 50;

counterValue /= 5;
counterValue -= 3;

console.log(counterValue);

/*************************************** Result *********************************************
*    [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js" *
*                                                                                           *
*    7                                                                                      *
*                                                                                           *
*    [Done] exited with code=0 in 0.058 seconds*                                            *
********************************************************************************************/




/*************   Exercise 10  *************/

var x = 10;
console.log("var x: ", x);

var y_post = x++;
console.log("var y_post: ", y_post);

x = 10;

var z_pre = ++x;
console.log("var z_pre: ", z_pre);

/* The placement of the ++ determines when the program will increment the value of the variable.
For 'var y_post = x++;', the program first assigns the value of x (10) and then increments
x to 11. For 'var z_pre = ++x;', the program first icrements the value of x to 11 and then
assigns it to the variable. */ 

/*************************************** Result *********************************************
*    [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js" *
*                                                                                           *
*    var x:  10                                                                             *
*    var y_post:  10                                                                        *
*    var z_pre:  11                                                                         *
*                                                                                           *
*    [Done] exited with code=0 in 0.053 seconds                                             *
********************************************************************************************/




/*************   Exercise 11  *************/

var testNumber = 0;
var testBoolean = false;

if (testNumber == testBoolean){
    console.log("testNumber and testBoolean are equal.");
}

/* In JavaScript, when you use the loose equality operator (==) it performs type coercion
where it automatically converts one type of value into another value and
in this case, it automatically converts false to the numerical value of 0. */

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*    testNumber and testBoolean are equal.                                                  *
*                                                                                           *
*    [Done] exited with code=0 in 0.059 seconds                                             *
********************************************************************************************/




/*************   Exercise 12  *************/

var versionA = 10.0;
var versionB = "10.0";

if (versionA !== versionB){
    console.log("versionA and versionB are NOT strictly equal.");
}
else{
    console.log("versionA and versionB are strictly equal.");
}


/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   versionA and versionB are NOT strictly equal.                                           *
*                                                                                           *
*   [Done] exited with code=0 in 0.054 seconds                                              *
********************************************************************************************/




/*************   Exercise 13  *************/

var isLoggedIn = true, isSubscriber = true, isTrialExpired = false;

if((isLoggedIn == true && isSubscriber == true) || (isLoggedIn == true && isTrialExpired == false)){
    console.log("Access is granted.");
}


/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   Access is granted.                                                                      *
*                                                                                           *
*   [Done] exited with code=0 in 0.06 seconds                                               *
********************************************************************************************/




/*************   Exercise 14  *************/

var conditionA = true, conditionB = false;

if (conditionA ^ conditionB){
    console.log("XOR Success.");
}
else{
    console.log("XOR Fail.");
}

conditionA = true;
conditionB = true;

if (conditionA ^ conditionB){
    console.log("\nXOR Success.");
}
else{
    console.log("\nXOR Fail.");
}

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   XOR Success.                                                                            *
*                                                                                           *
*   XOR Fail.                                                                               *
*                                                                                           *
*   [Done] exited with code=0 in 0.053 seconds                                              *
********************************************************************************************/




/*************   Exercise 15  *************/

var scriptLoadType = "deferred"
var loadStatus, loadStatusTernary;

if (scriptLoadType == "deferred"){
    loadStatus = "Non-blocking";
}
else{
    loadStatus = "Potentially Blocking";
}

console.log("loadStatus: ", loadStatus);

loadStatusTernary = (scriptLoadType == "deferred") ? "Non-blocking" : "Potentially Blocking";

console.log("loadStatusTernary (ternary):", loadStatusTernary);

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  * 
*                                                                                           * 
*   loadStatus:  Non-blocking                                                               *
*   loadStatusTernary (ternary): Non-blocking                                               *
*                                                                                           *
*   [Done] exited with code=0 in 0.054 seconds                                              *
********************************************************************************************/




/*************   Exercise 16  *************/

function calculateRenderTime(){

    //body code to calculate render time

}

/* This function's purpose is to calculate the time taken to parse HTML and execute JS*/




/*************   Exercise 17  *************/

var date = new Date();

var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

console.log("Today's date is ", month, "/", day, "/", year);

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   Today's date is  11 / 5 / 2025                                                          * 
*                                                                                           *
*   [Done] exited with code=0 in 0.054 seconds                                              * 
********************************************************************************************/




/*************   Exercise 18  *************/

var val1 = 20;
var val2 = "5";

var sumResult = val1 + val2;
console.log("sumResult: ", sumResult);

var diffResult = val1 - val2;
console.log("diffResult: ", diffResult);

/*From MDN: "The + operator is overloaded for two distinct operations: numeric addition and string concatenation."
meaning that when there are two numerical values, JavaScript will add them and store the sum in the variable. If
there is a string, then JavaScript will combine the string and then numeric value to create a longer string. */

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  * 
*                                                                                           * 
*   sumResult:  205                                                                         * 
*   diffResult:  15                                                                         * 
*                                                                                           *
*   [Done] exited with code=0 in 0.054 seconds                                              *
********************************************************************************************/




/*************   Exercise 19  *************/

var dataInput = 484;

if(typeof(dataInput) !== "number"){
    console.log("Input is numeric.");
}
else{
    dataInput = true;
    console.log("new type: ", typeof(dataInput));
}

/*************************************** Result *********************************************
*   [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"  *
*                                                                                           *
*   new type:  boolean                                                                      *
*                                                                                           *
*   [Done] exited with code=0 in 0.055 seconds                                              *
********************************************************************************************/




/*************   Exercise 20  *************/

/* If we run this script in the header without the 'defer' or 'async' attributes, as soon as
the program sees the <script> tag it will try to run the JavasScript immediately, but there 
is no body yet. So when it gets to something like "document.body.appendChlid(header1);" it 
throws an error: "Cannot set property 'innerHTML' of null" */

var header1 = document.createElement("h1");

header1.textContent = "Interactive Layer Loaded";

document.body.appendChild(header1);