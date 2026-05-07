class Retangulo {
  #width;
  #height;

  constructor(x, y) {
    this.#width = x;
    this.#height = y;
  }

  calculateArea() {
    return x * y;
  }
}

const btn_area = document.getElementById("btn_area");
btn_area.addEventListener("click", (_) => {
  const w = document.getElementById("base").innerText;
  const h = document.getElementById("altura").innerText;

  const result = document.getElementById("area_result");

  const w_num = parseFloat(w);
  const h_num = parseFloat(h);

  if (Number.isNaN(w_num)) {
    result.innerText =
      "O valor inserido para a BASE do retângulo não é um número válido!";
  } else if (Number.isNaN(h_num)) {
    result.innerText =
      "O valor inserido para a ALTURA do retângulo não é um número válido!";
  } else {
    const rect = new Rectangle(w, h);

    const area = rect.calculateArea();

    result.innerText = "A área do retângulo digitado é " + area;
  }
});

// --------------------------------

class Conta {
  #nome_correntista;
  #banco;
  #numero_da_conta;
  #saldo;

  constructor(c, b, n, s) {
    this.#nome_correntista = c;
    this.#banco = b;
    this.#numero_da_conta = n;
    this.#saldo = s;
  }
  get nome_correntista() {
    return this.#nome_correntista;
  }
  get banco() {
    return this.#banco;
  }
  get numero_da_conta() {
    return this.#numero_da_conta;
  }
  get saldo() {
    return this.#saldo;
  }
}

class Corrente extends Conta {
  #saldo_especial;

  constructor(c, b, n, s, se) {
    super(c, b, n, s);
    this.#saldo_especial = se;
  }

  get saldo_especial() {
    return this.#saldo_especial;
  }
}

class Poupanca extends Conta {
  #juros;

  constructor(c, b, n, s, j) {
    super(c, b, n, s);
    this.#juros = j;
  }

  get juros() {
    return this.#juros;
  }
}

const btn_conta = document.getElementById("btn_conta");

btn_conta.addEventListener("click", (_) => {
  const nome = document.getElementById("nome").value;
  const banco = document.getElementById("banco").value;
  const numero = document.getElementById("numero").value;
  const saldo = parseFloat(document.getElementById("saldo").value);
  const saldo_especial = parseFloat(
    document.getElementById("saldo_especial").value,
  );
  const juros = parseFloat(document.getElementById("juros").value);

  const corr = new Corrente(nome, banco, numero, saldo, saldo_especial);
  const poup = new Poupanca(nome, banco, numero, saldo, juros);

  const result = document.getElementById("conta_result");

  result.innerHTML = `
    <div class="account-display">
      <h3>Conta Corrente</h3>
      <p><strong>Correntista:</strong> ${corr.nome_correntista}</p>
      <p><strong>Banco:</strong> ${corr.banco}</p>
      <p><strong>Número:</strong> ${corr.numero_da_conta}</p>
      <p><strong>Saldo:</strong> R$ ${corr.saldo}</p>
      <p><strong>Saldo Especial:</strong> R$ ${corr.saldo_especial}</p>
    </div>
    <div class="account-display">
      <h3>Conta Poupança</h3>
      <p><strong>Correntista:</strong> ${poup.nome_correntista}</p>
      <p><strong>Banco:</strong> ${poup.banco}</p>
      <p><strong>Número:</strong> ${poup.numero_da_conta}</p>
      <p><strong>Saldo:</strong> R$ ${poup.saldo}</p>
      <p><strong>Juros:</strong> ${poup.juros}%</p>
    </div>
  `;
});
