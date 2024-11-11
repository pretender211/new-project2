var num = Number(prompt("Enter 1-st number"));
var num1 = Number(prompt("Enter 2-nd number"));
var num2 = Number(prompt("Enter 3-th number"));

if (num > num1 > num2 || num - num2) {
    alert("Ең кіші және ең үлкен саның айырмасы:" + console.log(num - num2));
  } else if (num2 > num1 > num || num2 - num) {
    alert("Ең кіші және ең үлкен саның айырмасы:" + console.log(num2 - num));
  } else if (num1 > num > num2 || num1 - num2) {
    alert("Ең кіші және ең үлкен саның айырмасы:" + console.log(num1 - num2));
  } else if (num2 > num > num1 || num2 - num1) {
    alert("Ең кіші және ең үлкен саның айырмасы:" + console.log(num2 - num1));
  } else if (num1 > num2 > num || num1 - num) {
    alert("Ең кіші және ең үлкен саның айырмасы:" +  console.log(num1 - num));
  } else if (num > num2 > num1 || num - num1) {
    alert("Ең кіші және ең үлкен саның айырмасы:" + console.log(num - num1));
  }
  