var descricoesCursos = {
    "ads": "O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.",
    
    "automacao": "A automação é uma tecnologia que utiliza sistemas mecânicos, eletrônicos e computadorizados para a operação e controle da produção industrial. Por isso, física, eletricidade e cálculo são disciplinas fundamentais para o curso, assim como eletrônica analógica e digital. O aluno vai aprender a programar máquinas e microcontroladores, que são microprocessadores especializados para automação e controle de processos industriais.",
    
    "eletrotecnica": "O tecnólogo em Eletrônica Automotiva participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva; supervisiona, coordena e orienta equipes; realiza a padronização, mensuração e controle de qualidade em veículos especiais, de carga e de passeio; e especifica instrumentos e equipamentos para testes.",
    
    "fabricacao": "O egresso do CST em Fabricação Mecânica poderá atuar no projeto e na supervisão de sistemas de operações mecânicas, voltados a processos de fabricação. Domina o funcionamento, as características e a manutenção de máquinas operatrizes, máquinas-ferramenta, ferramentas e dispositivos em geral, podendo administrar todo um processo de produção mecânica.",
    
    "qualidade": "O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade, elabora documentação e relatórios, e desenvolve avaliação sistemática dos procedimentos internos e externos.",
    
    "logistica": "O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos.",
    
    "manufatura": "O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares.",
    
    "polimeros": "Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais.",
    
    "metalurgicos": "O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície. São atividades inerentes a gestão, controle dos processos e comercialização dos produtos metalúrgicos.",
    
    "projetos": "O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas.",
    
    "biomedicos": "O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletromédicos.",
    
    "empresarial": "O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos.",
    
    "ams_ds": "Curso na modalidade AMS (Articulação das Módulos Superiores), integrando o ensino técnico ao superior com foco em Desenvolvimento de Sistemas e capacitação tecnológica avançada para o mercado.",
    
    "ams_log": "Curso na modalidade AMS (Articulação das Módulos Superiores), integrando o ensino técnico ao superior com foco em Logística e gestão avançada de processos de cadeia de suprimentos."
};

function abrirCurso(selectObj) {
    var cursoEscolhido = selectObj.value;
    
    if (cursoEscolhido === "") {
        return;
    }

    var confirmar = confirm("Deseja realmente abrir a janela contendo informações sobre este curso?");

    if (confirmar) {
        var nomeCurso = selectObj.options[selectObj.selectedIndex].text;
        var textoDescricao = descricoesCursos[cursoEscolhido] || "Informações detalhadas em breve.";
        
        var novaJanela = window.open("", "_blank", "width=600,height=400");
        
        novaJanela.document.write(`
            <body style="font-family: Arial; background: #ffe4e1; padding: 25px; color: #333; text-align: justify;">
                <h2 style="color: #d81b60; text-align: center;">${nomeCurso}</h2>
                <p style="font-size: 13px; line-height: 1.5;">${textoDescricao}</p>
                
                <div style="text-align: center; margin-top: 25px;">
                    <a href="https://fatecsorocaba.cps.sp.gov.br/tipo-curso-fatec/curso-superior-de-tecnologia-presencial/" target="_blank" style="background-color: #d81b60; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 14px;">Mais informações clique aqui</a>
                </div>

                <p style="text-align: center; margin-top: 20px;"><b>Fatec Sorocaba</b></p>
            </body>
        `);
    } else {
        selectObj.value = "";
    }
}