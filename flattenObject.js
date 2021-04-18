//question:
//You are given an object. Write a function to flatten it, where the term flatten is defined as to get all the keys of nested objects and bring them to same level.

//Sample Input:
// {
//     newObj: {
//         obj2: {
//             obj5: {
//                 one: 1
//             }
//         }
//     }
//     obj3: {
//         obj4: {
//             two: 2
//         }
//     }
// };

// Sample Output:
// { 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }

function flattenObject(ob) {
    let toReturn = {};

    for (let i in ob) {
        if ((typeof ob[i]) == 'object' && ob[i] !== null) {  // if key is object.. call function recursively
            var flatObject = flattenObject(ob[i]);  //rec call
            for (let x in flatObject) {
                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];   //if key not object... set key value pair in toReturn object
        }
    }
    return toReturn;
}


let x = {

    newObj: {
        obj2: {
            obj5: {
                one: 1
            },
        },
    },
    obj3: {
        obj4: { two: 2 },
    },
};
console.log(flattenObject(x));