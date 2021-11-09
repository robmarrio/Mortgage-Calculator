function calculate() {      

    var quantity =  parseFloat(document.getElementById("quantity").value);
    var months =  parseFloat(document.getElementById("months").value);
    var interest =  parseFloat(document.getElementById("interest").value);

    const i_men = (interest/100)/12;
    let part_exp = (1+i_men);
    part_exp = Math.pow(part_exp,-months);
    var result = quantity / ((1-part_exp)/i_men);

    alert("The monthly payment is: " + result)
}