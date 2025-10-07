document.getElementById('calculate').addEventListener('click', function() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tip_percent = parseFloat(document.getElementById('tip').value);

    const tip_amount = (bill * tip_percent)/100;
    const total = bill + tip_amount;

    if (isNaN(bill) || isNaN(tip_percent)) {
        alert('Please enter valid numbers');
        return;
    }

    document.getElementById('result').value = total;
})

/*document.getElementById('bill').value and document.getElementById('tip').value return strings, not numbers.

so we, used parseFloat

Also innerHTML doesnot affect the input field for that we need .value
*/
