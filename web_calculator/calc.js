
let ob = {}
function calculate() {
    let sad = document.getElementById("screen")
    let t = sad.value
    let newobj = Object.assign({}, ob, { t })
    sad.value = eval(sad.value)
    let val = sad.value
    ob[t] = Number.parseFloat(val)

}
function display(val) {
    let sad = document.getElementById("screen")
    sad.value += val
}
function delete_it() {
    let sad = document.getElementById("screen")
    let val = sad.value
    val = val.substring(0, val.length - 1)
    sad.value = val
}
function clr() {
    let sad = document.getElementById("screen");
    sad.value = "";
}
// console.log(history)
function history() {
    let his = document.getElementById("histories")

        for (let a in ob) {
            his.innerHTML += a + "=" + ob[a]+"<br>"
        }
}
function cles(){
    let his=document.getElementById("histories")
    his.innerHTML=""
}
console.log(ob)