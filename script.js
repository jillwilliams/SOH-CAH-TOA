const problem = () => {
    var explain = "Sine, Cosine, and Tangent are the names given to three formulas that can be used to solve a right triangle. Remember to 'solve' a triangle means to calculate all three side lengths and all three angle degrees. The Pythagorean Theorem and the Triangle Sum formulas are effective for these types of triangles as well."  
    return explain;
};
const info = () => {
    document.getElementById("demo").innerHTML = problem();
}

const problem2 = () => {
    var explain = " ";
    return explain;
};
const info2 = () => {
    document.getElementById("demo").innerHTML= problem2();
}

// 'const myProblem = () => {
//     var adj = document.getElementById("adj1").value;
//     var opp = document.getElementById("opp1").value;
//     var hyp = document.getElementById("hyp1").value;
//     var angle = document.getElementById("angle1").value;

//     if (opp != 0 && angle != 0) {
//         var answ = angle * Math.pi / 180;
//         var answ2 = Math.sin(answ);
//         var answ3 = opp / answ2;
//         return "hyp = " + answ3;
//     } else 
//     if (adj != 0 && angle != 0) {
//         var answ = angle * Math.pi / 180;
//         var answ2 = Math.cos(answ);
//         var answ3 = adj / answ2
//         return "hyp = " + answ3;
//     } else 
//     if (hyp != 0 && angle != 0) {
//         var answ = angle * Math.pi / 180;
//         var answ2 = Math.sin(answ);
//         var answ3 = hyp * answ2;
//         return "opp = " + answ3;
//     } else 
//         return "Re-enter Values";
// };
// const myCalc = () => {
//     document.getElementById("demo1").innerHTML = myProblem();
// }'