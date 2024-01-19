function submitQuiz(){
    let score = 0;


    if(document.querySelector("input[name='q1']:checked").value ==="d"){
        score++;
        

    }
    if(document.querySelector("input[name='q2']:checked").value ==="a"){
        score++;
        let resultdiv = document.querySelector("#res-prt");
        resultdiv.innerHTML = score;

    }
    if(document.querySelector("input[name='q3']:checked").value ==="c"){
        score++;
        let resultdiv = document.querySelector("#res-prt");
        resultdiv.innerHTML = score;

    }
    if(document.querySelector("input[name='q4']:checked").value ==="b"){
        score++;
        let resultdiv = document.querySelector("#res-prt");
        resultdiv.innerHTML = score;

    }
    if(document.querySelector("input[name='q5']:checked").value ==="d"){
        score++;
        let resultdiv = document.querySelector("#res-prt");
        resultdiv.innerHTML = score;

    }
    document.querySelector("h4")

}