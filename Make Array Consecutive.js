/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example ==
For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
*/

const statues = [6, 2, 3, 8];

function solution(statues) {
    statues.sort(function(a,b){
       return (a-b)}) // [2, 3, 6, 8]  statues array is sorted 

       return (statues[statues.length - 1] - statues[0])- statues.length + 1;  // (8-2) = 6 - 4 + 1 = 3   statues[statues.length - 1] = 8, statues[0] = 2, statues.length = 4
    }

   console.log(solution(statues)); // 3