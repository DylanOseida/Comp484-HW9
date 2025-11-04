

// Set 1: Advanced Syntax, Types, and Quirks


/*************   Exercise 1   *************/

var result = 3 + 5 * (10 / 2) - (8 - 4);
console.log(result);

/*************************************** Result *********************************************
*   Expected output: 24                                                                     *
*    [Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js" *
*    24                                                                                     *
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
[Running] node "c:\Users\rip57\OneDrive\Desktop\School\Comp 484\comp484-hw9\hw9-DO.js"      *
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