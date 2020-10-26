/* eslint-disable indent */
// /* eslint-disable indent */

// // 1
// function countingSheep(num) {
//     if (num === 0) {
//         console.log('All sheep jumped over the fence');
//         return;
//     }

//     console.log(`${num}, Another sheep jumping over the fence`);

//     countingSheep(num - 1);
// }

// // countingSheep(5);

// // 2
// function powerCalculator(int, exp) {
//   if (exp < 0) return 'exponent should be >= 0';
//   if (exp === 0) return 1;

//   return int * powerCalculator(int, exp - 1);
// }

// console.log(powerCalculator(10, 2));
// console.log(powerCalculator(10, -2));

// 3
// function reverseString(str) {
//     if (str === '') {
//         return '';
//     }
//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString('hello'));

// 4 
// function nthTriangleNum(num) {
//     if (num === 1) {
//         return 1;
//     }

//     return num + nthTriangleNum(num - 1);
// }

// console.log(nthTriangleNum(9));

// 5
// function stringSplitter(str, div, arr=['']) {
//     if (str.length === 0) {
//         return arr;
//     }

//     if (str[0] === div) {
//         arr.push('');
//     } else {
//         arr[arr.length - 1] += str[0];
//     }

//     return stringSplitter(str.slice(1), div, arr);

// }

// console.log(stringSplitter('02/20/2020', '/'));

// 6
// function fibNumN(num, result = []) {
//     if (num === 1) {
//         return [0 , 1];
//     }  else {
//         result = fibNumN(num - 1);
//         result.push(
//             result[num - 1] + result[num - 2]
//         );
//         if (result.length === num + 1) return results.slice(1);
//         return result;
//     }
// }

function printSequence(numb) {
    for (let i = 1; i <= numb; i++) {
        console.log(fibNumN(i));
    }
}

// console.log(fibNumN(7));

// 7
// function factorial(i) {
//     if (i === 1) {
//         return 1;
//     }
//     return i * factorial(i - 1);
// }

// console.log(factorial(5));

// 8 ----------
async function findWayOut(array, priority, vert = 0, horiz = 0, path = '') {
    if (array[vert][horiz] === 'e') {
        return `Path to end: ${path}`;
    }


    let up, left;
    if (vert > 0 && horiz > 0) {
        left = array[vert][horiz - 1];
        up = array[vert - 1][horiz];
    }

    // right prio, then down
    if (priority === 0) {
        const right = array[vert][horiz + 1];
        if (right && right !== '*') {
            array[vert][horiz] = '*';
            horiz += 1;
            path += 'R';
            return findWayOut(array, priority, vert, horiz, path);
        }
        const down = array[vert + 1][horiz];
        if (down && down !== '*') {
            array[vert][horiz] = '*';
            vert += 1;
            path += 'D';
            return findWayOut(array, priority, vert, horiz, path);
        }
        if (left && left !== '*') {
            array[vert][horiz] = '*';
            horiz -= 1;
            path += 'L';
            return findWayOut(array, priority, vert, horiz, path);
        }
        if (up && up !== '*') {
            array[vert][horiz] = '*';
            vert -= 1;
            path += 'U';
            return findWayOut(array, priority, vert, horiz, path);
        }
    }

    // left prio, then down then right,
    if (priority === 1) {
        if (left && left !== '*') {
            array[vert][horiz] = '*';
            horiz -= 1;
            path += 'L';
            return findWayOut(array, priority, vert, horiz, path);
        }
        const right = array[vert][horiz + 1];
        if (right && right !== '*') {
            array[vert][horiz] = '*';
            horiz += 1;
            path += 'R';
            return findWayOut(array, priority, vert, horiz, path);
        }
        const down = array[vert + 1][horiz];
        if (down && down !== '*') {
            array[vert][horiz] = '*';
            vert += 1;
            path += 'D';
            return findWayOut(array, priority, vert, horiz, path);
        }
        if (up && up !== '*') {
            array[vert][horiz] = '*';
            vert -= 1;
            path += 'U';
            return findWayOut(array, priority, vert, horiz, path);
        }
    }

    // up priority, then right, down
    if (priority === 2) {
        if (up && up !== '*') {
            array[vert][horiz] = '*';
            vert -= 1;
            path += 'U';
            return findWayOut(array, priority, vert, horiz, path);
        }
        const right = array[vert][horiz + 1];
        if (right && right !== '*') {
            array[vert][horiz] = '*';
            horiz += 1;
            path += 'R';
            return findWayOut(array, priority, vert, horiz, path);
        }
        const down = array[vert + 1][horiz];
        if (down && down !== '*') {
            array[vert][horiz] = '*';
            vert += 1;
            path += 'D';
            return findWayOut(array, priority, vert, horiz, path);
        }
        if (left && left !== '*') {
            array[vert][horiz] = '*';
            horiz -= 1;
            path += 'L';
            return findWayOut(array, priority, vert, horiz, path);
        }
    }
}

async function mazeHelper(maze, count) {
    if (count > 2) {
        return 'on gawd this is ';
    }
    const priorities = [ 0, 1, 2 ];
    const prioIdx = priorities[count];
    // findwayout(maze, count + 1);
}


let mySmallerMaze = [
    [' ', '*', ' '],
    [' ', ' ', 'e'],
];
let mySmallMaze = [
    [' ', '*', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
let upMaze = [
    [' ', ' ', ' ', ' ', '*', ' ', ' '],
    ['*', '*', '*', ' ', ' ', '*', ' '],
    [' ', ' ', ' ', '*', ' ', '*', ' '],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', '*', '*', '*', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
// console.log(mazeHelper(maze, 0));

// 10
function allAnagrams(str) {
    const anagrams = [];
    anagramHelper(str, current = '', anagrams);
    return anagrams;
}

        // on new iteration, check to see if newStr has no length, && current has length
        // if so, push it into anagrams
        // iterate through str
            // current num is removed and acted as our base
            // current starts as '', so concat makes 'a'
            // recursively call anagramhelper with newstr, our current anagram
function anagramHelper(str, current, anagrams) {
    if (!str.length && current.length) {
        anagrams.push(current);
    } else {
        for (let i = 0; i < str.length; i++) {
            // base letter, slice and concat
            const newStr = str.slice(0, i).concat(str.slice(i+1));
            const newAna = current.concat(str[i]);
            anagramHelper(newStr, newAna, anagrams);
        }
    }
}

console.log(allAnagrams('east'));
