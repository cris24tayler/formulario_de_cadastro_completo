document.getElementById('cep').addEventListener('blur', buscarEndereco);
document.getElementById('cadastroForm').addEventListener('submit', validarFormulario);

// Validações de Autenticação: E-mail e Senha
function validarAutenticacao(email, senha) {
    if (!validarEmail(email)) {
        alert('E-mail inválido!');
        return false;
    }

    if (!validarSenha(senha)) {
        alert('A senha deve ter pelo menos 8 caracteres!');
        return false;
    }

    return true;
}

// Validações de Informações Pessoais: CPF e Data de Nascimento
function validarInformacoesPessoais(cpf, nascimento) {
    if (!validarCPF(cpf)) {
        alert('CPF inválido!');
        return false;
    }

    if (!validarDataNascimento(nascimento)) {
        alert('Data de nascimento inválida! Você deve ter pelo menos 18 anos.');
        return false;
    }

    return true;
}

// Validações de Endereço
function validarEndereco(endereco) {
    // Aqui você pode adicionar validações adicionais se necessário
    return true;
}

// Função principal de validação do formulário
function validarFormulario(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value.trim();
    const nascimento = document.getElementById('nascimento').value;
    const endereco = {
        cep: document.getElementById('cep').value.trim(),
        rua: document.getElementById('rua').value.trim(),
        bairro: document.getElementById('bairro').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        estado: document.getElementById('estado').value.trim()
    };

    // Executa as validações separadas
    const autenticacaoValida = validarAutenticacao(email, senha);
    const informacoesPessoaisValidas = validarInformacoesPessoais(cpf, nascimento);
    const enderecoValido = validarEndereco(endereco);

    if (autenticacaoValida && informacoesPessoaisValidas && enderecoValido) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode enviar os dados para o servidor ou limpar o formulário
        document.getElementById('cadastroForm').reset();
    }
}

// Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// Validação de E-mail
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validação de Senha
function validarSenha(senha) {
    return senha.length >= 8;
}

// Validação de Data de Nascimento (exemplo: verificar se tem pelo menos 18 anos)
function validarDataNascimento(nascimento) {
    const dataNascimento = new Date(nascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
        return idade - 1 >= 18;
    }
    return idade >= 18;
}

// Função para buscar endereço via API do ViaCEP
function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                } else {
                    alert('CEP não encontrado!');
                    limparEndereco();
                }
            })
            .catch(error => {
                alert('Erro ao buscar o endereço.');
                limparEndereco();
                console.error(error);
            });
    } else {
        alert('CEP inválido!');
        limparEndereco();
    }
}

// Função para limpar os campos de endereço em caso de erro
function limparEndereco() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
