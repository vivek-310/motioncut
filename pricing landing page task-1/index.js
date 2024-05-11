document.getElementById("month").addEventListener("click", function () {
    document.getElementById("month").style.backgroundColor = "#3f4551";
    document.getElementById("year").style.backgroundColor = "inherit";
    document.getElementById("month").style.color = "white";
    document.getElementById("year").style.color = "black";
    document.getElementById("c1").innerHTML="$4.99/mon";
    document.getElementById("c2").innerHTML="$9.99/mon";
    document.getElementById("c3").innerHTML="$14.99/mon";
    document.getElementById("c4").innerHTML="$34.99/mon";
  });
  
  document.getElementById("year").addEventListener("click", function () {
    document.getElementById("month").style.backgroundColor = "inherit";
    document.getElementById("year").style.backgroundColor = "#3f4551";
    document.getElementById("year").style.color = "white";
    document.getElementById("month").style.color = "black";
    document.getElementById("c1").innerHTML="$49.99/year";
    document.getElementById("c2").innerHTML="$99.99/year";
    document.getElementById("c3").innerHTML="$149.99/year";
    document.getElementById("c4").innerHTML="$349.99/year";
  });
 