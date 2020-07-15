function full() {
  console.log("ran");
  if(! document.getElementById("fname").value || ! document.getElementById("lname").value || ! document.getElementById("wcaid").value || ! document.getElementById("email").value){
    document.getElementById("alltimes").style.visibility = "visible"
    document.getElementById("submit").disabled = true;
    document.getElementById("alltimes").innerHTML = "Please fill all fields";
    console.log("false");
    return(false);
  }
  else{
    open(false);
    return(true);
  }

}

function open(some)
{
  if(some){
    if(!(! document.getElementById("fname").value || ! document.getElementById("lname").value || ! document.getElementById("wcaid").value || ! document.getElementById("email").value)){
      document.getElementById("submit").disabled = false;
      document.getElementById("alltimes").style.visibility = "hidden"
      console.log("true");
    }
  }else{
    var re = /^([0-9]{1,2}:)?[0-9]{1,2}.[0-9]{2}$/
    console.log(re.test(document.getElementById("time1").value))
    if(re.test(document.getElementById("time1").value) && re.test(document.getElementById("time2").value) && re.test(document.getElementById("time3").value) && re.test(document.getElementById("time4").value) && re.test(document.getElementById("time5").value)){
      document.getElementById("submit").disabled = false;
      document.getElementById("alltimes").style.visibility = "hidden"
      console.log("true");
    }
  }
}

function check(eid) {
  var time = document.getElementById(eid).value
  var re = /^([0-9]{1,2}:)?[0-9]{1,2}.[0-9]{2}$/
  if(re.test(time)) {
    document.getElementById(eid + "i").style.visibility = "hidden";
    console.log("hidden")
  }
  else{
    document.getElementById(eid + "i").style.visibility = "visible";
    console.log("visible")
  }

  if(re.test(document.getElementById("time1").value) && re.test(document.getElementById("time2").value) && re.test(document.getElementById("time3").value) && re.test(document.getElementById("time4").value) && re.test(document.getElementById("time5").value)){
    open(true);
  }
  else{

      console.log("disabled");
      var ele = "Some of your times are formatted incorrectly ( "
      var first = true
      var i;
      for (i = 1; i <= 5; i++) {
        if(!re.test(document.getElementById("time".concat(i.toString())).value)){
          if(first){
            ele = ele.concat(i.toString());
            first = false;
          }
          else{
            ele = ele.concat(", " + i.toString());
          }
        }
      }
      document.getElementById("alltimes").innerHTML = ele.concat(" )");
      document.getElementById("alltimes").style.visibility = "visible"
      document.getElementById("submit").disabled = true;
  }
}
