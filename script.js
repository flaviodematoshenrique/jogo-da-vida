var btnDesativ = 'rgb(130, 215, 255)';
var btnAtiv = 'rgb(1, 183, 21)';
var totalLinhas = 15;
var totalColunas = 25;
var widthTela = 1000;
var heightTela = 550;
var tempo = 300;

gerarBotoes();
desativarBotoes();
setInterval(start2, tempo);

function gerarBotoes() {
    var html = "";
    html = "<table id='tabela'>";
    for (var linha = 1; linha < totalLinhas; linha++) {
        html += "<tr>";
        for (var coluna = 1; coluna < totalColunas; coluna++) {
            target = "buttonL" + linha + "C" + coluna;
            html += "<td>";
            html += "<button name='celula' value='0' id='" + target + "' onClick='btnClick(" + linha + "," + coluna + ")'></button>";
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    $("#main").append(html);
}

function desativarBotoes() {
    size = heightTela / totalLinhas;
    for (var linha = 1; linha < totalLinhas; linha++) {
        for (var coluna = 1; coluna < totalColunas; coluna++) {
            target = "buttonL" + linha + "C" + coluna;
            document.getElementById(target).value = 0;
            if (document.getElementById(target).value == 0) {
                document.getElementById(target).style.background = btnDesativ;
            }
            document.getElementById(target).style.height = size + "px";
            document.getElementById(target).style.width = size + "px";
        }
    }
}

function btnClick(linha, coluna) {
    value = "buttonL" + linha + "C" + coluna;
    if (document.getElementById(value).style.background == btnDesativ) {
        document.getElementById(value).style.background = btnAtiv;
        document.getElementById(value).value = 1;
    }
    else {
        document.getElementById(value).style.background = btnDesativ;
        document.getElementById(value).value = 0;
    }
}

function novaGeracao() {
    for (var linha = 1; linha < totalLinhas; linha++) {
        for (var coluna = 1; coluna < totalColunas; coluna++) {
            target = "buttonL" + linha + "C" + coluna;
            if (document.getElementById(target).value == 0) {
                document.getElementById(target).style.background = btnDesativ;
            } else {
                document.getElementById(target).style.background = btnAtiv;
            }
        }
    }
}

function start2() {
    if (document.getElementById("starter").textContent == "Stop!") {

        for (var linha = 1; linha < totalLinhas; linha++) {
            for (var coluna = 1; coluna < totalColunas; coluna++) {
                tresVivos(linha, coluna);
                menosDois(linha, coluna);
                maisTres(linha, coluna);
                doiOUtres(linha, coluna);
                //setTimeout(novaGeracao, tempo);
            }
        }
        novaGeracao();
    }
}

function start() {
    if (document.getElementById("starter").textContent == "Start!") {
        document.getElementById("starter").textContent = "Stop!";
        document.getElementById("starter").style.backgroundColor = 'red';
    } else {
        document.getElementById("starter").textContent = "Start!";
        document.getElementById("starter").style.backgroundColor = 'rgb(1, 183, 21)';
    }
}

function targets(linha, coluna) {
    target = "buttonL" + linha + "C" + coluna;

    target1 = "buttonL" + (linha - 1) + "C" + (coluna - 1);
    target2 = "buttonL" + (linha - 1) + "C" + (coluna);
    target3 = "buttonL" + (linha - 1) + "C" + (coluna + 1);

    target4 = "buttonL" + (linha) + "C" + (coluna - 1);
    target5 = "buttonL" + (linha) + "C" + (coluna + 1);

    target6 = "buttonL" + (linha + 1) + "C" + (coluna - 1);
    target7 = "buttonL" + (linha + 1) + "C" + (coluna);
    target8 = "buttonL" + (linha + 1) + "C" + (coluna + 1);

    total = 0;

    try {
        if (document.getElementById(target1).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target2).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target3).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target4).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target5).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target6).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target7).style.background == btnAtiv) {
            total++;
        }
        if (document.getElementById(target8).style.background == btnAtiv) {
            total++;
        }
    } catch (error) {

    }
    return (total);
}

function doiOUtres(linha, coluna) {
    if (document.getElementById(target).style.background == btnAtiv) {
        total = targets(linha, coluna);
        if (total == 2 || total == 3) {
            document.getElementById(target).value = 1;
        }
    }
}

function maisTres(linha, coluna) {
    target = "buttonL" + linha + "C" + coluna;
    if (document.getElementById(target).style.background == btnAtiv) {
        total = targets(linha, coluna);
        if (total > 3) {
            document.getElementById(target).value = 0;
        }
    }
}

function menosDois(linha, coluna) {
    target = "buttonL" + linha + "C" + coluna;
    if (document.getElementById(target).style.background == btnAtiv) {
        total = targets(linha, coluna);
        if (total < 2) {
            document.getElementById(target).value = 0;
        }
    }
}

function tresVivos(linha, coluna) {
    target = "buttonL" + linha + "C" + coluna;
    if (document.getElementById(target).style.background == btnDesativ) {
        total = targets(linha, coluna);
        if (total == 3) {
            document.getElementById(target).value = 1;
        }
    }
}

function qntCelulas(value) {
    gravar();
    document.getElementById("tabela").remove();
    totalColunas += value;
    totalLinhas += value;
    gerarBotoes();
    desativarBotoes();
    amostra(6);
}

function showAmostra() {
    if (document.getElementById("amostras").style.visibility == "hidden") {
        document.getElementById("amostras").style.visibility = "visible";
    } else {
        document.getElementById("amostras").style.visibility = "hidden";
    }
}

function amostra(value) {
    document.getElementById("amostras").style.visibility = "hidden";
    if (value == 1) {
        listaAmostra = ["buttonL2C7", "buttonL2C8", "buttonL2C15", "buttonL2C16", "buttonL3C6", "buttonL3C8", "buttonL3C15", "buttonL3C17", "buttonL4C6", "buttonL4C17", "buttonL5C3", "buttonL5C4", "buttonL5C6", "buttonL5C17", "buttonL5C19", "buttonL5C20", "buttonL6C3", "buttonL6C4", "buttonL6C6", "buttonL6C8", "buttonL6C11", "buttonL6C12", "buttonL6C15", "buttonL6C17", "buttonL6C19", "buttonL6C20", "buttonL7C6", "buttonL7C8", "buttonL7C10", "buttonL7C13", "buttonL7C15", "buttonL7C17", "buttonL8C6", "buttonL8C8", "buttonL8C10", "buttonL8C13", "buttonL8C15", "buttonL8C17", "buttonL9C3", "buttonL9C4", "buttonL9C6", "buttonL9C8", "buttonL9C11", "buttonL9C12", "buttonL9C15", "buttonL9C17", "buttonL9C19", "buttonL9C20", "buttonL10C3", "buttonL10C4", "buttonL10C6", "buttonL10C17", "buttonL10C19", "buttonL10C20", "buttonL11C6", "buttonL11C17", "buttonL12C6", "buttonL12C8", "buttonL12C15", "buttonL12C17", "buttonL13C7", "buttonL13C8", "buttonL13C15", "buttonL13C16"];
    }

    if (value == 2) {
        listaAmostra = ["buttonL4C11", "buttonL4C12", "buttonL4C13", "buttonL4C14", "buttonL5C11", "buttonL5C14", "buttonL6C9", "buttonL6C10", "buttonL6C11", "buttonL6C14", "buttonL6C15", "buttonL6C16", "buttonL7C9", "buttonL7C16", "buttonL8C9", "buttonL8C16", "buttonL9C9", "buttonL9C10", "buttonL9C11", "buttonL9C14", "buttonL9C15", "buttonL9C16", "buttonL10C11", "buttonL10C14", "buttonL11C11", "buttonL11C12", "buttonL11C13", "buttonL11C14"];
    }

    if (value == 3) {
        listaAmostra = ["buttonL2C14", "buttonL2C15", "buttonL3C14", "buttonL3C15", "buttonL5C12", "buttonL5C13", "buttonL5C14", "buttonL5C15", "buttonL6C8", "buttonL6C9", "buttonL6C11", "buttonL6C16", "buttonL7C8", "buttonL7C9", "buttonL7C11", "buttonL7C14", "buttonL7C16", "buttonL8C11", "buttonL8C14", "buttonL8C16", "buttonL8C18", "buttonL8C19", "buttonL9C11", "buttonL9C13", "buttonL9C16", "buttonL9C18", "buttonL9C19", "buttonL10C12", "buttonL10C13", "buttonL10C14", "buttonL10C15", "buttonL12C12", "buttonL12C13", "buttonL13C12", "buttonL13C13"];
    }

    if (value == 4) {
        listaAmostra = ["buttonL6C12", "buttonL7C11", "buttonL7C12", "buttonL7C13", "buttonL8C12"];
    }

    if (value == 5) {
        listaAmostra = ["buttonL2C4", "buttonL2C5", "buttonL2C18", "buttonL2C19", "buttonL3C5", "buttonL3C18", "buttonL4C5", "buttonL4C7", "buttonL4C16", "buttonL4C18", "buttonL5C6", "buttonL5C7", "buttonL5C16", "buttonL5C17", "buttonL7C9", "buttonL7C10", "buttonL7C11", "buttonL7C12", "buttonL7C13", "buttonL7C14", "buttonL9C6", "buttonL9C7", "buttonL9C16", "buttonL9C17", "buttonL10C5", "buttonL10C7", "buttonL10C16", "buttonL10C18", "buttonL11C5", "buttonL11C18", "buttonL12C4", "buttonL12C5", "buttonL12C18", "buttonL12C19"];
    }

    if (value == 6) {
        listaAmostra = listaGravar;
    }

    for (var linha = 1; linha < totalLinhas; linha++) {
        for (var coluna = 1; coluna < totalColunas; coluna++) {
            target = "buttonL" + linha + "C" + coluna;
            document.getElementById(target).style.background = btnDesativ;
            document.getElementById(target).value = 0;

            for (c in listaAmostra) {
                if (listaAmostra[c] == target) {
                    document.getElementById(target).style.background = btnAtiv;
                    document.getElementById(target).value = 1;
                }
            }
        }
    }
}

function gravar() {
    listaGravar = [];
    for (var linha = 1; linha < totalLinhas; linha++) {
        for (var coluna = 1; coluna < totalColunas; coluna++) {
            target = "buttonL" + linha + "C" + coluna;
            if (document.getElementById(target).style.background == btnAtiv) {
                listaGravar.push(target);
            }

        }
    }
}