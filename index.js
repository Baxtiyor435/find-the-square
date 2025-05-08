alert("salom")
let a = prompt("sizmenga son kiriting men uni kvadratga ko'taraman")

if(a == null || a == "") {
    alert("siz son kiritmadingiz")
}
 else if(a==Number(a)){
    alert("siz kiritgan sonning kvadrati: " + a*a)
} else if(isNaN(a)){
    alert("siz kiritgan qiymat son emas")
}