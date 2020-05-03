function change(val,ini)
{ 
    if(val.value==ini) {
        val.value="";
    }
    x=document.getElementsByClassName("inp_click")
    console.log(x)
    l = x.length;
    for (i = 0; i < l; i++) {
        ele=document.getElementById(x[i].id)
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
function sub()
{
    name=document.getElementById("NAME")
    college=document.getElementById("COLLEGE")
    pass=document.getElementById("PASSPORT ID")
    team=document.getElementById("Team Name")
    if(((name.value!="NAME")&&(name.value!=""))&&((college.value!="COLLEGE")&&(college.value!=""))&&((pass.value!="PASSPORT ID")&&(pass.value!=""))&&((team.value!="Team Name")&&(team.value!=""))&&(flag==0))
    {
        window.alert("Registration Successful")
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