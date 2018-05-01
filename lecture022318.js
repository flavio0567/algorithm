//===parents valid ======================//
function parentsValid(str) {
    var parents = {
        open: "(",
        close: ")"
    }
    var ok = true;
    var count = 0;
    if ( str[0] === parents.close ) {
        ok = false;
        return ok;
    }
    for (var i = 0; i < str.length;i++) {
        switch (str[i]) {
            case parents.open:
                ok = false;
                count += 1;
                break;
            case parents.close:
                ok = true;
                count -= 1;
                break;
        }
    }
    if ( count != 0 ) { ok = false };
    return ok;
}
var str = "y(3(p)p(3)r)s";
console.log(parentsValid(str));

//===braces valid ======================//
function bracesValid(str) {
    var parents = {
        open: "(",
        close: ")"
    }
    var braces = {
        open: "{",
        close: "}"
    }
    var brackets = {
        open: "[",
        close: "]"
    }    
    var ok = true;
    var countParents = 0;
    var countBraces = 0;
    var countBrackets = 0

    if ( str[0] === parents.close ) {
        ok = false;
        return ok;
    }
    if ( str[0] === braces.close ) {
        ok = false;
        return ok;
    }
    if ( str[0] === brackets.close ) {
        ok = false;
        return ok;
    }
    var lastOpen = "";
    for (var i = 0; i < str.length;i++) {
        switch (str[i]) {
            case parents.open:
                lastOpen = parents.open;
                ok = false;
                countParents += 1;
                break;
            case parents.close:
                if (countBraces > 0 && countParents === 0) {
                    ok = false;
                    return ok;};
                if (countBrackets > 0 && countParents === 0){
                    ok = false;
                    return ok;};
                if (lastOpen != "" ) {
                    ok = false;
                    return ok;};
                ok = true;
                lastOpen = "";
                countParents -= 1;
                break;
            case braces.open:
                lastOpen = braces.open;
                ok = false;
                countBraces += 1;
                break;
            case braces.close:
                if (countParents > 0 && countBraces === 0) {
                    ok = false;
                    return ok;};
                if (countBrackets > 0 && countBraces === 0) {
                    ok = false;
                    return ok;};
                if (lastOpen != braces.open ) {
                    ok = false;
                    return ok;};
                countBraces -= 1;
                lastOpen = "";
                ok = true;
                break;
            case brackets.open:
                lastOpen = brackets.open;
                ok = false;
                countBrackets += 1;
                break;
            case brackets.close:
                if (countParents > 0 && countBrackets === 0) {
                    ok = false;
                    return ok;};
                if (countBraces > 0 && countBrackets === 0) {
                    ok = false;
                    return ok;};
                if (lastOpen != "" ) {
                    ok = false;
                    return ok;};
                ok = true;
                lastOpen = "";
                countBrackets -= 1;
                break;
        }
    }
    if ( countParents != 0 || countBraces != 0 || countBrackets != 0 ) { ok = false };
    return ok;
}
var str = "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!";
console.log(bracesValid(str));

//===isPalindrome ======================//
function isPalindrome(str) {
    var med = Math.floor(str.length / 2);
    for (var i = 0; i<med; i++) {
      if (str[i] != str[str.length - 1 - i]){
        return false;
      }
    }
      return true;
}
var str = isPalindrome('Able was I ere I saw elbA');
console.log(str);
//===longestPalindrome ======================//
