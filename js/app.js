const campos = [
  document.querySelector("#usuario"),
  document.querySelector("#email"),
  document.querySelector("#dataNascimento"),
  document.querySelector("#quantidadePessoas"),
  document.querySelector("#dataViagem")
];

const tbody = document.querySelector("tbody");

document.querySelector("form").addEventListener("submit", function (evento) {
  evento.preventDefault();

  var dd;
  var mm;
  var yyyy;

  function anoBissexto() {
    if (yyyy % 400 === 0) {
      return true;
    }
    if (yyyy % 100 === 0) {
      return false;
    }
    if (yyyy % 4 === 0) {
      return true
    }

    return false;
  }

  var tr = document.createElement("tr");

  campos.forEach(function (dados) {
    if (dados === campos[2]) {
      const tdData = document.createElement("td");
      let data = new Date(campos[2].value);
      dd = Number(data.getDate() + 1);
      mm = Number(data.getMonth() + 1);
      yyyy = Number(data.getFullYear());

      if (dd === 32 && mm === 12) {
        dd = 1;
        mm = 1;
        yyyy++;

      } else if (dd === 31 && mm === 4 || dd === 31 && mm === 6 || dd === 31 && mm === 9 || dd === 31 && mm === 11) {
        dd = 1;
        mm++;

      } else if (dd === 32) {
        dd = 1;
        mm++;
      }

      if (dd === 30 && mm === 2) {
        dd = 1;
        mm++;

      } else if (dd === 29 && mm === 2 && anoBissexto() === false) {
        dd = 1;
        mm++;
      }

      if (dd == 1 || dd == 2 || dd == 3 || dd == 4 || dd == 5 || dd == 6 || dd == 7 || dd == 8 || dd == 9) {
        dd = '0' + dd;

      }
      if (mm == 1 || mm == 2 || mm == 3 || mm == 4 || mm == 5 || mm == 6 || mm == 7 || mm == 8 || mm == 9) {
        mm = '0' + mm;
      }

      data = dd + '/' + mm + '/' + yyyy;
      tdData.textContent = `${data}`;
      tr.appendChild(tdData);

      return

    } else if (dados === campos[4]) {
      const tdDataViagem = document.createElement("td");
      let dataViagem = new Date(campos[4].value);
      dd = Number(dataViagem.getDate() + 1);
      mm = Number(dataViagem.getMonth() + 1);
      yyyy = Number(dataViagem.getFullYear());

      if (dd === 32 && mm === 12) {
        dd = 1;
        mm = 1;
        yyyy++;

      } else if (dd === 31 && mm === 4 || dd === 31 && mm === 6 || dd === 31 && mm === 9 || dd === 31 && mm === 11) {
        dd = 1;
        mm++;

      } else if (dd === 32) {
        dd = 1;
        mm++;
      }

      if (dd === 30 && mm === 2) {
        dd = 1;
        mm++;

      } else if (dd === 29 && mm === 2 && anoBissexto() === false) {
        dd = 1;
        mm++;
      }

      if (dd == 1 || dd == 2 || dd == 3 || dd == 4 || dd == 5 || dd == 6 || dd == 7 || dd == 8 || dd == 9) {
        dd = '0' + dd;

      }
      if (mm == 1 || mm == 2 || mm == 3 || mm == 4 || mm == 5 || mm == 6 || mm == 7 || mm == 8 || mm == 9) {
        mm = '0' + mm;
      }

      dataViagem = dd + '/' + mm + '/' + yyyy;
      tdDataViagem.textContent = `${dataViagem}`;
      tr.appendChild(tdDataViagem);

      return
    }

    const td = document.createElement("td");
    td.textContent = dados.value;
    tr.appendChild(td);
  });

  const locais = document.getElementsByName('lugar');
  var lugarEscolhido;
  locais.forEach(e => {
    if (e.checked) {
      lugarEscolhido = e.value;
    }
  });

  const tdLocalHospedagem = document.createElement("td");
  const tdValorHospedagem = document.createElement("td");
  const tdValorTranslado = document.createElement("td");
  const tdValorViagem = document.createElement("td");

  tdLocalHospedagem.textContent = `${lugarEscolhido}`;
  tr.appendChild(tdLocalHospedagem);

  tdValorHospedagem.textContent = `${(campos[3].value * 9500).toFixed(2).replace('.',',')}`;
  tr.appendChild(tdValorHospedagem);

  tdValorTranslado.textContent = `${(campos[3].value * 33500).toFixed(2).replace('.',',')}`;
  tr.appendChild(tdValorTranslado);

  tdValorViagem.textContent = `${(campos[3].value * 43000).toFixed(2).replace('.',',')}`;
  tr.appendChild(tdValorViagem);

  tbody.appendChild(tr);

  this.reset();
})