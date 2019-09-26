// var rand = Math.round(Math.random()* 100);
// var x = document.getElementsByClassName("bone");
// var n = x;
// console.log(x);
function findNextBone(){
  if(document.getElementsByClassName("bone").length > 0){
  // Алгоритм функции:
  // * найти первый "div" с классом "bone" можно использовать querySelector() или getElementsByClassName()
  var bone = document.getElementsByClassName("bone")[0];
  console.log(bone);
  // * поменять класс данного элемента - в случае, если был найден, на "bone-found"
  bone.className = "bone-found";
 } else {
  // * внимание!!! в случае когда элемент не найден querySelector() возвращает null, 
  //а getElementsByClassName() возвращает коллекцию с 0 (ноль) элементов, свойство .length
  // * в случае, если костей для поиска не осталось, вывести сообщение "GAME OVER", 
  //который заменит все элементы DIV внутри «#yard», можете использовать свойство .innerHTML
  document.getElementById("yard").innerHTML = "";
  document.write("GAME OVER");
 }
}