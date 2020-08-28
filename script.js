const problem = () => {
    var explain = "Sine, Cosine, and Tangent are the names given to three formulas that can be used to solve a right triangle. Remember to 'solve' a triangle means to calculate all three side lengths and all three angle degrees. The Pythagorean Theorem and the Triangle Sum formulas are effective for these types of triangles as well."  
    return explain;
};
const info = () => {
    document.getElementById("demo1").innerHTML = problem();
};

const problem2 = () => {
    return " ";
};
const info2 = () => {
    document.getElementById("demo1").innerHTML= problem2();
};

const myProblem = () => {
    var adj = document.getElementById("myAdj").value;
    var opp = document.getElementById("myOpp").value;
    var hyp = document.getElementById("myHyp").value;
    var angle = document.getElementById("myAngle").value;
    var angle2 = angle * Math.pi / 180;
    
    if (opp > 0 && angle > 0) {
        var calc1 = opp / Math.sin(angle2);
        var calc2 = calc1.toFixed(2);
            return "hyp = " + calc2;
    } else 
    if (adj > 0 && angle > 0) {
        var angle2 = angle * Math.pi / 180;
        var calc1 = adj / Math.sin(angle2);
        var calc2 = calc1.toFixes(2);
            return "hyp = " + calc2;
    } else
    if (hyp > 0 && angle > 0) {
        var angle2 = angle * Math.pi / 180;
        var calc1 = Math.sin(angle2) * hyp;
        var calc2 = calc1.toFixed (2);
            return "opp = " + calc2;
    } else 
        return "Re-enter values";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};