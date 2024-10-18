# Este projeto é um sistema simples de cadastro, dividido em três etapas:

## A aplicação foi desenvolvida usando HTML5, CSS3, e JavaScript Puro, com validações em cada etapa e integração com a API ViaCEP para preenchimento automático de endereço.

### Estrutura do Projeto
.
├── index.html              # Formulário de E-mail e Senha
├── informacoes_pessoais.html # Formulário de Informações Pessoais
├── endereco.html            # Formulário de Endereço
├── styles.css               # Estilos CSS
├── controller.js            # Lógica de validação e integração com a API ViaCEP
└── README.md                # Documentação do projeto
## Funcionalidades
* Validação de E-mail e Senha (index.html)

* O e-mail precisa estar no formato válido (ex.: exemplo@dominio.com).
* A senha precisa ter no mínimo 8 caracteres.
* Informações Pessoais (informacoes_pessoais.html)

* CPF: Validação de CPF usando JavaScript.
* Data de Nascimento: Verificação se o usuário tem pelo menos 18 anos.
* Cadastro de Endereço (endereco.html)

* CEP: O sistema consome a API ViaCEP para preencher os campos de endereço automaticamente.
* Campos preenchidos automaticamente: Rua, Bairro, Cidade e Estado.
* Validações Gerais (controller.js)

### Fluxo do Cadastro:

* Preencha e-mail e senha e clique em "Avançar".
* Complete as informações pessoais e clique em "Avançar".
* Preencha o CEP e, se válido, o restante do endereço será preenchido automaticamente.
### Dependências
* Navegador moderno com suporte a JavaScript.
* Conexão com a internet para usar a API ViaCEP.

## 🔗 visite o Projeto Online

[Formulário de Cadastro completo](https://cris24tayler.github.io/formulario_de_cadastro_completo/)


## Autor
* cristian
