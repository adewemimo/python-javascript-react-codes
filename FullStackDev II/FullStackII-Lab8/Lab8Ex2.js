// create a seperate arrays for keys and values
function getKeyValuePairs(object){
    var objectValue = [];
    var objectKey = [];
    for (const key in object){
      objectKey.push(key);
      objectValue.push(object[key]);
    }
    console.log([objectKey, objectValue]);
  
  }
  
  getKeyValuePairs({a:5, b:10, c:16});
  getKeyValuePairs({r: "React", a: "Angular", v: "Vue"});
  getKeyValuePairs({k1: true, k2: false , k3: undefined});