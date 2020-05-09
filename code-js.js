
function change(val,ini)
{   console.log(val.value)
    if(val.value==ini) {
        val.value="";
    }
    x=document.getElementsByClassName("inp_click")
    console.log(x)
    l = x.length;
    for (i = 0; i < l; i++) {
        ele=document.getElementById(x[i].id)
        console.log(ele.value)
        if(ele.value=='') {ele.value=x[i].id}
        ele.classList.remove("inp_click")
        remove_a(ele,"pulse")
        ele.classList.add('inp')
      }
    val.classList.remove("inp")
    val.classList.add('inp_click')
}
var flag=0
function check(t)
{
    p=document.getElementById("PASSPORT ID");
    var va=p.value;
    va=va.toLowerCase()
    if(va=="nil")
    {   
        clg=document.getElementById("COLLEGE")
        var v=clg.value
        v=v.toLowerCase()
        if(!((v=="amrita vishwa vidyapeetham")||(v=="amrita school of engineering")||(v=="college")||(v==""))){
            var element = document.getElementById("er");
            console.log(element)
            if(element==null)
            {
                cr=document.createElement("p")
                cr.classList.add("error")
                tex=document.createTextNode("Invalid Passport ID")
                cr.id="er"
                cr.appendChild(tex)
                console.log(cr)
                f=document.getElementById("form");
                f.appendChild(cr)
                flag=1
            }
        }
        else{
            var element = document.getElementById("er");
            if(element!=null)
            {   flag=0
                element.remove()
            }
        }
    }
}
function sub(kn)
{
    na=document.getElementById("NAME")
    college=document.getElementById("COLLEGE")
    pass=document.getElementById("PASSPORT ID")
    team=document.getElementById("Team Name")
    console.log(na.value)
    console.log(college.value)
    console.log(pass.value)
    console.log(team.value)
    if(((na.value!="NAME")&&(na.value!=""))&&((college.value!="COLLEGE")&&(college.value!=""))&&((pass.value!="PASSPORT ID")&&(pass.value!=""))&&((team.value!="Team Name")&&(team.value!=""))&&(flag==0))
    {   e=document.getElementsByClassName("head")[0].innerHTML;
        email(e,na.value,college.value,pass.value,team.value);
        window.alert("Registration Successful")
        cup('Anokhaw',kn,"1")
    }
    else
    {
        window.alert("Registration Unsuccessful")
    }
}

function add_a(v,cl)
{
    v.classList.add("animated");
    v.classList.add(cl);
    console.log(v.classList);
}
function remove_a(v,cl)
{
    v.classList.remove("animated");
    v.classList.remove(cl);
}
function playm(i)
{
    var audio = new Audio(i);
    audio.play();
}
function email(e,n,c,p,t)
{
    var template_params = {
        "event_name": e,
        "name": n,
        "clg": c,
        "pass": p,
        "team": t
     }
     console.log(JSON.stringify(template_params))
     var service_id = "default_service";
     var template_id = "event_reg";
     emailjs.send(service_id, template_id, template_params);
}
function cget(nsp,k,i,com){
    console.log("cget activated");
    var xhr = new XMLHttpRequest();
    u="https://api.countapi.xyz/"+com+"/"+nsp+"/"+k;
    xhr.open("GET", u);
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById(i).innerText = this.response.value;
        console.log("Done-cget"+i);
    }
    xhr.send();
}
function cup(nsp,k,amt){
    console.log("cup activated");
    var xhr = new XMLHttpRequest();
    u="https://api.countapi.xyz/"+"update"+"/"+nsp+"/"+k+"?amount="+amt;
    xhr.open("GET", u);
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log("Done-Update"+i);
    }
    xhr.send();
}
