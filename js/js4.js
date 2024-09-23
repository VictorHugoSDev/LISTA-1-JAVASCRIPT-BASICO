notaBim1 = parseFloat(prompt("Qual a nota do primeiro bimestre?"));
while (notaBim1 < 0 || notaBim1 > 50 || notaBim1 == null) { 
    alert("digite uma nota do primeiro bimestre válida");
    notaBim1 = parseInt(prompt("Qual a nota do primeiro bimestre?"));
}
notaBim2 = parseFloat(prompt("Qual a nota do segundo bimestre?")); 
while (notaBim2 < 0 || notaBim2 > 50 || notaBim2 == null) { 
    alert("digite uma nota do segundo bimestre válida");
    notaBim2 = parseInt(prompt("Qual a nota do segundo bimestre?")); 
}

notaFinal = notaBim1 + notaBim2;
notaFaltante = 60 - notaFinal;

if (notaFinal >= 60) {
    alert(`${nome} vc está APROVADO. \nNota Final: ${notaFinal.toFixed(2)}`);
}
else { 
    alert(`${nome} vc está REPROVADO. \nFaltam: ${notaFaltante.toFixed(2)} para ser aprovado`);
}