// VAR
// ** BLOCK SCOPE

function varTests() {
    if (3 > 0) {
        var ifBlockScope = true;
    }

    switch (ifBlockScope) {
        case false: break;
        case true:
        default:
            var caseBlockScope = 10;
    }


    for (var ibs = 0; ibs < caseBlockScope; ibs++) {
        console.log(`${ibs}. loop in for`);
    }
    console.log(`${ibs}. final value`);


    // ** FUNCTION SCOPE

    function scopeTest() {
        var testfc = "Merhaba";
        console.log(testfc, " inside the function");
        console.log("ifBlockScope", ifBlockScope, " inside the function");

    }

    scopeTest();
    console.log(testfc, " inside the function");

    //console.log(testfc, " outside the function");

}

// varTests();



// LET & CONST
// ** BLOCK SCOPE
function letConstScopeTests() {
    if (3 > 0) {
    }
    let ifBlockScope = true;

    switch (ifBlockScope) {
        case false: break;
        case true:
        default:
    }
    let caseBlockScope = 10;


    for (let ibs = 0; ibs < caseBlockScope; ibs++) {
        console.log(`${ibs}. loop in for`);
    }
    //console.log(`${ibs}. final value`);



    // ** FUNCTION SCOPE

    function scopeTest() {
        const testfc = "Merhaba";
        console.log(testfc, " inside the function");

    }

    scopeTest();

    console.log(testfc, " outside the function");

}
//letConstScopeTests();



// LET & CONST DIFFERENCES

function letConstDifferences() {
    let text1 = "Merhaba";
    text1 = text1 + " Nasılsınız?";
    console.log(text1);

    const pi = 3.14;
    pi = 3;
    console.log(pi);


    const user = {
        name: "Ahmet",
        surName: "Telli",
        age: 62
    };

    const user2 = {
        name: "Ahmet",
        surName: "Telli",
        age: 62
    };

    user = user2;

    const nn = [1, 5, 8, 65, 45];


    user.age = 63;
    console.log(user);
}
// letConstDifferences();




