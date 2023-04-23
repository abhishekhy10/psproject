function populate(slct1,slct2){
    var slct1=document.getElementById(slct1);
    var slct2=document.getElementById(slct2);
    slct2.innerHTML="";
   
    if(slct1.value=="101")
    {
        var optionArray = ['|','101H1|101H1','101H2|101H2','101H3|101H3','101B1|101B1','101B2|101B2'];
    }
    else if(slct1.value=="102"){
        var optionArray=['|','102H1|102H1','102H2|102H2','102H3|102H3','102B1|102B1','102B1|102B2','102G1|102G1','102G2|102G2'];
    }
    else if(slct1.value=="103"){
        var optionArray=['|','103H1|103H1','103H2|103H2','103H3|103H3','103B1|103B1','103B2|103B2','103G1|103G1','103G2|103G2'];
    }
    else if(slct1.value=="201"){
        var optionArray=['|','201H1|201H1','201H2|201H2','201H3|201H3','201B1|201B1','201B2|201B2'];
    }
    else if(slct1.value=="202"){
        var optionArray=['|','202H1|202H1','202H2|202H2','202H3|202H3','202B1|202B1','202B2|202B2'];
    }
    else if(slct1.value=="203"){
        var optionArray=['|','203H1|203H1','203H2|203H2','203H3|203H3','203B1|203B1','203B2|203B2'];
    }
    else if(slct1.value=="301"){
        var optionArray=['|','301H1|301H1','301H2|301H2','301H3|301H3','301B1|301B1','301B2|301B2'];
    }
    else if(slct1.value=="302"){
        var optionArray=['|','302H1|302H1','302H2|302H2','302H3|302H3','302B1|302B1','302B2|302B2'];
    }
    else if(slct1.value=="303"){
        var optionArray=['|','303H1|303H1','303H2|303H2','303H3|303H3','303B1|303B1','303B2|303B2'];
    }
    else if(slct1.value=="401"){
        var optionArray=['|','401H1|401H1','401H2|401H2','401H3|401H3','401B1|401B1','401B2|401B2'];
    }
    else if(slct1.value=="402"){
        var optionArray=['|','402H1|402H1','402H2|402H2','402H3|402H3','402B1|402B1','402B2|402B2'];
    }
    else if(slct1.value=="403"){
        var optionArray=['|','403H1|403H1','403H2|403H2','403H3|403H3','403B1|403B1','403B2|403B2'];
    }
    for(var option in optionArray){
        var pair=optionArray[option].split("|");
        var newoption=document.createElement("option");

        newoption.value=pair[0];
        newoption.innerHTML=pair[1];
        slct2.options.add(newoption);
    }
}

const form = document.querySelector("form"),
       nextBtn = form.querySelector(".nextBtn"),
       backBtn = form.querySelector(".backBtn"),
       allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
   allInput.forEach(input => {
       if(input.value != ""){
           form.classList.add('secActive');
       }else{
           form.classList.remove('secActive');
       }
   })
})
// function submitForm() {
//     document.contact-form.submit();
//     document.contact-form.reset();
//     }


backBtn.addEventListener("click", () => form.classList.remove('secActive'));