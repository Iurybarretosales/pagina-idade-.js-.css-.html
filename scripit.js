function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res') 
    if (fano.value.length == 0 || fano.value > ano || fano.value <= 0){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }
    var fsexo = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value) 
    var genero = ''
    var img = window.document.getElementById('foto')
    if (fsexo[0].checked){
        genero = 'HOMEM'
        window.document.body.style.background = 'rgba(0, 0, 0, 0.562)'
        if (idade >= 0 && idade < 10){
            //criança 
            img.src = 'crianca_homem.png'
        }else if (idade < 21){
             //adolecente
             img.src = 'adolecente_homem.png'
        }else if (idade < 50){
            //adulto
            img.src = 'homem_adulto.png'
        }else{
            //idoso
            img.src = 'homem_idoso.png'
        }
    }if (fsexo[1].checked){
        genero = 'MULHER'
        window.document.body.style.background = 'rgba(255, 1, 242, 0.747)'
        if (idade >= 0 && idade < 10){
            //criança 
            img.src = 'crianca_mulher.png'
        }else if (idade < 21){
             //adolecente
             img.src = 'adolecente_mulher.png'
        }else if (idade < 50){
            //adulto
            img.src = 'mulher_adulta.png'
        }else{
            //idoso
            img.src = 'mulher_idosa.png'
        }
    }
    res.innerHTML = `Detectamos ${genero} com idade ${idade}`
} 