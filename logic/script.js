
  function startTest() {

    let score = 0;

    let sleep = Number(prompt("How many hours do you sleep per day?"));
    if (sleep >= 4) {
        score++;
    }

  
    let music = prompt("Do you enjoy music? (yes / no)").toLowerCase();
    if (music === "yes") {
        score++;
    }


    let tired = prompt("Do you get tired? (yes / no)").toLowerCase();
    if (tired === "yes") {
        score++;
    }


    let math = Number(prompt("What is 8 + -4?"));
    if (math === 4) {
        score++;
    }

    let resultMessage = "";

    if (score >= 3) {
        resultMessage = "You are definitely human!";
        resultMessage = green
    } 
    else if (score >= 1) {
        resultMessage = "Half human, half robot!";
    } 
    else {
        resultMessage = "Robot detected!";
    }

    document.getElementById("result").innerText = resultMessage;
}
