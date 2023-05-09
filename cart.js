"use strict"

window.addEventListener("load", function() {
var checkout = document.forms.checkout;

calculate();

checkout.elements.shoe.onchange = calculate;
checkout.elements.insurance.onchange = calculate;
checkout.elements.shipping.onchange = calculate;

var shippingCalc = document.querySelectorAll('input[name="shipping"]');
for (var i = 0; i < shippingCalc.length; i++) {
    shippingCalc[i].onclick = calculate;
}
});

function calculate() {
    var checkout = document.forms.checkout;

    var shoeIndex = checkout.elements.shoe.selectedIndex;
    var shoeCost = checkout.elements.shoe.options[shoeIndex].value;
    var insuranceIndex = checkout.elements.insurance.selectedIndex;
    var insuranceCost = checkout.elements.insurance.options[insuranceIndex].value;

    var shippingCost = document.querySelector('input[name="shipping"]:checked').value

    var total = parseFloat(shoeCost) + parseFloat(insuranceCost) + parseFloat(shippingCost)
    checkout.elements.total.value = total
}