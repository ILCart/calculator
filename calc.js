let testString = `15 - 20 + 2 * 30 ^ 2 / 25 + 5 - 16`;
let arithmetic = {
    
    "^": (n1, n2) => {
        return n1 ** n2
    },
    "*": (n1, n2) => {
        return n1 * n2
    },
    "/": (n1, n2) => {
        return n1 / n2
    },
    "+": (n1, n2) => {
        return n1 + n2
    },
    "-": (n1, n2) => {
        return n1 - n2
    },
   
}


for(const [operator, run] of Object.entries(arithmetic)){
    let match = testString.matchAll(/[+\-*\/\^]/g);
    for(let x of match){
        if(operator === x[0]){
            console.log(x[0],operator, testString.replace(/\D/g,""));
        }
    }
    
   

}
