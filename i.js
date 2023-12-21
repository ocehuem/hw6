

function display(value) {
    document.getElementById("ans").value += value;
}
 
function calculate() {
    var p = document.getElementById("ans").value;
    var q = eval(p);
    document.getElementById("ans").value = q;
}


 
 function clearit() {
    var inp = document.getElementById('ans');
    inp.value = '0';
 }
 function back() {
    var ev = document.getElementById('ans');
    ev.value = ev.value.slice(0,-1);
 }