function calculadora(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let people =   document.getElementById('people').value;

    if(bill == '' | serviceQuality == 0){
        alert('Favor, inserir um valor')
        return;
    }

        if(people == "" | people <= 1){
            people == 1;
            document.getElementById('each').style.display = 'none'
        }else {
            document.getElementById('each').style.display = 'block'  
    }

    let total = (bill * serviceQuality) /people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}
   document.getElementById('totalTip').style.display = 'none'; 
   document.getElementById('each').style.display = 'none';

     document.getElementById('bill').addEventListener('submit', calculadora)
  