function disableOnLoad() {
    disableInput();
  }

function clearInputs() {
    document.getElementById("voltage").value = "";
    document.getElementById("current").value = "";
    document.getElementById("resistance").value = "";
  }

function disableInput() {
    clearInputs();
    var selector = document.getElementById("selector");
    var selectedValue = selector.options[selector.selectedIndex].value;
    document.getElementById("voltage").readOnly = selectedValue === "voltage";
    document.getElementById("current").readOnly = selectedValue === "current";
    document.getElementById("resistance").readOnly = selectedValue === "resistance";
    if (selectedValue === "") {
        document.getElementById("voltage").disabled = true;
        document.getElementById("current").disabled = true;
        document.getElementById("resistance").disabled = true;
        document.getElementById("button").disabled = true;
    } else {
        document.getElementById("voltage").disabled = false;
        document.getElementById("current").disabled = false;
        document.getElementById("resistance").disabled = false;
        document.getElementById("button").disabled = false;
      }
  }
  
  function calculate(){
    var voltage = document.getElementById("voltage").value;
    var current = document.getElementById("current").value;
    var resistance = document.getElementById("resistance").value;
    if(selector.value === "voltage"){
        if(current === "" || resistance === ""){
            //document.getElementById("result").innerHTML = "โปรดใส่ค่ากระแสไฟฟ้า และ ความต้านทาน !!!";
            alert("โปรดใส่ค่ากระแสไฟฟ้า และ ความต้านทาน !!!")
        }else{
            var voltage = (current * resistance).toFixed(2);
            document.getElementById("voltage").value = voltage;
            document.getElementById("result").innerHTML = "ค่าที่ได้ :" + " แรงดันไฟฟ้า = " + voltage + " Volt";
        }
    }else if(selector.value === "current"){
        if(voltage === "" || resistance === ""){
            //document.getElementById("result").innerHTML = "โปรดใส่ค่าแรงดันไฟฟ้า และ ความต้านทาน !!!";
            alert("โปรดใส่ค่าแรงดันไฟฟ้า และ ความต้านทาน !!!")
        }else{
            var current = (voltage/resistance).toFixed(2);
            document.getElementById("current").value = current;
            document.getElementById("result").innerHTML = "ค่าที่ได้ :" + " กระแสไฟฟ้า = " + current + " Amp";
        }
    }else{
        if(voltage === "" || current === ""){
            //document.getElementById("result").innerHTML = "โปรดใส่ค่าแรงดันไฟฟ้า และ กระแสไฟฟ้า !!!";
            alert("โปรดใส่ค่าแรงดันไฟฟ้า และ กระแสไฟฟ้า !!!")
        }else{
            var resistance = (voltage/current).toFixed(2);
            document.getElementById("resistance").value = resistance;
            document.getElementById("result").innerHTML = "ค่าที่ได้ :" + " ความต้านทาน = " + resistance + " Ohm";
        }
    }
}