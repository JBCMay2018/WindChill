function calcWindChill()
{

    //The formula:  w = 35.74 + 0.6215*t + (0.4275*t - 35.75)  *  v ^ 0.16;

    var t = document.getElementById("temp").value;
    var v = document.getElementById("speed").value;


    var windChill =  35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);

    /*  if(theTemp=="" || windSpeed=="")
      {
          //Show dismissable alert
          alert("Undefined temperature or img speed. Please enter the missing value to continue");
      }*/

    document.getElementById("windchill").innerHTML=windChill.toFixed(2);
}

function clearMe(theObject)
{
    theObject.value="";
}

function fillMe(theObject)
{

    if(theObject.value=="")
        theObject.value=0;

    var celsiusTemp = document.getElementById("celsiustemp").value;
    var fahrenheitTemp = celsiusTemp * 1.8 + 32;
    document.getElementById("temp").value = fahrenheitTemp;

}