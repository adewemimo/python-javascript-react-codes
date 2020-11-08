const makeUpperCase = arr => {
    const promise = new Promise((resolve, reject) => {
        for (let i in arr) {
            if (typeof arr[i] !== "string") {
                reject("Error: Not all items in the array are strings!");
            }
        }
        resolve(upperCaseArray = arr.map(item => item.toUpperCase()));    
    });
    return promise;
};
  
const sortWords = arr => {
    const promise = new Promise((resolve,reject) => {
        for (let i in arr) {
            if (typeof arr[i] !== "string") {
                reject("Error: Not all items in the array are strings!");
            }
        }
        resolve(arr.sort());
    });
    return promise;    
}
  
  
const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];
  
makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error)) 
  
makeUpperCase(mixedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error)) 
  
  
