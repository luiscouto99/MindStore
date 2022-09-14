const buildSandwhich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `#1 ${ingredient1}, ${ingredient2}, ${ingredient3}`
        }
    }
}
const mySandwhich = buildSandwhich("Bacon")("Lettuce")("Tomato");
console.log(mySandwhich)
const buildSandwhich2 = ingredient1 => ingredient2 => ingredient3 => `#2 ${ingredient1}, ${ingredient2}, ${ingredient3}`;
const mySandwhich2 = buildSandwhich2("Bacon")("Lettuce")("Tomato");
console.log(mySandwhich2)






const sandwhich = (basicIngredient) => {
    return (optionalIngredient) => {
        return `${basicIngredient} ${optionalIngredient}`
    }
}

const baconSandwhich = sandwhich("bacon");
console.log(baconSandwhich("lettuce"));

console.log(baconSandwhich("tomato"))

const veganSandwhich = sandwhich("facon");
console.log(veganSandwhich("lettuce"));






