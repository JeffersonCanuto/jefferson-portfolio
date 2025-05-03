import { ExperienceStrings } from "@/types/pages/Experiences";

const experienceStrings:Record<"en" | "br", ExperienceStrings> = {
    en: {
        first: {
            description: {
                title: "In 2019, I started my career as a Software Engineer working as a Fullstack Developer for LOGICA SISTEMAS DE INFORMACAO EIRELI, which is a small-sized \
                    company that provides services for the Telecom industry. As my main attributions, I was in charge of designing, building and maintaining entire modules \
                    (Frontend and Backend) of their main business product, a SaaS solution called Logica Flow. Broadly speaking, I was responsible for maintaining existing \
                    APIs designed to collect Internet data traffic (IPv4/IPv6 and CDN/Non-CDN) coming from different Internet Service Providers (ISPs), process them in the \
                    server and display them in the client by building many Dashboards - containing multiple Charts, Graphs and Tables. Furthermore, I was responsible \
                    for designing, building and maintaining microservices to perform periodical data transfer between storage units and periodical VACUUM in some DB tables. \
                    At last, I was in charge of designing, building and maintaining a full feature that was meant to generate custom PDF report documents periodically for \
                    each client (ISP) based upon their own data traffic, enabling efficient, precise and real-time data monitoring, analysis and visualization."
            },
            card: { 
                position: "Fullstack Developer (Web)" ,
                location: "Natal, RN, Brazil",
                regime: "On-Site",
                duration: "Aug/2019 ~ Nov/2020"
            },
            attributions: {
                first: "Implementation of multiple Dashboards to monitor IPv4/IPv6 and CDN/Non-CDN data traffic from different Internet Service Providers.",
                second: "Maintenance of APIs designed to collect and process IPv4/IPv6 and CDN/Non-CDN data traffic from different Internet Service Providers.",
                third: "Implementation of user interfaces and features for the company's primary SaaS solution called Logica Flow.",
                fourth: "Implementation of microservices designed to perform periodical data transfer between storage units and VACUUM in Logica Flow DB tables.",
                fifth: "Implementation and maintenance of a full feature meant to generate automatic and periodical reports from IPv4/IPv6 and CDN/Non-CDN data traffic \
                    for all Internet Service Providers that used Logica Flow.",
                sixth: "Skills: JavaScript | HTML5 | CSS3 | React.js | Chart.js | Redux | Python | Django REST | Flask | PostgreSQL | Docker | Git | Linux"
            }
        },
        second: {
            description: {
                title: "In 2021, I joined SIDIA INSTITUTO DE CIÊNCIA E TECNOLOGIA (Samsung Electronics' R&D center in Latin America) as a Fullstack Software Engineer, working \
                    with Web and Android. As my main attribution, I was the Principal Fullstack Engineer and Technical Leader for the Automation Team, in charge of designing, \
                    building and deploying internal automation tools (PLM Reporter, TRO.IA and PLMN/MVNO). Furthermore, I was responsible for conducting bug fixes for \
                    Samsung Android Native apps (Dialer, InCallUI, Contacts, Messages, etc) and managing and implementing LATAM telephony operator requirements. In 2024, \
                    I started working as the Project Leader for the delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side. For this major project, I worked \
                    alongside representatives of other leading manufacturers (Google, Apple, Motorola, Positivo, etc), Brazilian Telephony Operators (TIM, Claro and Vivo) \
                    and client (ANATEL), to discuss all technical aspects and challenges. On the other hand, I was also in charge of intermediating the discussions between \
                    client (Brazil) and Samsung part (UX and Dev teams and Product Owners in HQ), assist with the trials after each deliverable iteration, analyze Android  \
                    logs and debug the code whenever needed."
            },
            card: {
                position: "Software Engineer (Web/Android)",
                location: "Manaus, AM, Brazil",
                regime: "On-Site",
                duration: "Apr/2021 ~ Jun/2024"
            },
            attributions: {
                first: "Principal Fullstack Engineer and Technical Leader for the Automation Team (Tools: PLM Reporter, TRO.IA and PLMN/MVNO).",
                second: "Fullstack Engineering Leader responsible for architecting and coding PLM Reporter tool from scratch and implementing all the core \
                    features in client and server sides (Login/Logout with JWT Auth, Dashboards/Statistics pages, Load .xml files, User profile, etc).",
                third: "Technical Leader responsible for the delivery of STIR/Shaken and Rich Call Data solutions in Brazil, representing Samsung side.",
                fourth: "Bug fixes for Samsung Android native apps (Dialer, InCallUI, Contacts, Messages, Settings, TelephonyUI), including log analysis.",
                fifth: "Skills: JavaScript | TypeScript | HTML5 | CSS3 | React | Chart.js | Redux/ContextAPI | Material UI | Python | Django REST | \
                    PostgreSQL | Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
            }
        }
    },
    br: {
        first: {
            description: {
                title: "Em 2019, iniciei a minha carreira como Engenheiro de Software atuando como Desenvolvedor Fullstack para a LOGICA SISTEMAS DE INFORMACAO EIRELI - uma \
                    empresa de pequeno porte cujo papel é de prestar serviços para a indústria de Telecomunicações. Como as minhas principais atribuições, fui encarregado de \
                    projetar, construir e manter módulos completos (Frontend e Backend) do principal produto da empresa - uma solução SaaS chamada Logica Flow. Em termos \
                    gerais, fui responsável por manter APIs existentes, projetadas para coletar tráfego de dados da Internet (IPv4/IPv6 e CDN/Não-CDN) proveniente de \
                    diferentes Provedores de Internet (ISPs), processá-los no servidor e exibi-los no cliente em várias Dashboards - contendo múltiplos Gráficos, Diagramas \
                    e Tabelas. Além disso, fui encarregado de projetar, implementar e manter microsserviços para executar periodicamente a transferência de dados entre \
                    unidades de armazenamento distintas e VACUUM em algumas tabelas do Banco de Dados. Por fim, assumi a responsabilidade de projetar, construir e manter \
                    uma feature por completo (Frontend e Backend), que tinha como objetivo gerar relatórios em PDF personalizados e de forma periódica para cada cliente \
                    (ISP) - com base em seu próprio tráfego de dados - permitindo o monitoramento, análise e visualização de dados de forma eficiente, precisa e em tempo real."
            },
            card: {
                position: "Desenvolvedor Fullstack (Web)",
                location: "Natal, RN, Brasil",
                regime: "Presencial",
                duration: "Ago/2019 ~ Nov/2020"
            },
            attributions: {
                first: "Implementação de Dashboards para monitoramento de tráfego de dados IPv4/IPv6 e CDN/Não-CDN, vindo de diferentes Provedores de Internet.",
                second: "Manutenção de APIs feitas para coletar e processar tráfego de dados IPv4/IPv6 e CDN/Não-CDN, vindo de diferentes Provedores de Internet.",
                third: "Implementação de interfaces e features de usuário para o principal produto da empresa, uma solução SaaS chamada Logica Flow.",
                fourth: "Implementação de microsserviços feitos para realizar de forma periódica a transferência de dados entre unidades de armazenamento distintas \
                    e VACUUM em tabelas do Banco de Dados do Logica Flow.",
                fifth: "Implementação e manutenção de uma feature por completa de geração automática e periódica de relatórios de tráfego de dados IPv4/IPv6 e CDN/Não-CDN, \
                    para Provedores de Internet que usavam o Logica Flow.",
                sixth: "Habilidades: JavaScript | HTML5 | CSS3 | React.js | Chart.js | Redux | Python | Django REST | Flask | PostgreSQL | Docker | Git | Linux"
            }
        },
        second: {
            description: {
                title: "Em 2021, ingressei no SIDIA INSTITUTO DE CIENCIA E TECNOLOGIA (Centro de P&D da Samsung Electronics na América Latina) como Engenheiro de Software \
                    Fullstack, trabalhando com Web e Android. Como as minhas principais atribuições, fui o Principal Engenheiro Fullstack e Líder Técnico para o Time de \
                    Automação - encarregado de projetar, construir e disponibilizar ferramentas internas de automação (PLM Reporter, TRO.IA e PLMN/MVNO). Além disso, fui \
                    responsável por conduzir correção de bugs para aplicações nativas da Samsung (Dialer, InCallUI, Contacts, Messages) e gerenciar e implementar requisitos \
                    para operadoras de telefonia da América Latina. Em 2024, comecei a atuar como Líder de Projeto para a implementação e entrega das soluções de STIR/Shaken \
                    e RCD no Brasil, representando a Samsung. Nesse projeto, trabalhei ao lado de representantes de outros fabricantes líderes (Google, Apple, Motorola, Positivo, \
                    etc), Operadoras Brasileiras de Telefonia (TIM, Claro e Vivo) e o principal cliente (ANATEL), para discutir todos os aspectos técnicos e principais desafios. \
                    Por outro lado, também fui responsável por intermediar as discussões técnicas entre todos os clientes (Brasil) e os times técnicos (Times de UX e Dev e Donos \
                    do Produto no HQ da Samsung), auxiliar nos testes após cada iteração de um entregável do Software, analisar logs de Android e depurar o código-fonte quando \
                    necessário."
            },
            card: {
                position: "Engenheiro Fullstack (Web/Android)",
                location: "Manaus, AM, Brasil",
                regime: "Presencial",
                duration: "Abr/2021 ~ Jun/2024"
            },
            attributions: {
                first: "Principal Engenheiro Fullstack e Líder Técnico para o Time de Automação (ferramentas: PLM Reporter, TRO.IA e PLMN/MVNO).",
                second: "Líder de Engenharia Fullstack responsável por arquitetar e desenvolver a ferramenta PLM Reporter do zero e implementar \
                    todas as principais features (Login/Logout com JWT Auth, Páginas de Dashboards e Estatísticas contendo múltiplos Gráficos e \
                    Tabelas, Carregamento de arquivos .xml, Perfil de Usuário, etc).",
                third: "Líder Técnico responsável pela entrega das soluções de STIR/Shaken e Rich Call Data no Brasil, representando a Samsung.",
                fourth: "Correção de bugs em aplicações nativas para Android da Samsung (Dialer, InCallUI, Contacts, Messages, Settings, \
                    TelephonyUI), incluindo análises de log da camada de Aplicação até o Framework.",
                fifth: "Habilidades: JavaScript | TypeScript | HTML5 | CSS3 | React | Chart.js | Redux/ContextAPI | Material UI | Python | Django REST | PostgreSQL | \
                    Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
            }
        }
    }
};

export default experienceStrings;