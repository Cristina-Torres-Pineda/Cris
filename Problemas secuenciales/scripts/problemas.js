function p210() {
    let m3 = parseFloat(document.getElementById("m3").value);
    let costo = parseFloat(document.getElementById("costo").value);
    let total = m3 * costo;
    document.getElementById("res").textContent = "Total a pagar: $" + total;
}

function p211() {
    let kw = parseFloat(document.getElementById("kw").value);
    let costo = parseFloat(document.getElementById("costo").value);
    let total = kw * costo;
    document.getElementById("res").textContent = "Total a pagar: $" + total;
}

function p212() {
    let precio = parseFloat(document.getElementById("precio").value);
    let desc = precio * 0.20;
    let conDesc = precio - desc;
    let final = conDesc * 1.15;
    document.getElementById("res").textContent = "Con descuento: $" + conDesc + " | Final con IVA: $" + final;
}

function p213() {
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let ahorroSemana = sueldo * 0.15;
    let ahorroAnio = ahorroSemana * 4 * 12;
    document.getElementById("res").textContent = "Ahorro anual: $" + ahorroAnio;
}

function p214() {
    let dias = parseFloat(document.getElementById("dias").value);
    let hotel = parseFloat(document.getElementById("hotel").value);
    let comida = parseFloat(document.getElementById("comida").value);
    let total = (hotel * dias) + (comida * dias) + (100 * dias);
    document.getElementById("res").textContent = "Monto del cheque: $" + total;
}

function p215() {
    let R = parseFloat(document.getElementById("r").value);
    let I = parseFloat(document.getElementById("i").value);
    let V = R * I;
    let P = V * I;
    document.getElementById("res").textContent = "Potencia: " + P + " watts";
}

function p216() {
    let lado = parseFloat(document.getElementById("lado").value);
    let area = lado * lado;
    document.getElementById("res").textContent = "Área: " + area;
}

function p217() {
    let e1 = parseFloat(document.getElementById("e1").value);
    let e2 = parseFloat(document.getElementById("e2").value);
    let e3 = parseFloat(document.getElementById("e3").value);
    let prom = (e1 * 0.25) + (e2 * 0.25) + (e3 * 0.50);
    document.getElementById("res").textContent = "Promedio: " + prom;
}

function p218() {
    let edad = parseFloat(document.getElementById("edad").value);
    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    document.getElementById("res").textContent = meses + " meses, " + semanas + " semanas, " + dias + " días";
}

function p219() {
    let min = parseFloat(document.getElementById("min").value);
    let costo = parseFloat(document.getElementById("c_min").value);
    let total = min * costo;
    document.getElementById("res").textContent = "Costo: $" + total;
}

function p220() {
    let dias = parseFloat(document.getElementById("dias").value);
    let costo = parseFloat(document.getElementById("costo").value);
    let total = dias * costo;
    document.getElementById("res").textContent = "Total: $" + total;
}