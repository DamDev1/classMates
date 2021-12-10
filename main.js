const btn = document.querySelector(".btn");
const inputName = document.getElementById("inputName").value

btn.addEventListener("click",function(){
    const inputName = document.getElementById("inputName").value;

    if(inputName.includes("Ataga")){
        document.getElementById("one").style.display = "block";

        document.querySelector(".name").textContent = " Ataga Mavelous";

        document.querySelector(".age").textContent = " 15";

        document.querySelector(".sex").textContent = " Male";

        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("six").style.display = "none";
        document.getElementById("dami").style.display = "none";
    }
    
    if(inputName.includes("Chiamaka")){
        document.getElementById("two").style.display = "block";
        document.querySelector(".name").textContent = " Chiamaka or Chibaby";

        document.querySelector(".age").textContent = " 15";
        document.querySelector(".sex").textContent = " Female";

        document.getElementById("one").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("six").style.display = "none";
        document.getElementById("dami").style.display = "none";
    }

    if(inputName.includes("Fatimah")){
        document.getElementById("three").style.display = "block";
        document.querySelector(".name").textContent = " Fatimah Oladega";
        
        document.querySelector(".age").textContent = " 13";
        document.querySelector(".sex").textContent = " Female";

        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("six").style.display = "none";
        document.getElementById("dami").style.display = "none";
    }

    if(inputName.includes("Felix")){
        document.getElementById("four").style.display = "block";
        document.querySelector(".name").textContent = " Joshua Felix";
        
        document.querySelector(".age").textContent = " 14";
        document.querySelector(".sex").textContent = " Male";

        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("six").style.display = "none";
        document.getElementById("dami").style.display = "none";
    }

    if(inputName.includes("Ikpan")){
        document.getElementById("five").style.display = "block";
        document.querySelector(".name").textContent = " Ikpan Mavelous";
        
        document.querySelector(".age").textContent = " 16";
        document.querySelector(".sex").textContent = " Male";

        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("six").style.display = "none";
        document.getElementById("dami").style.display = "none";
    }

    if(inputName.includes("Janet")){
        document.getElementById("six").style.display = "block";
        document.querySelector(".name").textContent = " Bankoge Janet";
        
        document.querySelector(".age").textContent = " 14";
        document.querySelector(".sex").textContent = " Female";

        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "none";
        document.getElementById("dami").style.display = "none";
    }

})
