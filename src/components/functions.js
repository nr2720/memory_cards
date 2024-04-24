export function randomArray(arr){
    const arrLength = arr.length;
    let returnedArr = [];
    for(let i = 0; i < arrLength; i++) {
        let isAvailable = false;
        while(!isAvailable) {
            let canPass = true;
            let randomNumber = Math.floor(Math.random() * arrLength);
            for(let n = 0; n < returnedArr.length; n++) {
                if(returnedArr[n] === randomNumber) {
                    canPass = false;
                }
            }
            if (canPass) {
                returnedArr.push(randomNumber);
                isAvailable = true;
            }
        
        }
    }
    return returnedArr;
}


export function checkIfMoreThanOne(arr) {
    return arr.some(pokemon => pokemon.counter > 1);
}


















