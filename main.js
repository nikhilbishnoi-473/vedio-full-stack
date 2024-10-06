var maint = document.getElementById("main").innerHTML;
console.log(maint);
document.getElementById("para").innerHTML =
  "<h1>Lorem ipsum dolor sit amet.</h1>";
let paraaa = document.getElementsByClassName("paraa")[0].innerHTML;
console.log(paraaa);
let x = 3;
let y = 5;
let z = x + y;
document.getElementsByClassName("operators_arithmetic")[0].innerHTML = z;

let aaa = 3;
let bbb = 7;
let ccc;
ccc = aaa > bbb ? "true" : "false";
// let ccc = aaa <= bbb;
document.getElementById("logical").innerHTML = ccc;

function greet() {
  var name = document.getElementById("name").value;
  var string = "hello" + " " + name;
  document.getElementsByClassName("greet")[0].innerHTML = string;
}
