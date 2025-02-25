type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

function createCounter(init: number): Counter {
    let current = init;

    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => (current = init),
    };
}

/** Example usage **/
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
