function validate(){
    var name=document.getElementById('name').value
    var ncheck= /^[A-z\.]+$/;
    var nresult=ncheck.test(name);
    if(!nresult){
        document.getElementById('name1').innerHTML="Invalid name";
        alert("Name should not contain numbers or special characters except dot and should not be empty.")
    
    }
    if(nresult)
    {
        document.getElementById('name1').innerHTML="";
    }
    var mail=document.getElementById('mail').value;
    var mcheck= /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    var mresult=mcheck.test(mail);
    document.getElementById('mail1').innerhtml
    if(!mresult){
        document.getElementById('mail1').innerHTML="Invalid E-mail";
        alert("Email should start with small letters or numbers followed by @ followed by small letters followed by dot followed by 2 or 3 small letters and should not be empty.")
    }
    if(mresult)
    {
        document.getElementById('mail1').innerHTML="";
    }
    
    var num=document.getElementById('number').value;
    var numcheck= /^\d{10}$/;
    var numresult=numcheck.test(num);
    if(!numresult){
        document.getElementById('number1').innerHTML="Invalid phone number";
        alert("Phone number should be ten digits and not empty.")
    }
    if(numresult)
    {
        document.getElementById('number1').innerHTML="";
    }

    var pw=document.getElementById('pw').value;
    var pwcheck= /^[A-z0-9]{10,12}$/;
    var pwresult=pwcheck.test(pw);
    if(!pwresult){
        document.getElementById('pw1').innerHTML="Invalid password";
        alert("password should contain 10 to 12 characters or numbers and not empty.")
    }
    if(pwresult)
    {
        document.getElementById('pw1').innerHTML="";
    }
    
   
    var sel = parseInt(document. getElementById('sel'). selectedOptions[0]. value);
    if(sel==0){
        document.getElementById('sel1').innerHTML="State not selected";
    
    }
    else
    {
        document.getElementById('sel1').innerHTML="";
    }
    var rad=document.querySelector('input[name="r"]:checked');
    if(rad==null){
        document.getElementById('radio1').innerHTML="Gender not selected";
    
    }
    else
    {
        document.getElementById('radio1').innerHTML="";
    }
    
    var check1=document.getElementById("c1").checked ;
    var check2=document.getElementById("c2").checked ;
    var check3=document.getElementById("c3").checked ;
    document.getElementById('check1').innerHTML="Error";
    var user=document.getElementById('user').value;
    var usercheck= /^[a-z]{8,10}[_#@][0-9]+$/;
    var userresult=usercheck.test(user);
    if(!userresult){
        document.getElementById('user1').innerHTML="User name should contain 8 to 10 small letters followed by _ or # or @ followed by digits.";
        
    }
    if(userresult)
    {
        document.getElementById('user1').innerHTML="";
    }
    if(check1 || check2 || check3){
        document.getElementById('check1').innerHTML="";
    
    }
    else
    {
        document.getElementById('check1').innerHTML="Event not selected";
        
    }
    if(nresult && mresult && numresult  && rad!=null && (check1 || check2 || check3) && sel!=0 && pwresult && userresult){
        document.getElementById("form").submit();
    }
}

function focusa()
{

    document.getElementById("name").style.backgroundColor="skyblue";
}

function blura()
{
    document.getElementById("name").style.backgroundColor="grey";

}
function oi(){
    var user=document.getElementById('user').value;
    var usercheck= /^[a-z]{8,10}[_#@][0-9]+$/;
    var userresult=usercheck.test(user);
    if(!userresult){
        document.getElementById('user1').innerHTML="User name should contain 8 to 10 small letters followed by _ or # or @ followed by digits.";
        
    }
    if(userresult)
    {
        document.getElementById('user1').innerHTML="";
    }
    
}
