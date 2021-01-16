function consultaCep() {
    if (document.getElementById('cep').value != '') {
        let cep = document.getElementById('cep').value
        let xmlHttp = new XMLHttpRequest()
        url = `http://viacep.com.br/ws/${cep}/json/`
        xmlHttp.open('GET', url)
        xmlHttp.send()
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4) { //verificando se a resposta da requisição feita para o servidor já foi obtida 
                if (xmlHttp.status == 200) { //verificando se a resposta foi obtida com sucesso
                    let objEndereco = JSON.parse(xmlHttp.responseText) //transformando a resposta de texto para um objeto JSON
                    if(objEndereco.erro == true){ //testando se a API retornou uma resposta de erro para o CEP informado
                        alert('Houve um erro na consulta para este CEP. Por favor, tente novamente.')
                        document.getElementById('bairro').value = ''
                        document.getElementById('cidade').value = ''
                        document.getElementById('uf').value = ''
                        document.getElementById('rua').value = ''
                        location.reload()
                    }else{
                        document.getElementById('bairro').value = objEndereco.bairro
                        document.getElementById('cidade').value = objEndereco.localidade
                        document.getElementById('uf').value = objEndereco.uf
                        document.getElementById('rua').value = objEndereco.logradouro
                    }
                }
                else {
                    alert('Houve um erro na consulta para este CEP. Por favor, tente novamente.')
                    document.getElementById('bairro').value = ''
                    document.getElementById('cidade').value = ''
                    document.getElementById('uf').value = ''
                    document.getElementById('rua').value = ''
                    location.reload()
                }
            }
        }
    } else {
        document.getElementById('bairro').value = ''
        document.getElementById('cidade').value = ''
        document.getElementById('uf').value = ''
        document.getElementById('rua').value = ''
    }

}

