function panggilRegexp(input) {
    var isMatch1 = /learning\s+javascript/gi.test(input);
    if (isMatch1) {
        console.log("learning javascript");
    }
    else {
        console.log("learning");
    }

    var isMatch2 = /learning\s+php/gi.test(input);
    if (isMatch2) {
        console.log("learning php");
    }
    else {
        console.log("learning");
    }
}

panggilRegexp("Are you learning JavaScript yet?");
panggilRegexp("Are you learning php yet?");
