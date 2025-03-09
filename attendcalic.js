let attendclass;
let heldclass;

function print1(){
    if(key==="Enter")
    {
        attendclass=document.querySelector(".attend-input1").value;
        document.querySelector(".attend-input1").value="";
        print2();
    }
    
}
function print2(){
    if(key==="Enter")
    {
        heldclass=document.querySelector(".attend-input2").value;
        document.querySelector(".attend-input2").value="";
    }
   
}
console.log(attendclass);
console.log(heldclass);
if(attendclass & heldclass){
    document.querySelector(".js-percentage").innerHTML=`
    <p>Your Current attendence percentage is ${(attendclass/heldclass)*100}`;
}
