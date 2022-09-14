const greet = (greeting, name) => {
    console.log(greeting + ", " + name);
}
greet("Howdy", "Luis"); // Howdy, Luis


const nestedGreet = (greeting) => {
    return (name) => {
        console.log(greeting + ", " + name);
    }
}
const greeting = nestedGreet("Hello");
greeting("Luis"); // Hello, Luis

nestedGreet("Hello")("Luis"); // Hello, Luis