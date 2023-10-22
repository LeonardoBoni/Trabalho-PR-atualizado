
let areas = ""; // Inicializa a variável areas com uma string vazia
let titulocurso = document.getElementById('titulo-area');
let botaocursos = document.getElementById('botao-cursos');
let cursoEscolhido = "";
let infoCrusos = document.getElementById('titulo-cursos');
let tituloInfoCursos = document.getElementById('TituloinfoCursos');
let informacaoCursos = document.getElementById('infoCursos');
let titutlofaculdades = document.getElementById('tituloFaculdades');
let faculdades = document.getElementById('faculdades');
let botaohome = document.getElementById('cabecalho');


document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const areas = urlParams.get('area');

    if (areas) {
        const titulocurso = document.getElementById('titulo-area');
        titulocurso.innerHTML = `${areas}!`;
        titulocurso.style.textAlign = 'center';
        titulocurso.style.margin = '0 auto';
        titulocurso.style.fontSize = '40px';

        const botaoCursos = document.getElementById('botao-cursos');
        botaoCursos.innerHTML = ''; // Remove qualquer botão existente

        if (areas === 'EXATAS') {
            //Voltar a telaa 
            const botaoHome = document.createElement('button');
            botaoHome.innerHTML = 'VOLTAR';
            botaoHome.classList.add('cabecalho');
            botaohome.appendChild(botaoHome);
           
            botaoHome.style.width = '100px'
            botaoHome.style.height = '60px'
            botaoHome.style.borderRadius = '15px'
            botaoHome.style.border ='unset'
            botaoHome.style.backgroundColor = '#e8e8e8'
            botaoHome.style.color = '#212121'
            botaoHome.style.fontSynthesisWeight = '1000';
            botaoHome.style.fontSize = '17px'
            botaoHome.style.boxShadow = '4px 8px 19px -3px rgba(0,0,0,0.27)';
            botaoHome.style.cursor = 'pointer';
            botaoHome.style.color = '#E8F1F2'
            botaoHome.style.backgroundColor = '#247BA0'
            botaoHome.style.zIndex = '1';
            botaoHome.style.fontWeight = 'bold';

            botaoHome.onclick = function(){
               exatas();
            }

            
            //Criando as variaves dos botões :
            const botaoAds = document.createElement('button');
            const botaoAutomacaoIndustrial = document.createElement('button');
            const botaoAdsJogosDigitais = document.createElement('button');
            const botaoCienciaComputacao = document.createElement('button');
            const botaoEconomia = document.createElement('button');
            const botaoEngenhariaAmbiental = document.createElement('button');
            const botaoEngenhariaCivil = document.createElement('button');
            const botaoEngenhariaDaComputacao = document.createElement('button');
            const botaoEngenhariaDeSoftware = document.createElement('button');
            const botaoEngenhariaEletronica = document.createElement('button');
            const botaoEngenhariaTextil = document.createElement('button');
            const botaoEngenhariaDeTransportes = document.createElement('button');
            const botaoEstastiticas = document.createElement('button');
            const botaoFisica = document.createElement('button');
            const botaoLogistica = document.createElement('button');
            const botaoMatematica = document.createElement('button');
            const botaoQuimica = document.createElement('button');
            const botaoTecnologiaDesenvolvimentoMobile = document.createElement('button');
            const botaoTecnologiaDesenvolvimentoWeb = document.createElement('button');

            //Valores dos botões:
            botaoAds.innerHTML = 'Análise e Desenvolvimento de Sistemas';
            botaoAutomacaoIndustrial.innerHTML = 'Análise de Automação Industrial';
            botaoAdsJogosDigitais.innerHTML = 'Análise e Desenvolvimento de Jogos Digitais';
            botaoCienciaComputacao.innerHTML = 'Ciência da Computação';
            botaoEconomia.innerHTML = 'Economia';
            botaoEngenhariaAmbiental.innerHTML = 'Engenharia Ambiental';
            botaoEngenhariaCivil.innerHTML = 'Engenharia Civil';
            botaoEngenhariaDaComputacao.innerHTML = 'Engenharia da Computação';
            botaoEngenhariaDeSoftware.innerHTML = 'Engenharia de Software';
            botaoEngenhariaEletronica.innerHTML = 'Engenharia Elétrica';
            botaoEngenhariaTextil.innerHTML = 'Engenharia Têxtil';
            botaoEngenhariaDeTransportes.innerHTML = 'Engenharia de Transportes';
            botaoEstastiticas.innerHTML = 'Estatística';
            botaoFisica.innerHTML = 'Física';
            botaoLogistica.innerHTML = 'Logística';
            botaoMatematica.innerHTML = 'Matemática';
            botaoQuimica.innerHTML = 'Química';
            botaoTecnologiaDesenvolvimentoMobile.innerHTML = 'Tecnologia em Desenvolvimento Mobile';
            botaoTecnologiaDesenvolvimentoWeb.innerHTML = 'Tecnologia em Desenvolvimento Web';

            // Adicionando as classes CSS aos botões:

            botaoAds.classList.add('botao-curso');
            botaoAutomacaoIndustrial.classList.add('botao-curso');
            botaoAdsJogosDigitais.classList.add('botao-curso');
            botaoCienciaComputacao.classList.add('botao-curso');
            botaoEconomia.classList.add('botao-curso');
            botaoEngenhariaAmbiental.classList.add('botao-curso');
            botaoEngenhariaCivil.classList.add('botao-curso');
            botaoEngenhariaDaComputacao.classList.add('botao-curso');
            botaoEngenhariaDeSoftware.classList.add('botao-curso');
            botaoEngenhariaEletronica.classList.add('botao-curso');
            botaoEngenhariaTextil.classList.add('botao-curso');
            botaoEngenhariaDeTransportes.classList.add('botao-curso');
            botaoEstastiticas.classList.add('botao-curso');
            botaoFisica.classList.add('botao-curso');
            botaoLogistica.classList.add('botao-curso');
            botaoMatematica.classList.add('botao-curso');
            botaoQuimica.classList.add('botao-curso');
            botaoTecnologiaDesenvolvimentoMobile.classList.add('botao-curso');
            botaoTecnologiaDesenvolvimentoWeb.classList.add('botao-curso');

             // Funçao dos botoes
            botaoAds.onclick = function () {
                cursoEscolhido = "Análise e Desenvolvimento de Sistemas"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É a área responsável por desenvolver e implementar softwares para atender as necessidades das empresas.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UniToledo - Araçatuba (EaD);<br> UFMS;<br> UFRN;,br> UNIP;<br> FATEC"
            };

            botaoAutomacaoIndustrial.onclick = function(){
                cursoEscolhido = "Automação Industrial"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Capacita o aluno a atuar em diferentes segmentos da área de automação, incluindo Matemática, Física, Eletroeletrônica e Informática.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UNICAMP;<br> UFMG;<br> UFSC"
            }

            botaoAdsJogosDigitais.onclick = function(){
                cursoEscolhido = "Análise e Desenvolvimento De Jogos Digitais"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Possui uma abordagem generalista em relação às funções desempenhadas no desenvolvimento de games.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Unopar;<br> UNIP;<br> Unoeste;<br> PUC Minas"
            }

            botaoCienciaComputacao.onclick = function(){
                cursoEscolhido = "Ciência da Computação"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Os alunos aprendem a usar diferentes linguagens de programação para a criação de sistemas computacionais, banco de dados, sistemas operacionais, entre outros.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UFPE;<br> UFSC;<br> UFMG"
            }

            botaoEconomia.onclick = function(){
                cursoEscolhido = "Economia"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É o conjunto de atividades desenvolvidas pelos homens visando a produção, distribuição e o consumo de bens e serviços necessários à sobrevivência e à qualidade de vida.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "USP;<br> UNICAMP;<br> FAC-FEA (em Araçatuba, a partir de 2024)"
            }

            botaoEngenhariaAmbiental.onclick = function(){
                cursoEscolhido = "Engenharia Ambiental"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É a área responsável por desenvolver soluções para minimizar o impacto humano no meio ambiente, promovendo a sustentabilidade e o uso racional dos recursos naturais.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "USP;<br> UFMG;<br> UNICAMP;<br> UFRJ"
            }

            botaoEngenhariaCivil.onclick = function(){
                cursoEscolhido = "Engenharia Civil"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Capacita profissionais para o trabalho na construção civil e urbana, saneamento, geotecnia, hidráulica, estruturas e fundações, rodovias e transportes.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "USP;<br> UNICAMP.<br> UFRJ; <br>UFMG"
            }

            botaoEngenhariaDaComputacao.onclick = function(){
                cursoEscolhido = "Engenharia da Computação"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Capacita profissionais para projetar, desenvolver e implementar sistemas computacionais e eletrônicos.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UERGS;<br> Unifesp;<br> UFMA"
            }

            botaoEngenhariaDeSoftware.onclick = function(){
                cursoEscolhido = "Engenharia De Software"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Aborda a computação voltada para a especificação, desenvolvimento, manutenção e criação de softwares.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Estácio;<br> Unopar"
            }

            botaoEngenhariaEletronica.onclick = function(){
                cursoEscolhido = "Engenharia Eletrõnica"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É a ciência que envolve o projeto, desenvolvimento, fabricação, manutenção e operação de sistemas eletrônicos, como criação de circuitos para computadores, televisões e outros aparelhos.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "USP;<br> UNICAMP;<br> UFMG;<br> UFRGS"
            }

            botaoEngenhariaTextil.onclick = function(){
                cursoEscolhido = "Engenharia Textil"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Forma profissionais capazes de trabalhar na fabricação e no tratamento de fibras, fios e tecidos, atendendo aos mais variados segmentos da indústria têxtil e de confecção.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UEM;<br> UFRN;<br> UFSC"
            }

            botaoEngenhariaDeTransportes.onclick = function(){
                cursoEscolhido = "Engenharia de Transportes"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É uma área que se concentra na otimização e na integração de vários meios de transporte, como planejamento de rotas, melhorias e infraestrutura.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UNICAMP;,br> UFMT;<br> UFSC;<br> UFG"
            }

            botaoEstastiticas.onclick = function(){
                cursoEscolhido = "Estatísticas"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É a ciência que estuda a coleta, organização, análise, interpretação e apresentação de dados,  a fim de extrair informações úteis e relevantes para a tomada de decisões.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "USP;<br> UEM;<br> UFPR"
            }

            botaoFisica.onclick = function(){
                cursoEscolhido = "Física"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É a ciência que estuda a matéria, a energia e as forças que as afetam, bem como as leis que regem seu comportamento, analisando a natureza e fenômenos do universo.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UFU;<br> UFMG;<br> UNESP;<br> USP;<br> UNICAMP"
            }

            botaoLogistica.onclick = function(){
                cursoEscolhido = "Logística"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "A área abrange a implementação e processos de aquisição, armazenamento, movimentação e distribuição de bens.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Anhanguera;<br> Unifev."
            }

            botaoMatematica.onclick = function(){
                cursoEscolhido = "Matemática"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Capacita profissionais para usar a lógica na formulação de teorias, de desenvolver aplicações de cálculos na pesquisa e na ciência aplicada e de criar fórmulas e bancos de dados para solucionar problemas.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Estácio;<br> USP; <br>UNESP;<br> UEL;<br> UFSCAR"
            }

            botaoQuimica.onclick = function(){
                cursoEscolhido = "Química"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Ela estuda a composição, estrutura e propriedades das substâncias químicas, as reações químicas que ocorrem entre elas e também é usada para explicar os processos da natureza e desenvolver novos materiais e produtos.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Unopar (EaD);<br> Unesp; <br>Estácio; <br>UFMG; <br>USP;<br> UNICAMP;<br> UFRJ"
            }

            botaoTecnologiaDesenvolvimentoMobile.onclick = function(){
                cursoEscolhido = "tecnologia em Desenvolvimento Mobile"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É a tecnologia desenvolvida para dispositivos móveis como celulares e smartphones, tablets e smartwatches. O Desenvolvedor Mobile cria e desenvolve aplicativos para esses equipamentos.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Anhanguera (EaD);<br> Unopar (EaD);<br> Universidade Cruzeiro do Sul (EaD)"
            }

            botaoTecnologiaDesenvolvimentoWeb.onclick = function(){
                cursoEscolhido = "tecnologia em Desenvolvimento Web"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "É uma graduação tecnológica, que foi desenvolvida com o objetivo de capacitar profissionais para atuar no mercado de trabalho com alto domínio das tecnologias web.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Anhanguera; <br>  Uniter(EAD)."
            }

            //Adicionando os botões a página:
            botaoCursos.appendChild(botaoAds);
            botaoCursos.appendChild(botaoAutomacaoIndustrial);
            botaoCursos.appendChild(botaoAdsJogosDigitais);
            botaoCursos.appendChild(botaoCienciaComputacao);
            botaoCursos.appendChild(botaoEconomia);
            botaoCursos.appendChild(botaoEngenhariaAmbiental);
            botaoCursos.appendChild(botaoEngenhariaCivil);
            botaoCursos.appendChild(botaoEngenhariaDaComputacao);
            botaoCursos.appendChild(botaoEngenhariaDeSoftware);
            botaoCursos.appendChild(botaoEngenhariaEletronica);
            botaoCursos.appendChild(botaoEngenhariaTextil);
            botaoCursos.appendChild(botaoEstastiticas);
            botaoCursos.appendChild(botaoFisica);
            botaoCursos.appendChild(botaoLogistica);
            botaoCursos.appendChild(botaoMatematica);
            botaoCursos.appendChild(botaoQuimica);
            botaoCursos.appendChild(botaoTecnologiaDesenvolvimentoMobile);
            botaoCursos.appendChild(botaoTecnologiaDesenvolvimentoWeb);

        } 
        
        else if (areas === 'LINGUAGENS') {
            //Voltar a telaa 
            const botaoHome = document.createElement('button');
            botaoHome.innerHTML = 'VOLTAR';
            botaoHome.classList.add('cabecalho');
            botaohome.appendChild(botaoHome);
           
            botaoHome.style.width = '100px'
            botaoHome.style.height = '60px'
            botaoHome.style.borderRadius = '15px'
            botaoHome.style.border ='unset'
            botaoHome.style.backgroundColor = '#e8e8e8'
            botaoHome.style.color = '#212121'
            botaoHome.style.fontSynthesisWeight = '1000';
            botaoHome.style.fontSize = '17px'
            botaoHome.style.boxShadow = '4px 8px 19px -3px rgba(0,0,0,0.27)';
            botaoHome.style.cursor = 'pointer';
            botaoHome.style.color = '#E8F1F2'
            botaoHome.style.backgroundColor = '#247BA0'
            botaoHome.style.zIndex = '1';
            botaoHome.style.fontWeight = 'bold';
            botaoHome.onclick = function(){
               linguagens();
            }
            //Criando as variaves dos botões :
            const botaoCinema = document.createElement('button');
            const botaoJornalismo = document.createElement('button');
            const botaoLetras = document.createElement('button');
            const botaoLinguistica = document.createElement('button');
            const botaoProducaoCultural = document.createElement('button');
            const botaoRadioTv = document.createElement('button');


            //Valores dos botões:
            botaoCinema.innerHTML = 'Cinema';
            botaoJornalismo.innerHTML = 'Jornalismo';
            botaoLetras.innerHTML = 'Letras';
            botaoLinguistica.innerHTML = 'Linguística';
            botaoProducaoCultural.innerHTML = 'Produção Cultural';
            botaoRadioTv.innerHTML = 'Rádio e TV';



            // Adicionando as classes CSS aos botões:

            botaoCinema.classList.add('botao-curso');
            botaoJornalismo.classList.add('botao-curso');
            botaoLetras.classList.add('botao-curso');
            botaoRadioTv.classList.add('botao-curso');
            botaoLinguistica.classList.add('botao-curso');
            botaoProducaoCultural.classList.add('botao-curso');

             // Funçao dos botoes
             botaoCinema.onclick = function () {
                cursoEscolhido = "Cinema"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Cria diretores e expande para a área de roteiro, fotografia, produção, direção de arte e edição de filmes. O profissional de Cinema dirige, coordena e supervisiona aspectos artísticos, técnicos e financeiros referentes ao desenvolvimento de produções.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Faculdade de Belas Artes (São Paulo)"
            };

            botaoJornalismo.onclick = function () {
                cursoEscolhido = "Joçrnalismo"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "O curso engloba Técnicas de Redação e Fotografia, além de atividades em laboratórios de Rádio, TV e internet. Ele forma profissionais capazes de produzir notícias para meios de comunicação.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Anhanguera (EaD);<br> Cruzeiro do Sul (EaD);<br> Unitoledo"
            };

            botaoLetras.onclick = function () {
                cursoEscolhido = "Letras"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "O curso envolve o estudo da linguagem e da literatura, podendo atuar até mesmo na área de língua estrangeira. Os graduados conseguem atuar nas áreas de educação, tradução, interpretação, revisão de textos, entre outras.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UFMG;<br> UNESP;<br> UFSCAR"
            };

            botaoLinguistica.onclick = function () {
                cursoEscolhido = "Linguística"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "O curso forma profissionais que refletem criticamente sobre o funcionamento da língua e da linguagem. O profissional poderá analisar e elaborar dicionários e textos de diversos gêneros. Ele também possui a opção de se desenvolver nas áreas de docência e p<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Senac;<br> Uniasselvi (EaD);<br> Anhanguera;<br> Salesiano;<br> Unitoledo"
            };

            botaoProducaoCultural.onclick = function () {
                cursoEscolhido = "Produção Cultural"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "O curso envolve a atividade voltada à promoção de ações para o desenvolvimento artístico, cultural e educacional, como espetáculos musicais, teatrais, festivais, literatura, entre outros.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "Unifran (EaD);<br> Cruzeiro do Sul (EaD)"
            };

            botaoRadioTv.onclick = function () {
                cursoEscolhido = "Radio e TV"
                titulocurso.innerHTML = `${cursoEscolhido}!`;
                infoCrusos.innerHTML = ""
                botaoCursos.innerHTML = "";

                tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
                informacaoCursos.innerHTML = "Esse curso permite que, no mercado de trabalho, o profissional formado possa atuar em emissoras de rádio e televisão, produzindo, dirigindo e editando programas.<br>"

                titutlofaculdades.innerHTML = "FACULDADES";
                faculdades.innerHTML = "UAM;<br> Cruzeiro do Sul;<br> USJT"
            };
            

             //Adicionando os botões a página:
            botaoCursos.appendChild(botaoCinema);
            botaoCursos.appendChild(botaoJornalismo);
            botaoCursos.appendChild(botaoLetras);
            botaoCursos.appendChild(botaoLinguistica);
            botaoCursos.appendChild(botaoProducaoCultural);
            botaoCursos.appendChild(botaoRadioTv);
        }

        else if (areas === 'HUMANAS') {
            //Voltar a telaa 
            const botaoHome = document.createElement('button');
            botaoHome.innerHTML = 'VOLTAR';
            botaoHome.classList.add('cabecalho');
            botaohome.appendChild(botaoHome);
           
            botaoHome.style.width = '100px'
            botaoHome.style.height = '60px'
            botaoHome.style.borderRadius = '15px'
            botaoHome.style.border ='unset'
            botaoHome.style.backgroundColor = '#e8e8e8'
            botaoHome.style.color = '#212121'
            botaoHome.style.fontSynthesisWeight = '1000';
            botaoHome.style.fontSize = '17px'
            botaoHome.style.boxShadow = '4px 8px 19px -3px rgba(0,0,0,0.27)';
            botaoHome.style.cursor = 'pointer';
            botaoHome.style.color = '#E8F1F2'
            botaoHome.style.backgroundColor = '#247BA0'
            botaoHome.style.zIndex = '1';
            botaoHome.style.fontWeight = 'bold';

            botaoHome.onclick = function(){
               humanas();
            }
            //Criando as variaves dos botões :
            const botaoAdministracao = document.createElement('button');
            const botaoDireito = document.createElement('button');
            const botaoJornalismo = document.createElement('button');
            const botaoMarketing = document.createElement('button');
            const botaoPedagogia = document.createElement('button');
            const botaoPsicologia = document.createElement('button');
            const botaopublicidadePropaganda = document.createElement('button');
            const botaoCienciasContabeis = document.createElement('button');
            const botaoEconomia = document.createElement('button');
            const botaoRelacoesInternacionais = document.createElement('button');
            const botaoSociologia = document.createElement('button');
            const botaoFilosofia = document.createElement('button');
            const botaoRelacoesPublicas = document.createElement('button');
            const botaoServicoSocial = document.createElement('button');
            const botaoGeografia = document.createElement('button');
            const botaoHistoria = document.createElement('button');
            

            //Valores dos botões:
            botaoAdministracao.innerHTML = 'Administração';
            botaoDireito.innerHTML = 'Direito';
            botaoJornalismo.innerHTML = 'Jornalismo';
            botaoMarketing.innerHTML = 'Marketing';
            botaoPedagogia.innerHTML = 'Pedagogia';
            botaoPsicologia.innerHTML = 'Psicologia';
            botaopublicidadePropaganda.innerHTML = 'Publicidade e Propaganda';
            botaoCienciasContabeis.innerHTML = 'Ciências Contábeis';
            botaoEconomia.innerHTML = 'Economia';
            botaoRelacoesInternacionais.innerHTML = 'Relações Internacionais';
            botaoSociologia.innerHTML = 'Sociologia';
            botaoFilosofia.innerHTML = 'Filosofia';
            botaoRelacoesPublicas.innerHTML = 'Relações Públicas';
            botaoServicoSocial.innerHTML = 'Serviço Social';
            botaoGeografia.innerHTML = 'Geografia';
            botaoHistoria.innerHTML = 'História';         
            



            // Adicionando as classes CSS aos botões:

            botaoAdministracao.classList.add('botao-curso');
            botaoDireito.classList.add('botao-curso');
            botaoJornalismo.classList.add('botao-curso');
            botaoMarketing.classList.add('botao-curso');
            botaoPedagogia.classList.add('botao-curso');
            botaoPsicologia.classList.add('botao-curso');
            botaopublicidadePropaganda.classList.add('botao-curso');
            botaoCienciasContabeis.classList.add('botao-curso');
            botaoEconomia.classList.add('botao-curso');
            botaoRelacoesInternacionais.classList.add('botao-curso');
            botaoSociologia.classList.add('botao-curso');
            botaoFilosofia.classList.add('botao-curso');
            botaoRelacoesPublicas.classList.add('botao-curso');
            botaoServicoSocial.classList.add('botao-curso');
            botaoGeografia.classList.add('botao-curso');
            botaoHistoria.classList.add('botao-curso');
            
            
            
            
           // Funçao dos botoes
           botaoAdministracao.onclick = function () {
            cursoEscolhido = "Administração"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Quem se forma em Administração tem muitas possibilidades de atuação. Esse profissional pode trabalhar em diferentes setores de uma empresa, desde o RH até o Marketing<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "FAC-FEA;<br> Uni Salesiano; <br>Unip; <br>Uni Toledo Wyden;<br> UNIGUACAIRÁ; <br>UNOESTE"
        };

        botaoDireito.onclick = function () {
            cursoEscolhido = "Direito"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Visa formar pessoas que saibam aplicar as leis de um país em diferentes contextos. Há muitas oportunidades tanto no setor público, com concursos, quanto privado, em empresas, escritórios etc.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "FAC FEA; <br>UNIP;<br> UniToledo;<br> UniSalesiano;<br> Unip;<br> Uni Toledo Wyden;<br> UNIGUACAIRÁ; <br>Favi; UNOESTE"
        };

        botaoJornalismo.onclick = function () {
            cursoEscolhido = "Jornalismo"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "O Jornalismo é uma carreira dentro da Comunicação Social que prepara pessoas para produzirem notícias em diferentes meios de comunicação, como TV, jornais, revistas, rádio e internet.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;<br> Uni Toledo Wyden;<br> UNOESTE"
        };

        botaoMarketing.onclick = function () {
            cursoEscolhido = "Marketing"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Um profissional de Marketing é o responsável por pensar estrategicamente em formas de posicionar, vender e aprimorar produtos e serviços vendidos por uma empresa. Podem trabalhar com pesquisa de mercado, marketing digital, branding, marketing de produto<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;<br>Uni Toledo Wyden;"
        };

        botaoPedagogia.onclick = function () {
            cursoEscolhido = "Pedagogia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Pedagogia é a ciência que estuda o ensino e a aprendizagem e tem como objetivo preparar os alunos e alunas para trabalharem na área da educação.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "FAC-FEA;<br> Unip;<br> Uni Toledo Wyden;<br> UNIGUACAIRÁ;<br> Favi;<br> UNOESTE"
        };

        botaoPsicologia.onclick = function () {
            cursoEscolhido = "Psicologia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "A Psicologia pode ser entendida como a ciência que estuda o comportamento e a mente humana. Ela pode ser considerada uma ciência humana ou também pode ser vista como uma profissão da área da saúde.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "FAC-FEA; <br>Uni Salesiano; <br>Unip; Uni Toledo Wyden;<br> UNIGUACAIRÁ; <br>Favi; <br>UNOESTE"
        };

        botaopublicidadePropaganda.onclick = function () {
            cursoEscolhido = "Publicidade e Propaganda"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "A primeira está dentro da Comunicação Social, tem um viés mais criativo e prepara profissionais para atuarem em agências de publicidade, em sua grande maioria.Na graduação de Publicidade e Propaganda algumas das matérias são: audiovisual, redação publicit<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Uni Salesiano;<br> Unip;<br> Uni Toledo Wyden; <br>UNOESTE"
        };

        botaoCienciasContabeis.onclick = function () {
            cursoEscolhido = "Ciências Contábeis"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "O curso de Ciências Contábeis prepara pessoas para administrar contas, seja de empresas ou de pessoas físicas. A pessoa formada na área contábil faz o controle de gastos, lucro e tudo relacionado ao planejamento financeiro.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Uni Salesiano;<br> Unip;<br> Uni Toledo Wyden;<br> UNIGUACAIRÁ;<br> Favi; <br>UNOESTE"
        };

        botaoEconomia.onclick = function () {
            cursoEscolhido = "Economia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Alguém formado em Economia faz uma análise externa e macro do setor financeiro de uma empresa.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "FAC-FEA;<br> USP;<br> UNICAMP;"
        };

        botaoRelacoesInternacionais.onclick = function () {
            cursoEscolhido = "Relações Internacionais"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Visa formar pessoas capazes de estarem sempre atualizadas sobre notícias do mundo. Também são responsáveis por entenderem dinâmicas de diferentes nações, para que possam atuar no planejamento de políticas públicas, negociações e interações entre diferente<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;<br> USP;<br> PUCSP;<br> UNICEUB"
        };

        botaoSociologia.onclick = function () {
            cursoEscolhido = "Sociologia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "É a ciência que estuda a sociedade. A pessoa que se forma na área busca entender cada sociedade com suas particularidades, costumes e dinâmicas.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;<br> Anhanguera (EaD);<br> UFSM;<br> UFRJ"
        };

        botaoFilosofia.onclick = function () {
            cursoEscolhido = "Filosofia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Filosofia é a área que estuda o conhecimento e a existência humana.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;<br> UFN;<br> UCS;<br> USP"
        };

        botaoRelacoesPublicas.onclick = function () {
            cursoEscolhido = "Relações Públicas"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Relações Públicas está dentro da Comunicação Social e é a área responsável por formar profissionais que trabalham com a construção, e possíveis crises, de imagem de empresas e pessoas públicas.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "FECAP; <br>UNICSUL;<br> PUC Campinas"
        };

        botaoServicoSocial.onclick = function () {
            cursoEscolhido = "Serviço Social"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Uma pessoa que se forma em Serviço Social é habilitada para defender direitos sociais, construir políticas públicas e assegurar os direitos humanos de indivíduos.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;<br> UFRJ; <br>PUCSP; <br>UNESP; <br>UFPE"
        };

        botaoGeografia.onclick = function () {
            cursoEscolhido = "Geografia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "A Geografia é a ciência que estuda o planeta Terra e suas interações com diferentes elementos e o organismos.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip; <br>UFPR;<br> UFG;<br> UFRN"
        };

        botaoHistoria.onclick = function () {
            cursoEscolhido = "História"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "História é a ciência que estuda as ações humanas ao longo do tempo e do espaço. Uma historiadora ou um historiador faz essa análise por meio de registros históricos.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "Unip;"
        };

            botaoCursos.appendChild(botaoAdministracao);
            botaoCursos.appendChild(botaoDireito);
            botaoCursos.appendChild(botaoJornalismo);
            botaoCursos.appendChild(botaoMarketing);
            botaoCursos.appendChild(botaoPedagogia);
            botaoCursos.appendChild(botaoPsicologia);
            botaoCursos.appendChild(botaopublicidadePropaganda);
            botaoCursos.appendChild(botaoCienciasContabeis);
            botaoCursos.appendChild(botaoEconomia);
            botaoCursos.appendChild(botaoRelacoesInternacionais);
            botaoCursos.appendChild(botaoSociologia);
            botaoCursos.appendChild(botaoFilosofia);
            botaoCursos.appendChild(botaoRelacoesPublicas);
            botaoCursos.appendChild(botaoServicoSocial);
            botaoCursos.appendChild(botaoGeografia);
            botaoCursos.appendChild(botaoHistoria);
            
        }


        else if (areas === 'BIOLÓGICAS') {
            const botaoHome = document.createElement('button');
            botaoHome.innerHTML = 'VOLTAR';
            botaoHome.classList.add('cabecalho');
            botaohome.appendChild(botaoHome);
           
            botaoHome.style.width = '100px'
            botaoHome.style.height = '60px'
            botaoHome.style.borderRadius = '15px'
            botaoHome.style.border ='unset'
            botaoHome.style.backgroundColor = '#e8e8e8'
            botaoHome.style.color = '#212121'
            botaoHome.style.fontSynthesisWeight = '1000';
            botaoHome.style.fontSize = '17px'
            botaoHome.style.boxShadow = '4px 8px 19px -3px rgba(0,0,0,0.27)';
            botaoHome.style.cursor = 'pointer';
            botaoHome.style.color = '#E8F1F2'
            botaoHome.style.backgroundColor = '#247BA0'
            botaoHome.style.zIndex = '1';
            botaoHome.style.fontWeight = 'bold';
            botaoHome.onclick = function(){
               biologicos();
            }
            //Criando Variávieis dos botões:
            const botaoBiomedicina = document.createElement('button');
            const botaoEducacaoFisica = document.createElement('button');
            const botaoEnfermagem = document.createElement('button');
            const botaoFisioterapia = document.createElement('button');
            const botaoMedicina = document.createElement('button');
            const botaoMedicinaVeterinaria = document.createElement('button');
            const botaoNutricao = document.createElement('button');
            const botaoZootecnia = document.createElement('button');


            //Valores dos botões:
            botaoBiomedicina.innerHTML = 'Biomedicina';
            botaoEducacaoFisica.innerHTML = 'Educação Física';
            botaoEnfermagem.innerHTML = 'Enfermagem';
            botaoFisioterapia.innerHTML = 'Fisioterapia';
            botaoMedicina.innerHTML = 'Medicina';
            botaoMedicinaVeterinaria.innerHTML = 'Medicina Veterinária';
            botaoNutricao.innerHTML = 'Nutrição';
            botaoZootecnia.innerHTML = 'Zootecnia';
            

            //Adicionando estilo CSS nos botoes:
            botaoBiomedicina.classList.add('botao-curso');
            botaoEducacaoFisica.classList.add('botao-curso');
            botaoEnfermagem.classList.add('botao-curso');
            botaoFisioterapia.classList.add('botao-curso');
            botaoMedicina.classList.add('botao-curso');
            botaoMedicinaVeterinaria.classList.add('botao-curso');
            botaoNutricao.classList.add('botao-curso');
            botaoZootecnia.classList.add('botao-curso');


             // Funçao dos botoes
             botaoBiomedicina.onclick = function () {
            cursoEscolhido = "Biomedicina"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Estuda os processos biológicos e os fenômenos patológicos que afetam o organismo humano<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP;<br> UFMG;<br> UNIFESP;<br> UNICAMP;<br> UFRJ"
        };

        botaoEducacaoFisica.onclick = function () {
            cursoEscolhido = "Educação Física"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Trabalha com a promoção da saúde e bem-estar através da atividade física e do esporte<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP;<br> UNICAMP; <br>UFMG; <br>UFRGS; <br>UFRJ"
        };

        botaoEnfermagem.onclick = function () {
            cursoEscolhido = "Enfermagem"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Cuida da saúde e bem-estar de pacientes em hospitais, clínicas e consultórios<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP; <br>UFMG; <br>UNIFESP;<br> UNICAMP;<br> UFRJ"
        };

        botaoFisioterapia.onclick = function () {
            cursoEscolhido = "Fisioterapia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Atua na prevenção e tratamento de lesões e doenças que afetam o sistema musculoesquelético e neurológico<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP; <br>UFMG;<br> UNIFESP; <br>UNICAMP; <br>UFRJ"
        };

        botaoMedicina.onclick = function () {
            cursoEscolhido = "Medicina"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Estuda a prevenção, diagnóstico e tratamento de doenças em humanos; Realiza cirurgias e prescreve medicamentos.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP;<br> UFMG; <br>UNIFESP;<br> UNICAMP; <br>UFRJ"
        };

        botaoMedicinaVeterinaria.onclick = function () {
            cursoEscolhido = "Medicina veterinária"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Cuida da saúde e bem-estar de animais domésticos e selvagens<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP;<br> UFMG; <br>UFV; <br>UNESP;<br> UFRGS"
        };

        botaoNutricao.onclick = function () {
            cursoEscolhido = "Nutrição"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Atua na orientação e prescrição de dietas saudáveis para indivíduos e grupos<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP; <br>UFMG;<br> UNICAMP;<br> UFV; <br>UFRJ)"
        };

        botaoZootecnia.onclick = function () {
            cursoEscolhido = "Zootecnia"
            titulocurso.innerHTML = `${cursoEscolhido}!`;
            infoCrusos.innerHTML = ""
            botaoCursos.innerHTML = "";

            tituloInfoCursos.innerHTML = "DESCRIÇÃO:";
            informacaoCursos.innerHTML = "Estuda a criação e produção de animais para consumo humano.<br>"

            titutlofaculdades.innerHTML = "FACULDADES";
            faculdades.innerHTML = "USP;<br> UFV;<br> UFMG; <br>UFRGS;<br> UNESP"
        };


            //Adicionando botoes a pagina:
            botaoCursos.appendChild(botaoBiomedicina);
            botaoCursos.appendChild(botaoEducacaoFisica);
            botaoCursos.appendChild(botaoEnfermagem);
            botaoCursos.appendChild(botaoFisioterapia);
            botaoCursos.appendChild(botaoMedicina);
            botaoCursos.appendChild(botaoMedicinaVeterinaria);
            botaoCursos.appendChild(botaoNutricao);
            botaoCursos.appendChild(botaoZootecnia);
        }

        
    }
});

function home(){
    window.location.href = 'paginainicial.html'
}

function exatas() {
    areas = "EXATAS"; // Define a variável areas como "EXATAS"
    window.location.href = 'paginacursos.html?area=' + encodeURIComponent(areas);
    
}
 

function linguagens() {
    areas = "LINGUAGENS"; // Define a variável areas como "LINGUAGENS"
    window.location.href = 'paginacursos.html?area=' + encodeURIComponent(areas);
}


function humanas() {
    areas = "HUMANAS"; // Define a variável areas como "HUMANAS"
    window.location.href = 'paginacursos.html?area=' + encodeURIComponent(areas);
}


function biologicos() {
    areas = "BIOLÓGICAS"; // Define a variável areas como "BIOLÓGICOS"
    window.location.href = 'paginacursos.html?area=' + encodeURIComponent(areas);
}






