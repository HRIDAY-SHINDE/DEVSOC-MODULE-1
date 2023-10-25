const screen = document.getElementById("result");
function display(result){
    screen.value += result
    return result
}
function solve(){
    let x = screen.value
    let y = eval(x);
    screen.value = y
    return y
}
function clearScreen(){
    screen.value = ''
}
function back(){
    screen.value=screen.value.slice(0,-1)
}