function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 // The (x|y) expression is used to find any of the alternatives specified.
 //
 // The alternatives can be of any characters.


console.log(str.match(/[c|C]/g));
console.log(str.match(/[k|K]/g));
console.log(str.match(/[l|L]/g));

}

panggilRegexp()
