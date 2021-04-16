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

    for (let i in ob) {   //1st iteration for 'newObj' and 2nd iteration for 'obj3'
        if (ob.hasOwnProperty(i) == null) {  //base case
            return {};             //return empty object if there is no property inside(if the current iteration element is not present in object)or null)
        }

        if ((typeof ob[i]) == 'object' && ob[i] !== null) { //if the element in the iteration is object and is not null.. then enter loop

            var flatObject = flattenObject(ob[i]);
            for (let x in flatObject) {
                // console.log("Current i:" + i);
                // console.log("Curent x:" + x+"\n");

                toReturn[i + '.' + x] = flatObject[x];   //after backtracking 1st time frm recursive call =>toReturn[obj5 . one]=1 ........ 2nd call toReturn[obj2 . obj5.one]=1 and so on
                // console.log(toReturn)
            }
        } else {                                      //if the element in the iteration is not a object(or is a normal property)) or null
            toReturn[i] = ob[i]; //returns { one: 1 }   and during 2nd iteration while ob is obj3 it returns { two: 2 }
        }
    }
    return toReturn;
}

let x = { // this is the object u passin to the function rytyes
    // kewlyes
    newObj: { // this x object has two items 1. newObj
        obj2: { // new obj has obj2 inside it yes
            obj5: { // ob
                one: 1
            },
        },
    },
    obj3: { // 2. obj3 yesh
        obj4: { two: 2 },
    },
};
console.log(flattenObject(x));