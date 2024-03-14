function EnterPalindrome(){
    let input = document.getElementById("str").value;
    var reversed=input.split("").reverse().join("");
    
    if (input === reversed) {
        document.getElementById("result").innerHTML = "<p>" + input + " is a palindrome!</p>";
      } else {
        document.getElementById("result").innerHTML = "<p>" + input + " is not a palindrome.</p>";
      }
      
      var num = document.getElementById("numberInput").value;
     var numString = num.toString(); 
     var reversedString = numString.split('').reverse().join(''); 
      if (numString === reversedString) {
    document.getElementById("resultnum").innerHTML = num + " is a palindrome!";
  } else {
    document.getElementById("resultnum").innerHTML = num + " is not a palindrome.";
  }

}


