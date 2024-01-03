function calcularAmor(){

    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if(name1 === '' || name2 === ''){
        alert('Por favor, ingresa los dos nombres');
    }else{
        const lovePercent = Math.floor(Math.random() * 100);

        const result = document.getElementById('resultado');

        result.innerHTML = `<h3>${name1} y ${name2} se aman un ${lovePercent}%</h3>`;

        if(lovePercent > 80){
            result.innerHTML += `<p>¡Excelente pareja!</p>`;
        } else if(lovePercent > 60){
            result.innerHTML += `<p>¡Buena pareja!</p>`;
        } else if(lovePercent > 40){
            result.innerHTML += `<p>¡Pareja normal!</p>`;
        } else if(lovePercent > 20){
            result.innerHTML += `<p>¡Pareja mala!</p>`;
        } else {
            result.innerHTML += `<p>¡Pareja horrible!</p>`;
        }

    }


}