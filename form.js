
function validateBoothCode() {
    return true;
}

function validateForm() {
    const form = document.forms['candidateResults'];
    let total = parseInt(form['total'].value);
    let sum = 0;

    Array.from(form.elements).forEach((input) => {
        if (input.name == 'candidateresult') {
            let value = parseInt(input.value);
            if (value <= 0) {
                alert('All values must be filled out');
                return false;
            }
            sum += value;
        }
    })
    if (sum != total) {
        alert('Incorrect vote tally: ' + sum);
        return false;
    }
}