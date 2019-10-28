// const problem = () => {
//     var explain = "Sine, Cosine, and Tangent are the names given to three formulas that can be used to solve a right triangle. Remember to 'solve' a triangle means to calculate all three side lengths and all three angle degrees. The Pythagorean Theorem and the Triangle Sum formulas are effective for these types of triangles as well."  
//     return explain;
// };
// const info = () => {
//     document.getElementById("demo").innerHTML = problem();
// }

// const problem2 = () => {
//     var explain = " ";
//     return explain;
// };
// const info2 = () => {
//     document.getElementById("demo").innerHTML= problem2();
// }
const trig = () => {
    var opp = document.getElementById("opp").value;
    var adj = document.getElementById("adj").value;
    var hyp = document.getElementById("hyp").value;
    var angle = document.getElementById("angle").value;
    if (opp != 0 && hyp != 0) {
        var sine = opp / hyp;
        var sine2 = Math.sin(sine);
        var sine3 = 180 * sine2 / Math.pi;
        return sine3;
    } else 
        if (opp != 0 && adj != 0) {
        var tangent = opp / adj;
        var tangent2 = Math.tan(tangent);
        var tangent3 = 180 * tangent2 / Math.pi;
        return tangent3;
    } else 
    if (hyp != 0 && adj != 0) {
        var cosine = adj / hyp;
        var cosine2 = Math.cos(cosine);
        var cosine3 = 180 * cosine2 / Math.pi;
        return cosine3;
    } else
        return "Re-enter Values";
};
const myCalc = () => {
    document.getElementById("demo1").innerhtml = trig();
}
