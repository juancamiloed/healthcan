let tabla = document.getElementById("tablaSasha");
let texto = document.getElementById("textoAlerta");

urlal = 'http://industrial.api.ubidots.com/api/v1.6/devices/sasha/alerta/values?token=';
urla = 'http://industrial.api.ubidots.com/api/v1.6/devices/sasha/aceleracion/values?token=';
urlr = 'http://industrial.api.ubidots.com/api/v1.6/devices/sasha/ritmo-cardiaco/values?token=';

fetch(urlal)
.then((resp) => resp.json())
.then(function(data) {
  let alertas= data.results;
  return alertas.map(function(alerta) {
    var date = new Date(alerta.timestamp);

    textoAlerta.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   
  })
})
.catch(function(error) {
  console.log(error);
});

fetch(urlr)
.then((resp) => resp.json())
.then(function(data) {
  let ritmos= data.results;
  return ritmos.map(function(ritmo) {
    row = tabla.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);  
    
    var date = new Date(ritmo.timestamp);

    cell1.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    cell2.innerHTML = `${ritmo.value} lpm`;
    cell3.innerHTML = 0;
  })
})
.catch(function(error) {
  console.log(error);
});

fetch(urla)
.then((resp) => resp.json())
.then(function(data) {
  let aceleraciones = data.results;
  contador = 1;

  return aceleraciones.map(function(aceleracion) {
    tabla.rows[contador].cells[2].innerHTML = `${aceleracion.value} m/S`;
    contador++;
  })
})
.catch(function(error) {
  console.log(error);
});