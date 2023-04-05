const characters = 'nsrevruaeibreigigrfvneiargh044668464673';
const generateKey = (value, array) => {
    keyArray = array.split('');
    index = "";
    for (let i = 0; i < value; i++){
        item = Math.floor(Math.random() * keyArray.length);
        index = `${index}${keyArray[item]}`;
    };
    return index;
}

const key = generateKey(10, characters);
console.log(key);