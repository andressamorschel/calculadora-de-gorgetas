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
    var valorFormatado = total.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})



    document.getElementById('tip').innerHTML = valorFormatado;
    document.getElementById('totalTip').style.display = "block";
}
   document.getElementById('totalTip').style.display = 'none'; 
   document.getElementById('each').style.display = 'none';

     document.getElementById('tipsForm').addEventListener('submit', calculadora)
  
