console.log("working");
let input_per=0.75;
function calremaining(held,attended){
    if(((attended/held)*100)>(input_per*100))
    {
        const need=((attended-(input_per*held))/input_per).toFixed(0);
        return(`<div class="claiculated-remaining caliculated-green">You can bunk more ${need} classes,to maintain ${input_per*100}%.</div>`);
    }
    else{
        const need=(((input_per-((attended/held)))*held)/(1-input_per)).toFixed(0);
        return(`<div class="claiculated-remaining caliculated-red">You need to attend ${need} class to get ${input_per*100}%.</div>`);
    }
       
}
function takeinput(){
    const held=document.querySelector('.held-input-number').value;
    document.querySelector('.held-input-number').value="";
    const attended=document.querySelector('.attended-input-number').value;
    document.querySelector('.attended-input-number').value="";
    let percent=(attended/held)*100;
    calremaining(held,attended);
    document.querySelector('.js-caliculated-div').innerHTML=`<div class="caliculated-percent-div">
            <div class="percent-text-div">Your Current Percentage: </div>
            <div class="percentage-div">${percent.toFixed(2)}%</div>
        </div>
        ${calremaining(held,attended)}`;
}
document.querySelector('.caliculate-button').addEventListener('click',()=>{
    takeinput();    
});

document.querySelector("body").addEventListener("keydown",(event)=>{
    if(event.key==="Enter" && document.querySelector('.attended-input-number').value && document.querySelector('.held-input-number').value){
        takeinput();
    }
})
const calci_buttons=document.querySelectorAll('.caliculator-button');
let array=[];
let entered="";
let Ans;
calci_buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.dataset.buttonId ==='+' || button.dataset.buttonId ==='-'||button.dataset.buttonId ==='*'||button.dataset.buttonId ==='**'||button.dataset.buttonId ==='/'){
            entered+=button.dataset.buttonId;
            document.querySelector('.result').innerHTML=entered;
        }
        else if(button.dataset.buttonId==='=')
        {
            Ans=eval(entered)
            document.querySelector('.result').innerHTML=Ans;
            entered="";
        }
        else if(button.dataset.buttonId==="AC")
        {
            document.querySelector('.result').innerHTML="0000";
            Ans=0;
            entered="";
        }
        else if(button.dataset.buttonId==="8882")
        {
            entered=entered.slice(0,-1);
            if(entered){
                document.querySelector('.result').innerHTML=entered;
            }
            else{
                document.querySelector('.result').innerHTML="0000";
            }
        }
        else if(button.dataset.buttonId==='Ans')
        {
            entered=""
            entered+=Ans;
            document.querySelector('.result').innerHTML=Ans;
        }
        else{
            entered +=button.dataset.buttonId;
            document.querySelector('.result').innerHTML=entered;
        }
    })
})
document.querySelector('.slider-input').addEventListener('input',()=>{
    let val=document.querySelector('.slider-input').value;  
    document.querySelector('.show-percentage').placeholder=`${val}%`
    input_per=val/100;
})
document.querySelector('.show-percentage').addEventListener('input',()=>{
    let per=document.querySelector('.show-percentage').value;
    document.querySelector('.slider-input').value=per;
    input_per=per/100;
})
let calbykey="";
let operators=['+','-','*','/']
document.querySelector('.result').addEventListener('click',()=>{
    document.querySelector('.result').innerHTML="|";
    document.querySelector('body').addEventListener('keydown',(event)=>{
        if(operators.includes(event.key) || !isNaN(event.key) || event.key==='.')
        {
            calbykey+=event.key;
            document.querySelector('.result').innerHTML=calbykey;
        }
        else if(event.key==='Enter')
        {
            document.querySelector('.result').innerHTML=eval(calbykey);
            calbykey="";
        }
        else if(event.key==='Backspace'){
            calbykey=calbykey.slice(0,-1);
            if(calbykey){
                document.querySelector('.result').innerHTML=calbykey;
            }
            else{
                document.querySelector('.result').innerHTML="|";
            } 
        }     
    })
})
document.querySelector('body').addEventListener('keydown',(event)=>{
    if(document.querySelector('.commenter-name').value &&  document.querySelector('.comment').value)
    {
        if(event.key==="Enter")
        {
                let name=document.querySelector('.commenter-name').value;
                document.querySelector('.commenter-name').value="";
                document.querySelector('.comment').value="";
                document.querySelector('.submit-button').innerHTML="Submitted"
                document.querySelector('.thank-you-div').innerHTML=`<div class="thank-you">Thank you,${name}</div>`
        }
    }
})