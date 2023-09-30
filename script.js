let pontuacao = 0;
function enviar() {
    let r1 = document.querySelector("input[type='radio'][name=p1]:checked").value;
    if (r1 == '3') {
        pontuacao++;
    }
    let r2 = document.querySelector("input[type='radio'][name=p2]:checked").value;
    if (r2 == '1') {
        pontuacao++;
    }
    let r3 = document.querySelector("input[type='radio'][name=p3]:checked").value;
    if (r3 == '1') {
        pontuacao++;
    }
    let r4 = document.querySelector("input[type='radio'][name=p4]:checked").value;
    if (r4 == '1') {
        pontuacao++;
    }
    let r5 = document.querySelector("input[type='radio'][name=p5]:checked").value;
    if (r5 == '3') {
        pontuacao++;
    }
    let r6 = document.querySelector("input[type='radio'][name=p6]:checked").value;
    if (r6 == '3') {
        pontuacao++;
    }
    let r7 = document.querySelector("input[type='radio'][name=p7]:checked").value;
    if (r7 == '2') {
        pontuacao++;
    }
    let r8 = document.querySelector("input[type='radio'][name=p8]:checked").value;
    if (r8 == '2') {
        pontuacao++;
    }
    let r9 = document.querySelector("input[type='radio'][name=p9]:checked").value;
    if (r9 == '1') {
        pontuacao++;
    }
    let r10 = document.querySelector("input[type='radio'][name=p10]:checked").value;
    if (r10 == '1') {
        pontuacao++;
    }
    alert(pontuacao)
    document.getElementById('resul').value = pontuacao;
}