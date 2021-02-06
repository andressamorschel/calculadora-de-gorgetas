function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

}
document.getElementById('totalTip').style.display = 'nome';
document.getElementById('each').style.display = 'nome';

document.getElementById('tipsForm').addEventListener('submit', calculateTip)

