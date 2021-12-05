function result(data){
  //document.getElementsByClassName("item1").value+=data;
  document.querySelector(".item1").value+=data;
  console.log('a');
}
function ans(){
    let x=document.querySelector(".item1").value;
    let y=eval(x);
    document.querySelector(".item1").value=y;
}
function cleas(){
    document.querySelector(".item1").value=" ";
}
function gayab(){
    let s = document.querySelector(".item1").value;
    let b=s.slice(0,-1);
    document.querySelector(".item1").value=b;
}