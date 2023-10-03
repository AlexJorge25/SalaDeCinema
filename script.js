$('#enviar').click(atualizarCadeiras);
var ocupadas = 0;
var disponiveis = 0;

function atualizarCadeiras() {
    disponiveis = $('#numeroCadeiras').val()
    cadeiras()
    var numeroCadeiras = $('#numeroCadeiras').val()
    var sala = $('#salaDoCinema')
    $('#salaDoCinema').html("");
    for (var x = 0; x < numeroCadeiras; x++) {
        var botao = document.createElement("button");
        botao.className = "cadeiraAtiva"
        botao.textContent = x;
        botao.addEventListener("click", function() {
            if ($(this).hasClass("cadeiraAtiva")) {
                $(this).removeClass("cadeiraAtiva").addClass("cadeiraOcupada");
                ocupadas += 1
                disponiveis -= 1
                cadeiras()
            } else if ($(this).hasClass("cadeiraOcupada")) {
                $(this).removeClass("cadeiraOcupada").addClass("cadeiraAtiva");
                ocupadas -= 1
                disponiveis += 1
                cadeiras()
            }
        });
        sala.append(botao);
    }
}
function cadeiras(){
    $('#ocupadas').text(ocupadas)
    $('#disponiveis').text(disponiveis)
}
