function calculateChange() {
	var amountOwed = document.getElementById("amountOwed").value;
	var amountGiven = document.getElementById("amountGiven").value;
	var changeDue = amountGiven - amountOwed;
	document.getElementById("changeDue").innerHTML = "€" + changeDue.toFixed(2);
}