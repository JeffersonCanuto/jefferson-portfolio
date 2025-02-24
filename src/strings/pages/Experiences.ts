export interface ExperienceStringItems {
    en: {
        firstExperience: {
            description: {
                title: string
            };
            card: {
                position: string;
                location: string;
                regime: string;
                duration: string;
            };
            attributions: {
                first: string;
                second: string;
                third: string;
                fourth: string;
                fifth: string;
                sixth: string;
            };
        };
        secondExperience: {
            description: {
                title: string
            };
            card: {
                position: string;
                location: string;
                regime: string;
                duration: string;
            };
            attributions: {
                first: string;
                second: string;
                third: string;
                fourth: string;
                fifth: string;
            };
        };
    },
    br: {
        firstExperience: {
            description: {
                title: string
            };
            card: {
                position: string;
                location: string;
                regime: string;
                duration: string;
            };
            attributions: {
                first: string;
                second: string;
                third: string;
                fourth: string;
                fifth: string;
                sixth: string;
            };
        };
        secondExperience: {
            description: {
                title: string
            };
            card: {
                position: string;
                location: string;
                regime: string;
                duration: string;
            };
            attributions: {
                first: string;
                second: string;
                third: string;
                fourth: string;
                fifth: string;
            };
        };
    }
};

const ExperienceStrings:ExperienceStringItems = {
    en: {
        firstExperience: {
            description: {
                title: "In 2019, I started my career as a Software Engineer working as a Frontend Developer for LOGICA SISTEMAS DE INFORMACAO EIRELI, which is a small-sized \
                    company that provides services for the Telecom industry. As my main attributions, I was in charge of designing, building and maintaining entire modules \
                    (Frontend and Backend) of their main business product, a SaaS solution called Logica Flow. Broadly speaking, I was responsible for maintaining existing \
                    APIs designed to collect Internet data traffic (IPv4/IPv6 and CDN/Non-CDN) coming from different Internet Service Providers (ISPs), process them in the \
                    Backend and display them in the Frontend by building many Dashboards - containing multiple Charts, Graphs and Tables. Furthermore, I was responsible \
                    for designing, building and maintaining microservices to perform periodical data transfer between storage units and periodical VACUUM in some db tables. \
                    At last, I was in charge of designing, building and maintaining a full feature that was meant to generate custom PDF report documents periodically for \
                    each client (ISP) based upon their own data traffic, enabling efficient, precise and real-time data monitoring, analysis and visualization."
            },
            card: {
                position: "Frontend Developer (Web)" ,
                location: "Natal, RN, Brazil",
                regime: "On-Site",
                duration: "Aug/2019 - Nov/2020"
            },
            attributions: {
                first: "Implementation of multiple Dashboards to monitor IPv4/IPv6 and CDN/Non-CDN data traffic coming from different ISPs.",
                second: "Implementation of APIs designed to collect and process IPv4/IPv6 and CDN/Non-CDN data traffic coming from different ISPs.",
                third: "Implementation of Microservices designed to perform periodical data transfer between unit storages and VACUUM in DB tables.",
                fourth: "Implementation of a full feature (Frontend and Backend) to generate automatic reports from IPv4/IPv6 and CDN/Non-CDN data traffic.",
                fifth: "Implementation of other features (Frontend and Backend) for the company's primary SaaS solution called Logica Flow.",
                sixth: "Skills: JavaScript | HTML5 | CSS3 | React.js | Chart.js | Redux | Python | Django REST | PostgreSQL | Docker | Git | Linux"
            }
        },
        secondExperience: {
            description: {
                title: "In 2021, I joined SIDIA (Samsung Electronics' R&D center in Latin America) as a Frontend Software Engineer, working with both Web and Android. As my \
                    main attribution, I was the Principal Frontend Engineer and Technical Leader for the Automation Team, responsible for designing, building and maintaining \
                    internal software tools (PLM Reporter, TRO.IA and PLMN/MVNO). Furthermore, I was responsible for conducting bugfixes for Samsung Android Native apps (Dialer, \
                    InCallUI, Contacts, Messages, etc) and managing and implementing LATAM telephony operator requirements. In 2024, I started working as the Project Leader \
                    for the delivery of STIR/Shaken and RCD solutions in Brazil from Samsung side. For this major project, I worked alongside representatives of other leading \
                    manufacturers (Google, Apple, Motorola, Positivo, etc), Brazilian telephony operators (TIM, Claro and Vivo) and client (ANATEL), to discuss all technical \
                    features and challenges. On the other hand, I was also in charge of intermediating the discussions between client (Brazil) and Samsung part (UX and Dev \
                    teams and Product Owners in HQ), assist with the trials after each deliverable iteration and analyze Android logs and debug the code whenever needed."
            },
            card: {
                position: "Frontend Engineer (Web/Android)",
                location: "Manaus, AM, Brazil",
                regime: "On-Site",
                duration: "Apr/2021 - Jun/2024"
            },
            attributions: {
                first: "Principal Frontend Engineer and Technical Leader for the Automation Team (Tools: PLM Reporter, TRO.IA and PLMN/MVNO).",
                second: "Frontend Project Leader responsible for designing PLM Reporter tool from scratch and implementing main user pages and \
                    features (Login page with JWT Auth, Dashboards page with multiple Graphs, Charts and Tables, Statistics page, Load .xml files, \
                    User profile, etc).",
                third: "Project Leader for the implementation and delivery of STIR/Shaken and RCD solutions in Brazil, representing Samsung side.",
                fourth: "Bugfixes for Samsung Android native apps (Dialer, InCallUI, Contacts, Messages), including Android log analysis.",
                fifth: "Skills: JavaScript | TypeScript | HTML5 | CSS3 | React | Chart.js | Redux/ContextAPI | Material UI | Python | Django REST | \
                    PostgreSQL | Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
            }
        }
    },
    br: {
        firstExperience: {
            description: {
                title: "Em 2019, iniciei a minha carreira como Engenheiro de Software atuando como Desenvolvedor Frontend para a LOGICA SISTEMAS DE INFORMACAO EIRELI - uma \
                    empresa de pequeno porte que presta serviços para a indústria de Telecomunicações. Como as minhas principais atribuições, fui encarregado de projetar, construir \
                    e manter módulos inteiros (Frontend e Backend) do principal produto da empresa - uma solução SaaS chamada Logica Flow. Em termos gerais, fui responsável por manter \
                    APIs existentes, projetadas para coletar tráfego de dados da Internet (IPv4/IPv6 e CDN/Não-CDN) proveniente de diferentes Provedores de Internet (ISPs), processá-los \
                    no Backend e exibi-los no Frontend a partir da construção de várias Dashboards - contendo múltiplos Gráficos, Diagramas e Tabelas. Além disso, fui responsável por \
                    projetar, construir e manter microsserviços para executar periodicamente a transferência de dados entre unidades de armazenamento distintas e VACUUM em algumas \
                    tabelas do Banco de Dados. Por fim, assumi a responsabilidade de projetar, construir e manter uma feature por completo, que tinha como objetivo gerar relatórios em \
                    PDF personalizados e de forma periódica para cada cliente (ISP) - com base em seu próprio tráfego de dados - permitindo assim o monitoramento, análise e visualização \
                    de dados de forma eficiente, precisa e em tempo real."
            },
            card: {
                position: "Desenvolvedor Frontend (Web)",
                location: "Natal, RN, Brasil",
                regime: "Presencial",
                duration: "Ago/2019 - Nov/2020"
            },
            attributions: {
                first: "Implementação de múltiplas Dashboards para monitoramento de tráfego de dados IPv4/IPv6 e CDN/Não-CDN, proveniente de diferentes Provedores de Internet.",
                second: "Implementação de APIs projetadas para coletar e processar tráfego de dados IPv4/IPv6 e CDN/Não-CDN, proveniente de diferentes Provedores de Internet.",
                third: "Implementação de Microsserviços para realizar periodicamente a transferência de dados entre unidades de armazenamento e VACUUM em tabelas do Banco de Dados.",
                fourth: "Implementação por completo (Frontend e Backend) da feature de geração automática de relatórios de tráfego de dados IPv4/IPv6 e CDN/Não-CDN.",
                fifth: "Implementação de outras features (Frontend e Backend) para o principal produto da empresa, uma solução SaaS chamada Logica Flow.",
                sixth: "Habilidades: JavaScript | HTML5 | CSS3 | React.js | Chart.js | Redux | Python | Django REST | PostgreSQL | Docker | Git | Linux"
            }
        },
        secondExperience: {
            description: {
                title: "Em 2021, ingressei no SIDIA INSTITUTO DE CIENCIA E TECNOLOGIA (Centro de P&D da Samsung na América Latina) como Engenheiro de Software Frontend, atuando \
                com Web e Android. Como as minhas principais atribuições, fui o Principal Engenheiro Frontend e Líder Técnico para o Time de Automação - responsável por projetar, \
                construir e manter ferramentas de software internas (PLM Reporter, TRO.IA e PLMN/MVNO). Além disso, fui responsável por conduzir correções de bug para aplicações \
                nativas da Samsung (Dialer, InCallUI, Contacts, Messages, etc) "
            },
            card: {
                position: "Engenheiro Frontend (Web/Android)",
                location: "Manaus, AM, Brasil",
                regime: "Presencial",
                duration: "Abr/2021 - Jun/2024"
            },
            attributions: {
                first: "Principal Engenheiro Frontend e Líder Técnico para o Time de Automação (ferramentas: PLM Reporter, TRO.IA e PLMN/MVNO).",
                second: "Líder de Projeto Frontend responsável por projetar a ferramenta PLM Reporter do zero e implementar as principais páginas \
                    e features de usuário (página de Login com autenticação/autorização via JWT, página de Dashboards com múltiplos Gráficos, Diagramas \
                    e Tabelas, página de Estatísticas, carregamento de arquivos .xml, perfil de usuário, etc).",
                third: "Líder de Projeto para a implementação e entrega das soluções de STIR/Shaken e RCD no Brasil, representando a Samsung.",
                fourth: "Correção de bugs para aplicaçõs nativas em Android da Samsung (Dialer, InCallUI, Contacts, Messages), incluindo análise de log de Android.",
                fifth: "Habilidades: JavaScript | TypeScript | HTML5 | CSS3 | React | Chart.js | Redux/ContextAPI | Material UI | Python | Django REST | PostgreSQL | \
                    Android (Java) | QuickBuild | Docker | Git | P4V | Swarm | Linux | Agile (Scrum/Kanban)"
            }
        }
    }
};

export default ExperienceStrings;