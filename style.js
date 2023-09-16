document.getElementById("btn").addEventListener("click", function () {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let operator = document.getElementById("selectop").value;
  let result = document.querySelector(".results");


  switch (operator) {
    case "plus":
      result.innerHTML = Number(num1) +Number(num2);
      break;
      case "minus":
        result.innerHTML=Number(num1) -Number(num2);
        break;
        case "multiplication":
        result.innerHTML=Number(num1) *Number(num2);
        break;
        case "division":
            result.innerHTML=Number(num1)/Number(num2);
            break;
            case "modul":
            result.innerHTML=Number(num1)%Number(num2);
            break;
            
  }
 
  
})



