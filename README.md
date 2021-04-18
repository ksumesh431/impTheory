# Question:
You are given an object. Write a function to flatten it, where the term flatten is defined as to get all the keys of nested objects and bring them to same level.

* Sample Input:
{
    newObj: {
        obj2: {
            obj5: {
                one: 1
            }
        }
    }
    obj3: {
        obj4: {
            two: 2
        }
    }
};

* Sample Output:
{ 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }
