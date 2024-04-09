var n1 = +prompt('1-sonni kiriting')
var n2 = +prompt('2-sonni kiriting')
var n3 = +prompt('3-sonni kiriting')
if (n1>n2&&n1<n3) {
    alert('sizni orta qiymatingiz ' + n1)
}
else if (n2 > n1 && n2 < n3) {
    alert('sizni orta qiymatingiz ' + n2)
}
else if (n3 < n2 && n3 > n1) {
    alert('sizni orta qiymatingiz ' + n3)
}