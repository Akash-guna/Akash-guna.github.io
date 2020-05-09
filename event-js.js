var cw;
var ma;
var tf;
function lar()
{   var arr=[];
    cge('Anokhaw','codewar','get');
    console.log(cw)
    arr[0]=cw;
    cge('Anokhaw','tfa','get');
    arr[1]=tf;
    cge('Anokhaw','mas','get');
    arr[2]=ma;
    console.log(cge('Anokhaw','codewar','get'));
    var pa=["c","t","m"];
    for(i=0;i<3;i++)
    {
        for(j=0;j<2;j++)
        {
            if(arr[j]<arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                var temp=pa[j];
                pa[j]=pa[j+1];
                pa[j+1]=temp;

            }
        }
    }
    if(pa[0]=="c"||pa[1]=="c")
    {
        ele=document.getElementById("c-p");
        a=ele.innerHTML;
        ele.innerHTML=ele.innerHTML+"<span class='h'> HOT </span>";
    }
    if(pa[0]=="t"||pa[1]=="t")
    {
        ele=document.getElementById("t-p");
        a=ele.innerHTML;
        ele.innerHTML=ele.innerHTML+"<span class='h'> HOT </span>";
    }
    if(pa[0]=="m"||pa[1]=="m")
    {
        ele=document.getElementById("m-p");
        a=ele.innerHTML;
        ele.innerHTML=ele.innerHTML+"<span class='h'> HOT </span>";
    }
    console.log(arr)
    console.log(pa)

    

}
function cge(nsp,k,com){
    console.log("cget activated");
    var xhr = new XMLHttpRequest();
    u="https://api.countapi.xyz/"+com+"/"+nsp+"/"+k;
    xhr.open("GET", u,false);
    
    xhr.onload = function() {
        console.log("Entered")
        if(k=="codewar"){
        cw=JSON.parse(this.response).value
        console.log(cw)
        } 
        if(k=="mas")
        {
            ma=JSON.parse(this.response).value
        }
        if(k=="tfa")
        {
            tf=JSON.parse(this.response).value
        }
        
    }
    xhr.send();
}

