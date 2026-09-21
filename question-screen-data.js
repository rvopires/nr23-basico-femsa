/**
 * Conteúdo — NR 23 Brigada de Incêndio (Intermediário) · FEMSA / Coca-Cola
 * Gerado a partir de Roteiro-NR23-Brigada-Incendio.txt
 *
 * Tipos: cover | content | video | image | quiz-intro | question | order | finale
 *
 * Vídeos: SEM embed — só nome + scene/brief no frame "Vídeo a gravar".
 *         Depois cole embed/playerId Panda em cada tela type:"video".
 * Fotos: caminhos placeholder em assets/fotos/ — substitua pelos arquivos reais.
 *
 * Atividades mapeadas para o motor atual:
 *  M1 Contra o Alarme → question (4 opções)
 *  M2 Apaga ou Alimenta? → question (2 opções)
 *  M3 Combinação Certa → question
 *  M4 Caça ao Risco → question (hotspot do roteiro vira perguntas até haver foto clicável)
 *  M5 Guerra de Palpites → question V/F
 *  M6 Corrente de Decisão → question em cadeia (1 cenário do roteiro)
 *  M7 Roleta da RCP → order (5 etapas)
 */
window.QUESTION_SCREEN_SESSION = {
  "meta": {
    "title": "NR 23 — Brigada de Incêndio",
    "brand": "TecnoCursos",
    "musicSrc": "musica/musica_foco.mp3"
  },
  "modules": [
    {
      "id": 1,
      "title": "Fundamentos da Brigada de Incêndio",
      "meta": "Vídeos + texto · desafio Contra o Alarme",
      "titleUnlock": {
        "title": "GUARDIÃO DO ALERTA",
        "body": "Você já sabe o que a brigada faz e a ordem dos primeiros minutos.",
        "icon": "🚨"
      },
      "screens": [
        {
          "id": "m1-cover",
          "type": "cover",
          "title": "Módulo 1 — Fundamentos da Brigada de Incêndio",
          "subtitle": "Abertura, composição da brigada e procedimentos básicos — do alerta ao confinamento.",
          "transcript": "Módulo 1: Fundamentos da Brigada de Incêndio.",
          "image": "assets/fotos/capa-modulo1.png",
          "imagePosition": "18% 82%"
        },
        {
          "id": "m1-v-abertura",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Os Primeiros Minutos Decidem Tudo",
          "duration": "0:35",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=32bc5670-14b3-4323-b7ac-486cd06a3de6",
          "playerId": "panda-32bc5670-14b3-4323-b7ac-486cd06a3de6",
          "scene": "Abertura com a instrutora Fernanda + takes no escritório FEMSA",
          "brief": "Fernanda se apresenta; cortes rápidos: extintor, rota de fuga, colaboradores, quadro elétrico; título sobre fundo vermelho institucional.",
          "body": "Nos primeiros minutos de um princípio de incêndio, quem está treinado faz a diferença entre um susto controlado e uma tragédia. Neste treinamento de NR 23 você aprende a prevenir, combater o início do fogo, apoiar na evacuação e prestar primeiros socorros.",
          "transcript": "Vídeo de abertura: os primeiros minutos decidem tudo."
        },
        {
          "id": "m1-v-oque",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O Que É a Brigada de Incêndio",
          "duration": "0:40",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=25fb4bf7-7a17-4002-ac13-41773c05cf26",
          "playerId": "panda-25fb4bf7-7a17-4002-ac13-41773c05cf26",
          "scene": "Brigadista com colete laranja no open space FEMSA",
          "brief": "Colaborador de colete e crachá circula pelo escritório até o quadro com organograma da brigada.",
          "body": "A Brigada de Incêndio é um grupo organizado de colaboradores, treinados para prevenir e combater um princípio de incêndio, evacuar e prestar primeiros socorros. Na FEMSA, são colegas do próprio andar. Objetivo: proteger vida e patrimônio até a chegada do socorro especializado.",
          "transcript": "Vídeo: o que é a Brigada de Incêndio."
        },
        {
          "id": "m1-composicao",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Composição da Brigada e Atribuições",
          "cards": [
            {
              "icon": "👔",
              "title": "Coordenador Geral",
              "body": "Responsável institucional pela brigada perante a FEMSA."
            },
            {
              "icon": "🧭",
              "title": "Líder da Brigada",
              "body": "Comanda a ação nos primeiros minutos de qualquer emergência."
            },
            {
              "icon": "🦺",
              "title": "Brigadistas",
              "body": "Atuam na prevenção, combate ao princípio de incêndio, abandono de área e primeiros socorros."
            }
          ],
          "items": [
            {
              "icon": "🔍",
              "title": "Prevenção:",
              "text": "analisar os riscos existentes no local"
            },
            {
              "icon": "📢",
              "title": "Comunicar:",
              "text": "informar ao coordenador irregularidades de prevenção e proteção"
            },
            {
              "icon": "🗣️",
              "title": "Orientar:",
              "text": "orientar colaboradores do setor sobre prevenção e proteção contra incêndios"
            }
          ],
          "transcript": "Composição da brigada: coordenador, líder e brigadistas; ações de prevenção no dia a dia."
        },
        {
          "id": "m1-v-procedimentos",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Procedimentos Básicos: do Alerta ao Confinamento",
          "duration": "1:25",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7df6c91a-ffbc-4d2c-8d9a-467a93a10740",
          "playerId": "panda-7df6c91a-ffbc-4d2c-8d9a-467a93a10740",
          "scene": "Fernanda em câmera + corte de energia e fila de evacuação",
          "brief": "Seis passos: alerta, análise, corte de energia, abandono, primeiros socorros e confinamento/extinção.",
          "body": "Alerta pelos meios disponíveis → líder analisa e decide (aciona Bombeiros se preciso) → corte de energia no quadro → abandono a no mínimo 100 m do sinistro → primeiros socorros → confinamento para evitar propagação e eliminar o sinistro.",
          "transcript": "Vídeo: procedimentos básicos de emergência."
        },
        {
          "id": "m1-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Contra o Alarme",
          "count": 4,
          "minCorrect": 3,
          "icon": "🚨",
          "body": "4 perguntas cronometradas. Mínimo de <strong>3 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 1: Contra o Alarme."
        },
        {
          "id": "m1-q1",
          "type": "question",
          "question": "O que é a Brigada de Incêndio?",
          "alternatives": [
            {
              "id": "a",
              "text": "Um setor exclusivo da segurança patrimonial",
              "correct": false
            },
            {
              "id": "b",
              "text": "Grupo treinado e capacitado para prevenir, combater um princípio de incêndio, evacuar e prestar primeiros socorros",
              "correct": true
            },
            {
              "id": "c",
              "text": "Somente os bombeiros civis contratados",
              "correct": false
            },
            {
              "id": "d",
              "text": "Um grupo que só age depois que o Corpo de Bombeiros chega",
              "correct": false
            }
          ],
          "explanation": "A brigada é um grupo organizado de colaboradores capacitados para prevenir, combater, evacuar e prestar primeiros socorros.",
          "review": "Definição de Brigada de Incêndio",
          "transcript": "O que é a Brigada de Incêndio?",
          "image": "assets/fotos/m1=p1.png",
          "imagePosition": "center 28%"
        },
        {
          "id": "m1-q2",
          "type": "question",
          "question": "Quem comanda a ação nos primeiros minutos de uma emergência?",
          "alternatives": [
            {
              "id": "a",
              "text": "Qualquer visitante presente",
              "correct": false
            },
            {
              "id": "b",
              "text": "O Líder da Brigada",
              "correct": true
            },
            {
              "id": "c",
              "text": "Somente o Corpo de Bombeiros",
              "correct": false
            },
            {
              "id": "d",
              "text": "Ninguém, espera-se a chegada do socorro",
              "correct": false
            }
          ],
          "explanation": "O Líder da Brigada comanda a ação nos primeiros minutos.",
          "review": "Papel do Líder da Brigada",
          "transcript": "Quem comanda a ação nos primeiros minutos de uma emergência?",
          "image": "assets/fotos/m1=p2.png"
        },
        {
          "id": "m1-q3",
          "type": "question",
          "question": "Qual é a distância mínima recomendada no abandono de área?",
          "alternatives": [
            {
              "id": "a",
              "text": "10 metros",
              "correct": false
            },
            {
              "id": "b",
              "text": "50 metros",
              "correct": false
            },
            {
              "id": "c",
              "text": "100 metros",
              "correct": true
            },
            {
              "id": "d",
              "text": "Não há distância definida",
              "correct": false
            }
          ],
          "explanation": "No abandono de área, remova todos para um local seguro a no mínimo 100 metros do sinistro.",
          "review": "Distância mínima no abandono de área",
          "transcript": "Qual é a distância mínima recomendada no abandono de área?",
          "image": "assets/fotos/m1=p3.png"
        },
        {
          "id": "m1-q4",
          "type": "question",
          "question": "Qual é a ordem correta dos procedimentos básicos de emergência?",
          "alternatives": [
            {
              "id": "a",
              "text": "Alerta → Análise → Corte de energia → Abandono → Socorros → Confinamento",
              "correct": true
            },
            {
              "id": "b",
              "text": "Confinamento → Alerta → Abandono",
              "correct": false
            },
            {
              "id": "c",
              "text": "Abandono → Alerta → Corte de energia",
              "correct": false
            },
            {
              "id": "d",
              "text": "Análise → Confinamento → Alerta",
              "correct": false
            }
          ],
          "explanation": "A sequência é: alerta, análise, corte de energia, abandono, primeiros socorros e confinamento.",
          "review": "Ordem dos procedimentos básicos",
          "transcript": "Qual é a ordem correta dos procedimentos básicos de emergência?",
          "image": "assets/fotos/m1=p4.png"
        }
      ]
    },
    {
      "id": 2,
      "title": "O Fogo: Teoria e Métodos de Extinção",
      "meta": "Vídeos + texto · desafio Apaga ou Alimenta?",
      "titleUnlock": {
        "title": "MESTRE DO TETRAEDRO",
        "body": "Você entende o fogo e sabe o que o apaga — ou o alimenta.",
        "icon": "🔥"
      },
      "screens": [
        {
          "id": "m2-cover",
          "type": "cover",
          "title": "Módulo 2 — O Fogo: Teoria e Métodos de Extinção",
          "subtitle": "Tetraedro do fogo e os três métodos: abafamento, resfriamento e retirada do material.",
          "transcript": "Módulo 2: O Fogo — teoria e métodos de extinção.",
          "image": "assets/fotos/m2-p1.png"
        },
        {
          "id": "m2-v-oque",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O Que É o Fogo, Afinal?",
          "duration": "0:30",
          "scene": "Animação estilo Pixar — chama estilizada",
          "brief": "Chama sobre madeira em fundo escuro; câmera gira revelando estrutura interna; vira definição técnica.",
          "body": "O fogo é uma reação química com desprendimento de luz e calor. Entender como essa reação acontece é o que separa quem teme o fogo de quem sabe controlá-lo.",
          "transcript": "Vídeo: o que é o fogo."
        },
        {
          "id": "m2-v-tetraedro",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O Tetraedro do Fogo",
          "duration": "0:55",
          "scene": "Animação 3D do tetraedro do fogo",
          "brief": "Quatro faces: calor, comburente (oxigênio), material combustível e reação em cadeia.",
          "body": "Para o fogo existir: calor, comburente (oxigênio), material combustível e reação em cadeia. Remova um dos quatro lados e o fogo se apaga.",
          "transcript": "Vídeo: o tetraedro do fogo."
        },
        {
          "id": "m2-v-metodos",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Métodos de Extinção: Abafamento, Resfriamento e Retirada",
          "duration": "1:15",
          "scene": "Fernanda em câmera + animações de abafamento e resfriamento",
          "brief": "Abafamento (oxigênio), resfriamento (calor/água) e retirada do material combustível.",
          "body": "Abafamento retira o oxigênio (abaixo de 13% não sustenta fogo). Resfriamento retira o calor, geralmente com água. Retirada do material elimina o combustível. Essa base define qual extintor usar.",
          "transcript": "Vídeo: métodos de extinção."
        },
        {
          "id": "m2-transmissao",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Transmissão de Calor",
          "cards": [
            {
              "icon": "🔗",
              "title": "Condução",
              "body": "Transmite a temperatura molécula a molécula. Ex.: colher na água fervente."
            },
            {
              "icon": "🌬️",
              "title": "Convecção",
              "body": "Ar quente sobe e encontra ar frio, formando looping. Pode atingir o ponto de fulgor e iniciar novo foco."
            },
            {
              "icon": "☀️",
              "title": "Irradiação",
              "body": "Transmissão por ondas caloríferas de uma fonte de calor, como o sol."
            }
          ],
          "note": {
            "label": "Por que importa",
            "text": "Explica por que um incêndio pode se espalhar sem contato direto com a chama."
          },
          "transcript": "Três formas de transmissão de calor: condução, convecção e irradiação."
        },
        {
          "id": "m2-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Apaga ou Alimenta?",
          "count": 5,
          "minCorrect": 4,
          "icon": "🧯",
          "body": "Decida se a ação <strong>APAGA</strong> ou <strong>ALIMENTA</strong> o fogo. Mínimo de <strong>4 acertos</strong> em 5.",
          "transcript": "Desafio do módulo 2: Apaga ou Alimenta?"
        },
        {
          "id": "m2-q1",
          "type": "question",
          "question": "Cobrir a chama com uma manta grossa e abafada…",
          "alternatives": [
            {
              "id": "a",
              "text": "APAGA",
              "correct": true
            },
            {
              "id": "b",
              "text": "ALIMENTA",
              "correct": false
            }
          ],
          "explanation": "Retira o oxigênio do ar (abafamento).",
          "review": "Abafamento com manta",
          "transcript": "Cobrir a chama com uma manta grossa e abafada…",
          "image": "assets/fotos/m2-p9.png"
        },
        {
          "id": "m2-q2",
          "type": "question",
          "question": "Uma corrente de ar entrando por uma janela aberta perto do foco de fogo…",
          "alternatives": [
            {
              "id": "a",
              "text": "APAGA",
              "correct": false
            },
            {
              "id": "b",
              "text": "ALIMENTA",
              "correct": true
            }
          ],
          "explanation": "Mais ar = mais comburente (oxigênio) disponível.",
          "review": "Corrente de ar perto do foco",
          "transcript": "Uma corrente de ar entrando por uma janela aberta perto do foco de fogo…",
          "image": "assets/fotos/m2-p10.png"
        },
        {
          "id": "m2-q3",
          "type": "question",
          "question": "Jogar água diretamente sobre a base da chama…",
          "alternatives": [
            {
              "id": "a",
              "text": "APAGA",
              "correct": true
            },
            {
              "id": "b",
              "text": "ALIMENTA",
              "correct": false
            }
          ],
          "explanation": "Retira o calor (resfriamento).",
          "review": "Resfriamento com água",
          "transcript": "Jogar água diretamente sobre a base da chama…",
          "image": "assets/fotos/m2-p11.png"
        },
        {
          "id": "m2-q4",
          "type": "question",
          "question": "Deixar caixas de papelão empilhadas perto de um ponto que está esquentando…",
          "alternatives": [
            {
              "id": "a",
              "text": "APAGA",
              "correct": false
            },
            {
              "id": "b",
              "text": "ALIMENTA",
              "correct": true
            }
          ],
          "explanation": "Mantém material combustível disponível.",
          "review": "Combustível perto de calor",
          "transcript": "Deixar caixas de papelão empilhadas perto de um ponto que está esquentando…",
          "image": "assets/fotos/m2-p12.png"
        },
        {
          "id": "m2-q5",
          "type": "question",
          "question": "Retirar o material que está queimando para uma área isolada…",
          "alternatives": [
            {
              "id": "a",
              "text": "APAGA",
              "correct": true
            },
            {
              "id": "b",
              "text": "ALIMENTA",
              "correct": false
            }
          ],
          "explanation": "Elimina o material combustível do ambiente.",
          "review": "Retirada do material combustível",
          "transcript": "Retirar o material que está queimando para uma área isolada…",
          "image": "assets/fotos/m2-p1.png"
        }
      ]
    },
    {
      "id": 3,
      "title": "Classes de Incêndio e Extintores",
      "meta": "Vídeos + texto · desafio Combinação Certa",
      "titleUnlock": {
        "title": "AGENTE CERTO",
        "body": "Você escolhe a classe e o extintor corretos.",
        "icon": "🧯"
      },
      "screens": [
        {
          "id": "m3-cover",
          "type": "cover",
          "title": "Módulo 3 — Classes de Incêndio e Extintores",
          "subtitle": "Classes A, B, C e D e como operar água, PQS e CO₂.",
          "transcript": "Módulo 3: Classes de Incêndio e Extintores.",
          "image": "assets/fotos/m3-p1.png"
        },
        {
          "id": "m3-v-classes",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "As 4 Classes de Incêndio",
          "duration": "1:05",
          "scene": "Animação das 4 classes + cenas reais no escritório",
          "brief": "Classe A papel/tecido/madeira; B líquidos/gases; C elétricos energizados; D metais pirofóricos.",
          "body": "Classe A: sólidos combustíveis (queimam em superfície e profundidade, deixam resíduos). Classe B: líquidos e gases (só superfície, sem resíduos). Classe C: equipamentos elétricos energizados — sem energia viram Classe A. Classe D: metais pirofóricos (mais raros no escritório).",
          "transcript": "Vídeo: as 4 classes de incêndio."
        },
        {
          "id": "m3-v-agua-pqs",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Extintores de Água e PQS: Como Operar",
          "duration": "1:25",
          "scene": "Demonstração real no corredor FEMSA (sem fogo)",
          "brief": "Retirar da parede, tirar trava, jato em ziguezague na base; PQS a 4–6 m formando nuvem.",
          "body": "Água: 10 L, alcance 8–10 m. PQS: 1 a 12 kg, aproximar 4–6 m, jato horizontal em ziguezague. Sempre: parede → trava → mangueira → base do fogo.",
          "transcript": "Vídeo: operar extintores de água e PQS."
        },
        {
          "id": "m3-v-co2",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Extintor de CO₂ e o Uso Indevido",
          "duration": "0:45",
          "scene": "Demonstração CO₂ + alerta legal",
          "brief": "Segurar o punho isolante (nunca a mangueira fria); uso indevido é crime.",
          "body": "CO₂: 4–6 kg, alcance 2–4 m. Empunhe o punho isolante — a mangueira fica extremamente fria. Aproximar a 4 m, nuvem em ziguezague. Uso indevido fora de emergência é crime contra o patrimônio físico e humano.",
          "transcript": "Vídeo: extintor de CO₂ e uso indevido."
        },
        {
          "id": "m3-agentes",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Qual Agente Extintor Usar em Cada Classe",
          "cards": [
            {
              "icon": "💧",
              "title": "Água",
              "body": "Indicada para Classe A."
            },
            {
              "icon": "☁️",
              "title": "Pó Químico Seco (PQS)",
              "body": "Indicado para Classes B e C."
            },
            {
              "icon": "🫧",
              "title": "Gás Carbônico (CO₂)",
              "body": "Classes B e C — especialmente equipamentos elétricos sensíveis."
            }
          ],
          "items": [
            {
              "icon": "🧵",
              "title": "Mangueira:",
              "text": "fibra sintética com revestimento de borracha; 15 ou 30 m (30 m não é mais usado)"
            },
            {
              "icon": "🚪",
              "title": "Hidrante / abrigo:",
              "text": "chapa de aço, porta com ventilação e visor “Incêndio”, suporte em meia-lua"
            }
          ],
          "transcript": "Tabela agente x classe e equipamentos de apoio."
        },
        {
          "id": "m3-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Combinação Certa",
          "count": 4,
          "minCorrect": 3,
          "icon": "🎯",
          "body": "Combine a <strong>classe de incêndio</strong> com o <strong>agente extintor</strong> certo. Mínimo de <strong>3 acertos</strong>.",
          "transcript": "Desafio do módulo 3: Combinação Certa."
        },
        {
          "id": "m3-q1",
          "type": "question",
          "question": "Classe A — papel, tecido, madeira. Qual agente?",
          "alternatives": [
            {
              "id": "a",
              "text": "Água",
              "correct": true
            },
            {
              "id": "b",
              "text": "Pó Químico Seco",
              "correct": false
            },
            {
              "id": "c",
              "text": "CO₂",
              "correct": false
            }
          ],
          "explanation": "Água é indicada para Classe A.",
          "review": "Agente para Classe A",
          "transcript": "Classe A — papel, tecido, madeira. Qual agente?",
          "image": "assets/fotos/m3-p8.png"
        },
        {
          "id": "m3-q2",
          "type": "question",
          "question": "Classe B — álcool, gasolina, GLP. Qual agente?",
          "alternatives": [
            {
              "id": "a",
              "text": "Água",
              "correct": false
            },
            {
              "id": "b",
              "text": "Pó Químico Seco",
              "correct": true
            },
            {
              "id": "c",
              "text": "Nenhum dos anteriores",
              "correct": false
            }
          ],
          "explanation": "PQS é indicado para Classes B e C. (CO₂ também serve em B/C; nesta rodada o gabarito do roteiro é PQS.)",
          "review": "Agente para Classe B",
          "transcript": "Classe B — álcool, gasolina, GLP. Qual agente?",
          "image": "assets/fotos/m3-p9.png"
        },
        {
          "id": "m3-q3",
          "type": "question",
          "question": "Classe C — quadro elétrico energizado. Qual agente?",
          "alternatives": [
            {
              "id": "a",
              "text": "Água",
              "correct": false
            },
            {
              "id": "b",
              "text": "CO₂",
              "correct": true
            },
            {
              "id": "c",
              "text": "Qualquer um, tanto faz",
              "correct": false
            }
          ],
          "explanation": "CO₂ (ou PQS) para Classe C. Nunca água em equipamento energizado.",
          "review": "Agente para Classe C",
          "transcript": "Classe C — quadro elétrico energizado. Qual agente?",
          "image": "assets/fotos/m3-p10.png"
        },
        {
          "id": "m3-q4",
          "type": "question",
          "question": "Classe D — raspas de metal. Qual agente?",
          "alternatives": [
            {
              "id": "a",
              "text": "Agente extintor específico para metais",
              "correct": true
            },
            {
              "id": "b",
              "text": "Água",
              "correct": false
            },
            {
              "id": "c",
              "text": "Pó Químico Seco comum",
              "correct": false
            }
          ],
          "explanation": "Classe D exige agente específico para metais — não use água nem PQS comum.",
          "review": "Agente para Classe D",
          "transcript": "Classe D — raspas de metal. Qual agente?",
          "image": "assets/fotos/m3-p11.png"
        }
      ]
    },
    {
      "id": 4,
      "title": "Prevenção, Riscos e Ação em Emergência",
      "meta": "Vídeos + fotos + texto · desafio Caça ao Risco",
      "titleUnlock": {
        "title": "OLHO NO RISCO",
        "body": "Você previne no dia a dia e age nos primeiros segundos.",
        "icon": "👁️"
      },
      "screens": [
        {
          "id": "m4-cover",
          "type": "cover",
          "title": "Módulo 4 — Prevenção, Riscos e Ação em Emergência",
          "subtitle": "Hábitos de prevenção, primeiros segundos, rotas de fuga e riscos da edificação.",
          "transcript": "Módulo 4: Prevenção, riscos da edificação e ação em emergência.",
          "image": "assets/fotos/m4-p1.png"
        },
        {
          "id": "m4-v-prevenir",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Como Prevenir um Incêndio no Dia a Dia",
          "duration": "1:00",
          "scene": "Hábitos reais no escritório FEMSA",
          "brief": "Desligar carregadores, organizar cabos, lixeira limpa, checar equipamentos ao sair; alerta de gás.",
          "body": "Não use lixo como cinzeiro. Desligue equipamentos da tomada. Não cubra fios com tapetes nem use plugues em T. Antes de sair, confira se nada ficou ligado. Cheiro de gás: ventile, não mexa em interruptores nem acenda fósforo.",
          "transcript": "Vídeo: prevenção no dia a dia."
        },
        {
          "id": "m4-v-primeiros",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Em Caso de Incêndio: Como Agir nos Primeiros Segundos",
          "duration": "1:20",
          "scene": "Alarme, escadas (nunca elevador) e abafar roupas em chamas",
          "brief": "Avaliar à distância segura, dar alarme, ligar 193 se preciso; sair fechando portas sem trancar; rolar/cobertor se a roupa pegar fogo.",
          "body": "Avalie à distância segura. Dê o alarme e, se preciso, ligue 193. Se não dominar o fogo, saia fechando portas/janelas sem trancar, desligue a eletricidade. Use escada, nunca elevador. Se a roupa pegar fogo: não corra — role no chão ou use cobertor.",
          "transcript": "Vídeo: primeiros segundos em caso de incêndio."
        },
        {
          "id": "m4-foto-consequencias",
          "type": "image",
          "kicker": "📷 Foto",
          "title": "O Que Está em Jogo: Consequências de um Incêndio ou Explosão de Gás",
          "body": "Reforço visual de impacto (banco de imagens / fotojornalismo). Mostrar danos estruturais de forma respeitosa — sem vítimas nem conteúdo gráfico.",
          "icon": "🏚️",
          "image": "assets/fotos/m4-p1.png",
          "imageAlt": "Placeholder — substituir por foto de consequencias (banco de imagens)",
          "imageFit": "contain",
          "bullets": [
            "Buscar: fire damage aftermath building interior / gas explosion structural damage",
            "Fontes sugeridas: Getty, Reuters, AP",
            "Evitar imagens com vítimas"
          ],
          "transcript": "Foto: consequências de um incêndio ou explosão de gás."
        },
        {
          "id": "m4-foto-rotas",
          "type": "image",
          "kicker": "📷 Foto",
          "title": "Sinalização das Rotas de Fuga no Escritório FEMSA",
          "body": "Fotografar no próprio prédio: placas verdes, planta de rota de fuga, sinalização luminosa e ponto de encontro.",
          "icon": "🚪",
          "image": "assets/fotos/capa.png",
          "imageAlt": "Placeholder — substituir por fotos das rotas de fuga FEMSA",
          "imageFit": "contain",
          "bullets": [
            "Placas verdes de rota de fuga nos corredores",
            "Planta de rota de fuga perto de elevadores/escadas",
            "Sinalização luminosa acima das saídas",
            "Ponto de encontro externo (se houver placa)"
          ],
          "transcript": "Foto: sinalização das rotas de fuga no escritório FEMSA."
        },
        {
          "id": "m4-riscos",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Riscos Específicos da Edificação",
          "cards": [
            {
              "icon": "🏗️",
              "title": "Estruturais",
              "body": "Materiais inflamáveis, pé-direito baixo, ausência de rotas de fuga."
            },
            {
              "icon": "⚙️",
              "title": "Operacionais",
              "body": "Máquinas quentes, eletricidade, soldas, combustíveis."
            },
            {
              "icon": "🌡️",
              "title": "Ambientais",
              "body": "Calor, ventilação inadequada, poeiras combustíveis."
            },
            {
              "icon": "🧑",
              "title": "Humanos",
              "body": "Falta de treinamento, negligência, uso incorreto de EPIs."
            }
          ],
          "rules": [
            {
              "text": "Prevenir: mapear setores de risco, inspeções periódicas, armazenar inflamáveis corretamente, manter elétrica em dia, conhecer extintores/hidrantes/saídas, treinar e simular evacuação."
            },
            {
              "text": "Papel do brigadista: agir primeiro, identificar causas potenciais, inspecionar áreas e equipamentos, monitorar normas e comunicar irregularidades ao superior."
            }
          ],
          "transcript": "Tipos de risco da edificação e papel do brigadista."
        },
        {
          "id": "m4-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Caça ao Risco",
          "count": 4,
          "minCorrect": 3,
          "icon": "🔎",
          "body": "Identifique os riscos escondidos na cena (copa/reunião). A isca (extintor correto) <strong>não</strong> é risco. Mínimo de <strong>3 acertos</strong>.",
          "transcript": "Desafio do módulo 4: Caça ao Risco."
        },
        {
          "id": "m4-q1",
          "type": "question",
          "question": "Na copa: várias tomadas ligadas num único plugue em T atrás do micro-ondas. Isso é…",
          "alternatives": [
            {
              "id": "a",
              "text": "Risco — sobrecarga elétrica",
              "correct": true
            },
            {
              "id": "b",
              "text": "Situação segura e normal",
              "correct": false
            },
            {
              "id": "c",
              "text": "Isca — não é risco",
              "correct": false
            }
          ],
          "explanation": "Plugue em T sobrecarrega a tomada — risco real.",
          "review": "Plugue em T na copa",
          "transcript": "Na copa: várias tomadas ligadas num único plugue em T atrás do micro-ondas. Isso é…",
          "image": "assets/fotos/m4-p1.png"
        },
        {
          "id": "m4-q2",
          "type": "question",
          "question": "Fio da cafeteira passando por baixo de um tapete. Isso é…",
          "alternatives": [
            {
              "id": "a",
              "text": "Risco — fio coberto / aquecimento",
              "correct": true
            },
            {
              "id": "b",
              "text": "Organização correta de cabos",
              "correct": false
            },
            {
              "id": "c",
              "text": "Isca — não é risco",
              "correct": false
            }
          ],
          "explanation": "Não se deve cobrir fios elétricos com tapetes.",
          "review": "Fio sob o tapete",
          "transcript": "Fio da cafeteira passando por baixo de um tapete. Isso é…",
          "image": "assets/fotos/p23.png"
        },
        {
          "id": "m4-q3",
          "type": "question",
          "question": "Extintor de PQS fixado na parede, com o pino no lugar. Isso é…",
          "alternatives": [
            {
              "id": "a",
              "text": "Risco — precisa remover",
              "correct": false
            },
            {
              "id": "b",
              "text": "Isca — está correto, não é risco",
              "correct": true
            },
            {
              "id": "c",
              "text": "Risco — falta sinalização",
              "correct": false
            }
          ],
          "explanation": "Extintor instalado corretamente é isca — não clique como risco.",
          "review": "Extintor correto (isca)",
          "transcript": "Extintor de PQS fixado na parede, com o pino no lugar. Isso é…",
          "image": "assets/fotos/p24.1.png"
        },
        {
          "id": "m4-q4",
          "type": "question",
          "question": "Caixas de papelão empilhadas encostadas no quadro de distribuição elétrica. Isso é…",
          "alternatives": [
            {
              "id": "a",
              "text": "Risco — combustível junto à elétrica",
              "correct": true
            },
            {
              "id": "b",
              "text": "Armazenamento adequado",
              "correct": false
            },
            {
              "id": "c",
              "text": "Isca — não é risco",
              "correct": false
            }
          ],
          "explanation": "Material combustível junto ao quadro elétrico é risco grave.",
          "review": "Caixas no quadro elétrico",
          "transcript": "Caixas de papelão empilhadas encostadas no quadro de distribuição elétrica. Isso é…",
          "image": "assets/fotos/p24.2.png"
        }
      ]
    },
    {
      "id": 5,
      "title": "Psicologia em Emergências",
      "meta": "Vídeos + texto · desafio Guerra de Palpites",
      "titleUnlock": {
        "title": "LÍDER SERENO",
        "body": "Você reconhece reações e lidera com calma.",
        "icon": "🧠"
      },
      "screens": [
        {
          "id": "m5-cover",
          "type": "cover",
          "title": "Módulo 5 — Psicologia em Emergências",
          "subtitle": "Comportamento humano, reações ao perigo e liderança do brigadista.",
          "transcript": "Módulo 5: Psicologia em Emergências.",
          "image": "assets/fotos/m5-p1.png"
        },
        {
          "id": "m5-v-porque",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Por Que Falar de Psicologia em Emergência?",
          "duration": "0:35",
          "scene": "Brigadista observando o open space com calma",
          "brief": "Preparação técnica e emocional para manter a calma, orientar e liderar.",
          "body": "Emergências provocam medo, estresse e reações instintivas. O comportamento humano impacta combate, evacuação e primeiros socorros. O brigadista precisa estar preparado técnica e emocionalmente.",
          "transcript": "Vídeo: por que falar de psicologia em emergência."
        },
        {
          "id": "m5-v-reacoes",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Reações Psicológicas: Medo, Pânico e Paralisia",
          "duration": "1:15",
          "scene": "Animação Pixar das reações",
          "brief": "Negação, paralisia, pânico, obediência cega, histeria coletiva e heroísmo.",
          "body": "Conceitos: emergência, estresse, pânico e resiliência. Reações: negação, paralisia, pânico, obediência cega, histeria coletiva e heroísmo. Reconhecer é o primeiro passo para agir.",
          "transcript": "Vídeo: reações psicológicas em emergência."
        },
        {
          "id": "m5-v-lideranca",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O Papel e a Liderança do Brigadista em Momentos de Crise",
          "duration": "1:20",
          "scene": "Simulação de apoio emocional entre colegas",
          "brief": "Referência de calma: respiração guiada, contato visual, comandos simples, sem agressividade.",
          "body": "Pessoas seguem quem demonstra controle. Técnicas: respiração guiada, contato visual/verbal, comandos simples e diretos, evitar confrontos. Identificar colapso emocional evita o caos.",
          "transcript": "Vídeo: liderança do brigadista em crise."
        },
        {
          "id": "m5-cuidado",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Cuidando de Quem Cuida: Saúde Emocional do Brigadista",
          "items": [
            {
              "icon": "🧭",
              "text": "Reconhecer os próprios limites emocionais"
            },
            {
              "icon": "🧘",
              "text": "Controlar o estresse, manter o foco e a calma"
            },
            {
              "icon": "🤝",
              "text": "Buscar apoio psicológico após eventos críticos"
            }
          ],
          "quote": "Liderar em crise tem custo emocional real — reconhecer isso não é fraqueza, é preparo.",
          "transcript": "Saúde emocional do próprio brigadista."
        },
        {
          "id": "m5-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Guerra de Palpites",
          "count": 4,
          "minCorrect": 3,
          "icon": "🗳️",
          "body": "Verdadeiro ou falso. Mínimo de <strong>3 acertos</strong>. (Uma rodada era bônus 2× no roteiro.)",
          "transcript": "Desafio do módulo 5: Guerra de Palpites."
        },
        {
          "id": "m5-q1",
          "type": "question",
          "question": "O pânico é sempre a pior reação possível numa emergência e deve ser eliminado a qualquer custo.",
          "alternatives": [
            {
              "id": "a",
              "text": "Verdadeiro",
              "correct": false
            },
            {
              "id": "b",
              "text": "Falso",
              "correct": true
            }
          ],
          "explanation": "Pânico é uma reação intensa e desorganizada — o foco é reconhecê-la e conter com calma, não “eliminar a qualquer custo”.",
          "review": "Afirmativa sobre pânico",
          "transcript": "O pânico é sempre a pior reação possível numa emergência e deve ser eliminado a qualquer custo.",
          "image": "assets/fotos/m5-p1.png"
        },
        {
          "id": "m5-q2",
          "type": "question",
          "question": "Um brigadista calmo pode evitar o pânico se espalhar entre as outras pessoas.",
          "alternatives": [
            {
              "id": "a",
              "text": "Verdadeiro",
              "correct": true
            },
            {
              "id": "b",
              "text": "Falso",
              "correct": false
            }
          ],
          "explanation": "Pessoas tendem a seguir quem demonstra controle e calma.",
          "review": "Calma do brigadista",
          "transcript": "Um brigadista calmo pode evitar o pânico se espalhar entre as outras pessoas.",
          "image": "assets/fotos/pergunta-variacao.png"
        },
        {
          "id": "m5-q3",
          "type": "question",
          "question": "A obediência cega, seguir ordens sem questionar, é sempre uma reação positiva numa emergência.",
          "alternatives": [
            {
              "id": "a",
              "text": "Verdadeiro",
              "correct": false
            },
            {
              "id": "b",
              "text": "Falso",
              "correct": true
            }
          ],
          "explanation": "Obediência cega é uma reação possível — não é sempre positiva; o brigadista precisa de comunicação clara e segura.",
          "review": "Obediência cega",
          "transcript": "A obediência cega, seguir ordens sem questionar, é sempre uma reação positiva numa emergência.",
          "image": "assets/fotos/capa-modulo1.png"
        },
        {
          "id": "m5-q4",
          "type": "question",
          "question": "O brigadista também deve buscar apoio psicológico após viver um evento crítico.",
          "alternatives": [
            {
              "id": "a",
              "text": "Verdadeiro",
              "correct": true
            },
            {
              "id": "b",
              "text": "Falso",
              "correct": false
            }
          ],
          "explanation": "Cuidar de quem cuida faz parte do preparo.",
          "review": "Apoio psicológico após evento crítico",
          "transcript": "O brigadista também deve buscar apoio psicológico após viver um evento crítico.",
          "image": "assets/fotos/final.png"
        }
      ]
    },
    {
      "id": 6,
      "title": "Primeiros Socorros: Traumas e Emergências Clínicas",
      "meta": "Vídeos + ficha · desafio Corrente de Decisão",
      "titleUnlock": {
        "title": "PRIMEIRA RESPOSTA",
        "body": "Você sabe conduzir as emergências clínicas mais comuns.",
        "icon": "🩹"
      },
      "screens": [
        {
          "id": "m6-cover",
          "type": "cover",
          "title": "Módulo 6 — Primeiros Socorros",
          "subtitle": "Queimaduras, choque, hemorragia, desmaio, engasgo e convulsão.",
          "transcript": "Módulo 6: Primeiros Socorros — traumas e emergências clínicas.",
          "image": "assets/fotos/capa.png"
        },
        {
          "id": "m6-v-intro",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Primeiros Socorros: Você é a Primeira Resposta",
          "duration": "0:35",
          "scene": "Brigadista organizando kit de primeiros socorros",
          "brief": "Procedimentos simples e imediatos até o atendimento especializado — não é atendimento médico.",
          "body": "Primeiros socorros são procedimentos simples e imediatos no local do acidente ou mal súbito, até o atendimento especializado. Não é atendimento médico — mas salva vidas.",
          "transcript": "Vídeo: introdução aos primeiros socorros."
        },
        {
          "id": "m6-v-queimaduras",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Queimaduras: Causas, Classificação e Conduta",
          "duration": "1:25",
          "scene": "Animação das camadas da pele + conduta com pano úmido",
          "brief": "Graus 1–4; abafar/rolar; enxaguar químicos; cobrir úmido; nunca furar bolhas, gelo, pomada ou puxar roupa grudada.",
          "body": "Causas: físicas, químicas ou mecânicas. Graus: 1 eritema; 2 bolhas; 3 todas as camadas; 4 musculatura. Conduta: abafar/rolar; químicos → água corrente; cobrir com pano limpo e úmido; chamar socorro. Nunca: furar bolhas, gelo, pomadas, retirar roupa grudada.",
          "transcript": "Vídeo: queimaduras."
        },
        {
          "id": "m6-v-choque-hemorragia",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Choque Elétrico e Hemorragias: Agindo Rápido",
          "duration": "1:25",
          "scene": "Desligar energia antes do contato; curativo compressivo",
          "brief": "Choque: desligar energia → respiração/pulso → cobrir → SAMU. Hemorragia: compressão com gaze e socorro.",
          "body": "Choque: desligue a eletricidade antes de tocar; se não der, use material não condutor seco. Verifique respiração e pulso, cubra a área, chame o SAMU. Hemorragia: curativo compressivo e socorro imediato.",
          "transcript": "Vídeo: choque elétrico e hemorragias."
        },
        {
          "id": "m6-v-desmaio-engasgo",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Desmaio e Engasgo (Adulto e Bebê)",
          "duration": "1:30",
          "scene": "Posição de recuperação; Heimlich; manequim infantil",
          "brief": "Desmaio: arejado, pernas elevadas. Adulto: tosse → Heimlich → SAMU/RCP. Bebê: bruços no antebraço + palmadas nas costas.",
          "body": "Desmaio: local arejado, deitar de costas com pernas elevadas, afrouxar roupas, água após recuperar. Engasgo adulto: tossir → Heimlich → SAMU → RCP se necessário. Bebê: bruços no antebraço, palmadas leves nas costas (manequim no vídeo).",
          "transcript": "Vídeo: desmaio e engasgo."
        },
        {
          "id": "m6-v-convulsao",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Convulsão: Cuidados e Como Proteger a Vítima",
          "duration": "0:50",
          "scene": "Proteger cabeça, afastar objetos, pano entre os dentes com cuidado",
          "brief": "Não dar medicação/líquido/alimento; não deixar sozinha; chamar SAMU.",
          "body": "Deite no chão, afaste objetos, proteja a cabeça inclinada lateralmente, coloque pano entre os dentes com cuidado, chame o SAMU. Nunca medicação, líquido ou alimento; nunca deixe sozinha.",
          "transcript": "Vídeo: convulsão."
        },
        {
          "id": "m6-ficha",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Ficha Rápida: O Que Fazer em Cada Emergência",
          "items": [
            {
              "icon": "🔥",
              "title": "Queimaduras:",
              "text": "abafar/rolar; químico → água; cobrir úmido; socorro. Nunca furar bolhas, pomada ou puxar roupa grudada."
            },
            {
              "icon": "⚡",
              "title": "Choque elétrico:",
              "text": "desligar energia primeiro; respiração/pulso; cobrir; SAMU."
            },
            {
              "icon": "🩸",
              "title": "Hemorragia:",
              "text": "curativo compressivo; chamar socorro."
            },
            {
              "icon": "😵",
              "title": "Desmaio:",
              "text": "arejado; deitar com pernas elevadas; afrouxar roupas."
            },
            {
              "icon": "🫁",
              "title": "Engasgo adulto:",
              "text": "tosse → Heimlich → SAMU → RCP se necessário."
            },
            {
              "icon": "👶",
              "title": "Engasgo bebê:",
              "text": "bruços no antebraço + palmadas nas costas → SAMU → RCP se necessário."
            },
            {
              "icon": "🧠",
              "title": "Convulsão:",
              "text": "proteger cabeça; afastar objetos; pano entre dentes; nunca medicação/líquido; nunca deixar sozinha."
            }
          ],
          "transcript": "Ficha rápida de conduta em cada emergência."
        },
        {
          "id": "m6-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Corrente de Decisão",
          "count": 3,
          "minCorrect": 2,
          "icon": "⛓️",
          "body": "Cenário de choque elétrico: 3 decisões em sequência. Mínimo de <strong>2 acertos</strong>.",
          "transcript": "Desafio do módulo 6: Corrente de Decisão."
        },
        {
          "id": "m6-q1",
          "type": "question",
          "question": "Colega caído perto de uma tomada, aparentemente após choque. O que fazer primeiro?",
          "alternatives": [
            {
              "id": "a",
              "text": "Desligar a energia elétrica antes de qualquer contato",
              "correct": true
            },
            {
              "id": "b",
              "text": "Puxar a vítima pelo braço para afastá-la da tomada",
              "correct": false
            }
          ],
          "explanation": "Nunca toque a vítima enquanto a energia não for cortada.",
          "review": "Primeira decisão — choque elétrico",
          "transcript": "Colega caído perto de uma tomada, aparentemente após choque. O que fazer primeiro?",
          "image": "assets/fotos/capa.png"
        },
        {
          "id": "m6-q2",
          "type": "question",
          "question": "Energia desligada. Próximo passo?",
          "alternatives": [
            {
              "id": "a",
              "text": "Verificar a respiração e a pulsação da vítima",
              "correct": true
            },
            {
              "id": "b",
              "text": "Aplicar pomada na área da queimadura imediatamente",
              "correct": false
            }
          ],
          "explanation": "Pomadas em queimaduras podem piorar a lesão — a orientação nunca é essa.",
          "review": "Segunda decisão — avaliação",
          "transcript": "Energia desligada. Próximo passo?",
          "image": "assets/fotos/capafinal.png"
        },
        {
          "id": "m6-q3",
          "type": "question",
          "question": "Vítima respirando, com queimadura visível no braço. Ação final?",
          "alternatives": [
            {
              "id": "a",
              "text": "Cobrir com compressa limpa e úmida e chamar o SAMU",
              "correct": true
            },
            {
              "id": "b",
              "text": "Colocar gelo diretamente sobre a queimadura",
              "correct": false
            }
          ],
          "explanation": "Gelo direto na lesão agrava o dano nos tecidos — nunca aplique.",
          "review": "Terceira decisão — conduta final",
          "transcript": "Vítima respirando, com queimadura visível no braço. Ação final?",
          "image": "assets/fotos/pag18.png"
        }
      ]
    },
    {
      "id": 7,
      "title": "RCP, Infarto e Encerramento",
      "meta": "Vídeos + números · Roleta da RCP + certificado",
      "titleUnlock": {
        "title": "PRONTO PARA AGIR",
        "body": "Você reconhece AVC/infarto, sabe a RCP e quem ligar.",
        "icon": "❤️"
      },
      "screens": [
        {
          "id": "m7-cover",
          "type": "cover",
          "title": "Módulo 7 — RCP, Infarto e Encerramento",
          "subtitle": "AVC, infarto, passo a passo da RCP, números de emergência e certificado.",
          "transcript": "Módulo 7: RCP, infarto e encerramento.",
          "image": "assets/fotos/capafinal.png"
        },
        {
          "id": "m7-v-avc-infarto",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Reconhecendo o AVC e o Infarto",
          "duration": "1:30",
          "scene": "Sinais observáveis + animação de vaso bloqueado",
          "brief": "AVC: face/membros, fala, visão, dor de cabeça. Infarto: dor no peito irradiando. Conduta: acalmar, não deixar só, SAMU.",
          "body": "AVC: entupimento ou rompimento de vaso no cérebro — perda de força, fala, visão, cefaleia súbita, vertigem. Infarto: fluxo bloqueado no coração — dor no peito irradiando, ansiedade, sudorese. Em ambos: acalme, não deixe sozinha, chame o SAMU.",
          "transcript": "Vídeo: reconhecendo AVC e infarto."
        },
        {
          "id": "m7-v-rcp",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "RCP: O Passo a Passo Que Salva Vidas",
          "duration": "1:30",
          "scene": "Demonstração em manequim de treinamento",
          "brief": "Responsividade → vias aéreas → respiração/pulso (≤10 s) → chamar 192/193 → compressões.",
          "body": "PCR: interrupção abrupta de batimentos e respiração com perda de consciência. Avalie responsividade, abra vias aéreas, veja/ouça/sinta até 10 s, chame ajuda (192/193) e inicie compressões torácicas em superfície rígida, braços a 90°.",
          "transcript": "Vídeo: RCP passo a passo."
        },
        {
          "id": "m7-numeros",
          "type": "content",
          "kicker": "📄 Texto",
          "title": "Números de Emergência: Saiba Quem Chamar",
          "stats": [
            {
              "num": "192",
              "label": "SAMU — clínicas e traumas"
            },
            {
              "num": "193",
              "label": "Bombeiros — incêndio e resgate"
            },
            {
              "num": "190",
              "label": "Polícia Militar — segurança pública"
            }
          ],
          "note": {
            "label": "Interno FEMSA",
            "text": "Conheça também o procedimento de acionamento da portaria/segurança do prédio."
          },
          "transcript": "Números de emergência: 192, 193 e 190."
        },
        {
          "id": "m7-v-encerramento",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Encerramento: Você Está Pronto",
          "duration": "0:30",
          "scene": "Brigadista confiante no corredor + logo FEMSA",
          "brief": "Mensagem final e frase de fechamento do material NR 23.",
          "body": "Todos têm o direito de viver em um ambiente seguro, sem correr riscos desnecessários e sem receios de danos à sua saúde e vida. Você concluiu o NR 23 Intermediário — esteja sempre pronto.",
          "transcript": "Vídeo de encerramento."
        },
        {
          "id": "m7-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Roleta da RCP",
          "count": 1,
          "minCorrect": 1,
          "icon": "⚡",
          "body": "Monte a <strong>sequência correta da RCP</strong> arrastando as 5 etapas na ordem certa.",
          "transcript": "Desafio final: Roleta da RCP."
        },
        {
          "id": "m7-order-rcp",
          "type": "order",
          "kicker": "🔢 Roleta da RCP",
          "title": "Ordene as etapas da RCP",
          "body": "Toque nas etapas na ordem correta do procedimento.",
          "time": 30,
          "items": [
            {
              "key": "resp",
              "text": "Avaliar a responsividade — encostar e chamar alto",
              "rank": 0
            },
            {
              "key": "vias",
              "text": "Abrir as vias aéreas",
              "rank": 1
            },
            {
              "key": "pulso",
              "text": "Avaliar a respiração e o pulso (no máximo 10 segundos)",
              "rank": 2
            },
            {
              "key": "ajuda",
              "text": "Chamar ajuda — 192 (SAMU) ou 193 (Bombeiros)",
              "rank": 3
            },
            {
              "key": "comp",
              "text": "Iniciar as compressões torácicas",
              "rank": 4
            }
          ],
          "review": "Sequência correta da RCP",
          "transcript": "Ordene as 5 etapas da RCP."
        },
        {
          "id": "m7-finale",
          "type": "finale",
          "kicker": "🏆 Conclusão",
          "eyebrow": "Certificado de conclusão",
          "title": "Parabéns",
          "body": "Você concluiu o treinamento NR 23 — Curso de Prevenção de Incêndios (Intermediário).",
          "quote": "Todos têm o direito de viver em um ambiente seguro, sem correr riscos desnecessários e sem receios de danos à sua saúde e vida.",
          "chips": [
            "NR 23",
            "Brigada de Incêndio",
            "Intermediário"
          ],
          "transcript": "Parabéns pela conclusão do treinamento NR 23. Todos têm o direito de viver em um ambiente seguro.",
          "image": "assets/fotos/capafinal.png"
        }
      ]
    }
  ]
};
