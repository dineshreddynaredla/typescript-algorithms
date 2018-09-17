let counter = 0;
let dcounter = 0;

function fibRecusive(n) {
    counter++;  
    if (n === 0 || n === 1) {
        return n;
    } else {        
        return fibRecusive(n - 1) + fibRecusive(n - 2);
    }
}

let cache = new Map<number, number>();

function fibDyanamic(n) {        
    if (n === 0 || n === 1) {
        return n;
    } else {
        if (cache.has(n)) {            
            return cache.get(n);     
        } else {
            dcounter++;
            cache.set(n, fibDyanamic(n - 1) + fibDyanamic(n - 2));
            return cache.get(n);
        }
     }
}

let fibOf = 15;

console.log(`Fib of ${fibOf} fibRecusive:`, fibRecusive(fibOf));
console.log("Counter fibRecusive", counter);

console.log(`Fib of ${fibOf} fibDyanamic:`, fibDyanamic(fibOf));
console.log("Counter fibDyanamic", dcounter);