const dolarCotiza = 248.50;
const euroCotiza= 267;
const realCotiza= 51.45;
function actualizarPlaceholder(idSelect, idInput) {
const selectElement = document.getElementById("diviza");
const inputElement = document.getElementById("input-moneda");

selectElement.addEventListener("change", (event) => {
  const valorSeleccionado = event.target.value;
  
  switch(valorSeleccionado) {
    case "default":
      inputElement.placeholder = "Elija una moneda";
      break;
    case "dolar":
      inputElement.placeholder = "USD";
      break;
    case "euro":
      inputElement.placeholder = "EURO";
      break;
    case "reales":
      inputElement.placeholder = "REALES";
      break;
  }
});
}
function actualizarPlaceholderDos(idSelect, idInput) {
  const selectElement = document.getElementById("diviza-dos");
  const inputElement = document.getElementById("input-moneda-dos");
  
  selectElement.addEventListener("change", (event) => {
    const valorSeleccionado = event.target.value;
    
    switch(valorSeleccionado) {
      case "default":
        inputElement.placeholder = "Elija una moneda";
        break;
      case "peso":
        inputElement.placeholder = "ARS";
        break;
      case "euro":
        inputElement.placeholder = "EURO";
        break;
      case "reales":
        inputElement.placeholder = "REALES";
        break;
    }
  });
  }
  function actualizarPlaceholderTres(idSelect, idInput) {
    const selectElement = document.getElementById("diviza-tres");
    const inputElement = document.getElementById("input-moneda-tres");
    
    selectElement.addEventListener("change", (event) => {
      const valorSeleccionado = event.target.value;
      
      switch(valorSeleccionado) {
        case "default":
          inputElement.placeholder = "Elija una moneda";
          break;
        case "peso":
          inputElement.placeholder = "ARS";
          break;
        case "dolar":
          inputElement.placeholder = "USD";
          break;
        case "reales":
          inputElement.placeholder = "REALES";
          break;
      }
    });
  }
  function actualizarPlaceholderCuatro(idSelect, idInput) {
    const selectElement = document.getElementById("diviza-cuatro");
    const inputElement = document.getElementById("input-moneda-cuatro");
    
    selectElement.addEventListener("change", (event) => {
      const valorSeleccionado = event.target.value;
      
      switch(valorSeleccionado) {
        case "default":
          inputElement.placeholder = "Elija una moneda";
          break;
        case "peso":
          inputElement.placeholder = "ARS";
          break;
        case "dolar":
          inputElement.placeholder = "USD";
          break;
        case "euro":
          inputElement.placeholder = "EURO";
          break;
      }
    });
  }
  function pesoDiviza() {
    let diviza =  document.getElementById("diviza").value;
    let peso = document.getElementById("peso").value;
    if (peso < 0) {
      alert("Solo numeros mayores a 0");
      
    }
    else if (diviza === "default") {
      alert("ELIJA UNA MONEDA")
    }
    else if (diviza === "dolar") {
      let resultadoDolar = (peso/dolarCotiza);
      document.getElementById("input-moneda").value = resultadoDolar;
    }
    else if (diviza === "euro") {
      let resultadoEuro = (peso/euroCotiza);
      document.getElementById("input-moneda").value = resultadoEuro;
    }
    else if (diviza === "reales") {
      let resultadoReal = (peso/realCotiza);
      document.getElementById("input-moneda").value = resultadoReal;
    }
  }
  function borrarPeso() {
    document.getElementById("input-moneda").value = ""
    document.getElementById("peso").value = ""
  }
  function dolarDiviza() {
    let diviza =  document.getElementById("diviza-dos").value;
    let dolar = document.getElementById("dolar").value;
    if (dolar < 0) {
      alert("Solo numeros mayores a 0");
      
    }
    else if (diviza === "default") {
      alert("ELIJA UNA MONEDA")
    }
    else if (diviza === "peso") {
      let resultadoPeso = (dolar*dolarCotiza);
      document.getElementById("input-moneda-dos").value = resultadoPeso;
    }
    else if (diviza === "euro") {
      let resultadoEuro = (dolar*(dolarCotiza/euroCotiza));
      document.getElementById("input-moneda-dos").value = resultadoEuro;
    }
    else if (diviza === "reales") {
      let resultadoReal = (dolar*(dolarCotiza/realCotiza));
      document.getElementById("input-moneda-dos").value = resultadoReal;
    }
  }
  function borrarDolar() {
    document.getElementById("input-moneda-dos").value = ""
    document.getElementById("dolar").value = ""
  }
  function euroDiviza() {
    let diviza =  document.getElementById("diviza-tres").value;
    let euro = document.getElementById("euro").value;
    if (euro < 0) {
      alert("Solo numeros mayores a 0");
      
    }
    else if (diviza === "default") {
      alert("ELIJA UNA MONEDA")
    }
    else if (diviza === "peso") {
      let resultadoPeso = (euro*euroCotiza);
      document.getElementById("input-moneda-tres").value = resultadoPeso;
    }
    else if (diviza === "dolar") {
      let resultadoDolar = (euro*(euroCotiza/dolarCotiza));
      document.getElementById("input-moneda-tres").value = resultadoDolar;
    }
    else if (diviza === "reales") {
      let resultadoReal = (euro*(euroCotiza/realCotiza));
      document.getElementById("input-moneda-tres").value = resultadoReal;
    }
  }
  function borrarEuro() {
    document.getElementById("input-moneda-tres").value = ""
    document.getElementById("euro").value = ""
  }
  function realDiviza() {
    let diviza =  document.getElementById("diviza-cuatro").value;
    let real = document.getElementById("real").value;
    if (real < 0) {
      alert("Solo numeros mayores a 0");
      
    }
    else if (diviza === "default") {
      alert("ELIJA UNA MONEDA")
    }
    else if (diviza === "peso") {
      let resultadoPeso = (real*realCotiza);
      document.getElementById("input-moneda-cuatro").value = resultadoPeso;
    }
    else if (diviza === "dolar") {
      let resultadoDolar = (real*(realCotiza/dolarCotiza));
      document.getElementById("input-moneda-cuatro").value = resultadoDolar;
    }
    else if (diviza === "euro") {
      let resultadoEuro = (real*(realCotiza/euroCotiza));
      document.getElementById("input-moneda-cuatro").value = resultadoEuro;
    }
  }
  function borrarReal() {
    document.getElementById("input-moneda-cuatro").value = ""
    document.getElementById("real").value = ""
  }