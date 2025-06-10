// Questo file json contiene tutte le etichette che appaiono nei template .pug
// che definiscono la struttura delle pagine del sito.
// Al momento sono presenti la localizzazione in italiano ed in inglese.
const localizationLabels =  { 
    it: {
        // Strutture condivise tra i vari template
        layout: {
            header: {
                logoAlt: `Scopri il CHRACK LAB Foligno 4D` 
            },
            menu: {
                home: `Home`, 
                about: `Scoprici`, 
                team: `Team`, 
                blog: `Blog`, 
                labs: `Labs`, 
                calltoaction: `Salta a bordo!`, 
                langIconAlt: `Vai all'Inglese`
            },
            footer: {
                leftSection: `CRHACK LAB FOLIGNO 4D OdV`,
                centerSection: `Privacy & Social media`,
                rightSection: `Creative Commons Attribution-ShareAlike 4.0 International`,
                taxId: `Codice Fiscale`,
                vatNumber: `Partita IVA`,
                privacy: `Informativa privacy`,
                disclaimer: `Siamo vincolati ad attuare campagne di disseminazione sui seguenti social media da obblighi contrattuali legati ai finanziamenti pubblici ricevuti. Tuttavia, vi invitiamo ad evitare o limitare l'uso dei social media per proteggere la vostra privacy ed evitare potenziali rischi per la salute.`,
                license: `This license requires that reusers give credit to the creator. It allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes. If others remix, adapt, or build upon the material, they must license the modified material under identical terms.`
            }
        },
        ///// ELIMINARE DATO CHE NON SI USA PIÙ IL CALENDARIO?   <<<<<<<<<<<<<
        week: {
            sun: `Dom`,
            mon: `Lun`,
            tue: `Mar`,
            wed: `Mer`,
            thu: `Gio`,
            fri: `Ven`,
            sat: `Sab`
        },
        // ETICHETTE PER TEMPLATE HOME PAGE
        home: {
            hero: {
                title: `If Enough of us Dream, if a bare Thousand of us Dream, We Can Change the World. We Can Dream it anew!`,
                citation: {
                    author: `Neil Gaiman`,
                    title: `A Dream of a Thousand Cats`,
                    source: `https://en.wikipedia.org/wiki/Neil_Gaiman`
                },
                subtitle: 'Al <span style="color:var(--main-color-fuchsia)">CrHack Lab F4D</span> discutiamo visioni del futuro e co-creiamo metodologie, prototipi, strumenti per aiutare i <em>Crowddreamers</em> a costruire un mondo migliore per se stessi e le generazioni successive. Lo facciamo attraverso progetti sul <span style="color:var(--main-color-fuchsia)">patrimonio interculturale digitale</span> insieme a partner e volontari da tutta Europa e dal mondo.'
            },
            main: {
                focusSectionTitle: `Focus su...`,
                changeWorldSectionTitle: `Crowddreaming a New World`,
                changeCommunitySectionTitle: `Crowddreaming a New Community`,
                changeMeSectionTitle: `Crowddreaming a new Me`,
                jumpInSectionTitle: `Salta a bordo!`,
                readMore: ` - Leggi di più...`
            },
        },
        // ETICHETTE PER TEMPLATE PAGINA TEAM
        team: {
            hero: {
                title: `Dar Forma ai Sogni è una Attività che richiede Elevate Competenze Professionali`,
                citation: {
                    author: `Paolo Russo`,
                    title: `L'Arte del Crowddreaming`,
                    source: `https://error404.org`
                },
                subtitle: `Qui bisogna convincere del valore del nostro team. Concetti-chiave da inserire: multidiscipinarietà, cultura digitale e non, elevate competenze professionali, inclusività, creatività, innovazione."`
            },
            main: {
                boardSectionTitle: `Consiglio Direttivo`,
                staffSectionTitle: `Staff`,
                internsSectionTitle: `Stagisti e Volontari`,
                pastSectionTitle: `Hanno collaborato con noi`,
                friendsSectionTitle: `Amici del CLF4D`,
                readMore: ` - Leggi di più...`,
                website: ` - Sito web`
            }
        },
        // ETICHETTE PER TEMPLATE PAGINA SCOPRICI
        about: {
            hero: {
                title: `Una Frase Significativa e di Impatto`,
                citation: {
                    author: `Autore`,
                    title: `Fonte`,
                    source: `https://error404.org`
                },
                subtitle: `Pagina di orientamento veloce su chi siamo e cosa facciamo. Contiene una brevissima spiegazione della missione, dei nostri valori e delle attività principali al posto di questo testo. Massimo 1.000 caratteri in tutto, ma se ce la facciamo con la metà è meglio. Seguono una serie di sezioni con un titolo esplicativo, seguito da 2-3 righe di descrizione e poi il link alla pagina di approfondimento. Le sezioni potrebbero essere: Progetti, Corsi, Eventi e Networking, Opportunità di Internship, progetti per volontari. La pagina si chiude con la sezione dei contatti. Bisogna anche trovare il modo di inserire in maniera carina un po' di link ad un primo livello di approfondimento, dove spieghiamo i concetti di Crowddreaming, come viene fuori il nome dell'associazione, il significato del logo, ecc."`
            },
            main: {
                labsSectionTitle: `Labs`,
                labsSectionDescription: `Qui presentiamo i nostri prodotti: metodologie, prototipi e strumenti. Spieghiamo perché facciamo proprio questo e diamo il senso del nostro essere "Laboratorio".`,
                labsSectionDescriptionCall2Action: `Puoi approfondire, consultando la lista dei prodotti realizzati dal nostro laboratorio e le relative schede descrittive.`,
                projectsSectionTitle: `Progetti`,
                projectsSectionDescription: `Siamo una <em>Hack</em>ademy e quindi tutto passa attraverso la validazione del pratico e dei progetti. Progetti non fini a se stessi, ma come strumenti per sperimentare soluzioni sul campo, sviluppare componenti utili, allargare la rete di relazioni e cercare nuovi crowddreamers. Tutti i nostri progetti hanno in comune intento di innovare, inclusione come dovere e opportunità, diversità come ricchezza, patrimonio transculturale, interculturale e culturale, digitale e non, transgenerazionalità. Sotto sotto, cerchiamo sempre di costruire monumenti digitali, perché originare una tradizione è il sogno segreto di ogni innovatore.`,
                projectsSectionDescriptionCall2Action: `Puoi approfondire, consultando la lista dei nostri progetti e le relative schede descrittive.`,
                coursesSectionTitle: `Educazione`,
                coursesSectionDescription: `Diffondere quel che impariamo sperimentando è una parte fondamentale della nostra missione, fedeli alla linea che la Cultura è l'Energia Rinnovabile della Società, il cui effetto si moltiplica tanto più quanto più la si (con)divide. Corsi rivolti sia ai giovani per formarli oggi alle competenze digitali che serviranno loro domani sia agli adulti che svolgono il ruolo di mediatore e moltiplicatore interculturale. Educhiamo e forse un po' formiamo. Di sicuro non addestriamo o istruiamo.`,
                coursesSectionDescriptionCall2Action: `Puoi approfondire, consultando la lista dei nostri corsi e le relative schede descrittive.`,
                networkingSectionTitle: `Networking`,
                networkingSectionDescription:`Qui si parla soprattutto di C.R.E.A. Cultura, di Culture Action Europe, del network EGInA, della nostra strategia di partecipazione ai grandi eventi europei e nazionali sia in presenza che online. `,
                networkingSectionCall2Action:`Puoi approfondire, consultando la lista dei prossimi eventi e le relative schede descrittive.`,
                internshipOpportunitiesSectionTitle: `Opportunità di Stage`,
                internshipOpportunitiesSectionDescription: `Ospitare stagisti è parte della nostra missione. Spiegare perché. Spiegare il profilo delle persone che cerchiamo. Spiegare cosa offriamo.`,
                internshipOpportunitiesSectionCall2Action: `Puoi approfondire, consultando la lista delle opportunità di stage e le relative schede descrittive.`,
                volunteersSectionTitle: `Attività per i Volontari`,
                volunteersSectionDescription: `Non possiamo ancora attivare questa sezione perché non abbiamo nulla, ma creare progetti dove volontari online possano aiutarci è una delle priorità. Qui se ne darà una descrizione sintetica e si inserirà un testo motivazionale per aderire.`,
                volunteersSectionCall2Action: `Puoi approfondire, consultando la lista dei progetti di volontariato attivi e le relative istruzioni per partecipare.`,
                contactsSectionTitle: `Contattaci!`,
                contactsSectionDescription: `Qui si inserisce un invito a contattarci e tutti i possibili recapiti. Valutare se inserire un form... che è una fantastica fonte di spam :-). Valutare se si riesca a mettere qui qualcosa su Foligno e l'Umbria senza ingolfare troppo. Oppure potrebbe andare nella sezione sulle opportunità stage.`,
                contactsSectionCall2Action: `Alla fine possiamo decidere di inserire una call to action... o forse no!`,
                readMore: ` - Leggi di più...`,
                website: ` - Sito web`
            }
        },
        // ETICHETTE PER TEMPLATE PAGINA INDICE PROGETTI
        projs: {
            hero: {
                title: `Frase significativa e di ispirazione`,
                citation: {
                    author: `Autore`,
                    title: `Fonte`,
                    source: `https://error404.org`
                },
                subtitle: `Perché dovreste fare progetti con noi? I nostri progetti, che siano europei, nazionali o locali, condividono sempre alcune parole-chiave: interculturalità, inclusione, innovazione, intergenerazionalità, tecnologie digitali non fini a se stesse. Perché noi facciamo progetti? Perché si costruiscono relazioni e per trovare partner con le competenze che ci mancano per generare metodologie, prototipi e strumenti da mettere a disposizione della comunità. `
            },
            main: {
                runningSectionTitle: `Progetti in corso di svolgimento`,
                approvedSectionTitle: `Progetti in avvio`,
                closedSectionTitle: `Progetti conclusi`,

                readMore: ` - Leggi di più...`,
                website: ` - Sito web`
            }
        },
        // ETICHETTE PER TEMPLATE PAGINA INDICE LABORATORIO
        labs: {
            hero: {
                title: `Il Futuro è già qui. Solo che non è distribuito molto uniformemente.`,
                citation: {
                    author: `William Gibson`,
                    title: `The Science in Science Fiction`,
                    source: `https://www.npr.org/2018/10/22/1067220/the-science-in-science-fiction`
                },
                subtitle: `Qualche riga che spiega cosa faccia il nostro laboratorio."`
            },
            main: {
                readMore: ` - Leggi di più`,
                website: ` - Sito web`
            }
        }
    }, 
    en: {
        layout: {
            header: {
                logoAlt: `Discover CHRACK LAB Foligno 4D` 
            },
            menu: {
                home: `Home`, 
                about: `About`, 
                team: `Team`, 
                blog: `Blog`, 
                labs: `Labs`, 
                calltoaction: `Jump in!`, 
                langIconAlt: `Go to Italian Language`
            },
            footer: {
                leftSection: `CRHACK LAB FOLIGNO 4D OdV`,
                centerSection: `Privacy & Social media`,
                rightSection: `Creative Commons Attribution-ShareAlike 4.0 International`,
                taxId: `Tax ID`,
                vatNumber: `VAT Number`,
                privacy: `Privacy policy`,
                disclaimer: `We are bound to carry out dissemination campaigns on the following social media due to contractual obligations related to public funding. However, we strongly recommend you to avoid or limit the use of social media to protect your privacy and avoid potential health issues.`,
                license: `This license requires that reusers give credit to the creator. It allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, even for commercial purposes. If others remix, adapt, or build upon the material, they must license the modified material under identical terms.`
            }
        },
        // ELIMINARE? <<<<<<<<<<<<
        week: {
            sun: `Sun`,
            mon: `Mon`,
            tue: `Tue`,
            wed: `Wed`,
            thu: `Thu`,
            fri: `Fri`,
            sat: `Sat`
        },
        home: {
            hero: {
                title: `If Enough of us Dream, if a bare Thousand of us Dream, We Can Change the World. We Can Dream it anew!`,
                citation: {
                    author: `Paolo Russo`,
                    title: `The Art of Crowddreaming`,
                    source: `https://error404.org`
                },
                subtitle: 'At <a href="/about/">CrHack Lab Foligno 4D</a> we co-create methodologies, prototypes and tools for <em>Crowddreamers</em> to build a better world for themselves and those who will follow. We do it through projects on digital cross-cultural heritage with partners and volunteers from all over Europe and the World.'
            },
            main: {
                focusSectionTitle: `Focus on...`,
                changeWorldSectionTitle: `Crowddreaming a new World`,
                changeCommunitySectionTitle: `Crowddreaming a new Community`,
                changeMeSectionTitle: `Crowddreaming a new Me`,
                jumpInSectionTitle: `Jump in!`,
                readMore: ` - Read more...`
            },
        },
        // LABELS FOR TEAM PAGE TEMPLATE
        team: {
            hero: {
                title: `Dreamscaping is a Task that requires the Finest Professional Skills.`,
                citation: {
                    author: `Neil Gaiman`,
                    title: `A Dream of a Thousand Cats`,
                    source: `https://en.wikipedia.org/wiki/Neil_Gaiman`
                },
                subtitle: `Qui bisogna convincere del valore del nostro team. Concetti-chiave da inserire: multidiscipinarietà, cultura digitale e non, elevate competenze professionali, inclusività, creatività, innovazione. "`
            },
            main: {
                boardSectionTitle: `Board Members`,
                staffSectionTitle: `Staff Members`,
                internsSectionTitle: `Interns and Volunteers`,
                pastSectionTitle: `History`, /// TROVARE UN NOME MIGLIORE <<<<<<<<<<<<
                friendsSectionTitle: `Friends of CLF4D`,
                readMore: ` - Read more...`,
                website: ` - Website`
            }
        },
        // LABELS FOR ABOUT PAGE TEMPLATE
        about: {
            hero: {
                title: `Una Frase Significativa e di Impatto`,
                citation: {
                    author: `Autore`,
                    title: `Fonte`,
                    source: `https://error404.org`
                },
                subtitle: `Pagina di orientamento veloce su chi siamo e cosa facciamo. Contiene una brevissima spiegazione della missione, dei nostri valori e delle attività principali al posto di questo testo. Massimo 1.000 caratteri in tutto, ma se ce la facciamo con la metà è meglio. Seguono una serie di sezioni con un titolo esplicativo, seguito da 2-3 righe di descrizione e poi il link alla pagina di approfondimento. Le sezioni potrebbero essere: Progetti, Corsi, Eventi, Opportunità di Internship, progetti per volontari. La pagina si chiude con la sezione dei contatti."`
            },
            main: {
                labsSectionTitle: `Labs`,
                labsSectionDescription: `Qui presentiamo i nostri prodotti: metodologie, prototipi e strumenti. Spieghiamo perché facciamo proprio questo e diamo il senso del nostro essere "Laboratorio". A differenza delle altre sezioni qui ci potrebbe stare bene una foto che mostri il laboratorio... quando ci sarà.`,
                labsSectionDescriptionCall2Action: `Puoi approfondire, consultando la lista dei prodotti realizzati dal nostro laboratorio e le relative schede descrittive.`,
                projectsSectionTitle: `Projects`,
                projectsSectionDescription: `Siamo una <em>Hack</em>ademy e quindi tutto passa attraverso la validazione del pratico e dei progetti. Progetti non fini a se stessi, ma come strumenti per sperimentare soluzioni sul campo, sviluppare componenti utili, allargare la rete di relazioni e cercare nuovi crowddreamers. Tutti i nostri progetti hanno in comune intento di innovare, inclusione come dovere e opportunità, diversità come ricchezza, patrimonio transculturale, interculturale e culturale, digitale e non, transgenerazionalità. Sotto sotto, cerchiamo sempre di costruire monumenti digitali, perché originare una tradizione è il sogno segreto di ogni innovatore.`,
                projectsSectionDescriptionCall2Action: `Puoi approfondire, consultando la lista dei nostri progetti e le relative schede descrittive.`,
                coursesSectionTitle: `Education`,
                coursesSectionDescription: `Diffondere quel che impariamo sperimentando è una parte fondamentale della nostra missione, fedeli alla linea che la Cultura è l'Energia Rinnovabile della Società, il cui effetto si moltiplica tanto più quanto più la si (con)divide. Corsi rivolti sia ai giovani per formarli oggi alle competenze digitali che serviranno loro domani sia agli adulti che svolgono il ruolo di mediatore e moltiplicatore interculturale. Educhiamo e forse un po' formiamo. Di sicuro non addestriamo o istruiamo.`,
                coursesSectionDescriptionCall2Action: `Puoi approfondire, consultando la lista dei nostri corsi e le relative schede descrittive.`,
                networkingSectionTitle: `Networking`,
                networkingSectionDescription:`Qui si parla soprattutto di C.R.E.A. Cultura, di Culture Action Europe, del network EGInA, della nostra strategia di partecipazione ai grandi eventi europei e nazionali sia in presenza che online. `,
                networkingSectionCall2Action:`Puoi approfondire, consultando la lista dei prossimi eventi e le relative schede descrittive.`,
                internshipOpportunitieSectionTitle: `Internship Opportunities`,
                internshipOpportunitiesSectionDescription: `Ospitare stagisti è parte della nostra missione. Spiegare perché. Spiegare il profilo delle persone che cerchiamo. Spiegare cosa offriamo.`,
                internshipOpportunitiesSectionCall2Action: `Puoi approfondire, consultando la lista delle opportunità di stage e le relative schede descrittive.`,
                volunteersSectionTitle: `Volunteering`,
                volunteersSectionDescription: `Non possiamo ancora attivare questa sezione perché non abbiamo nulla, ma creare progetti dove volontari online possano aiutarci è una delle priorità. Qui se ne darà una descrizione sintetica e si inserirà un testo motivazionale per aderire.`,
                volunteersSectionCall2Action: `Puoi approfondire, consultando la lista dei progetti di volontariato attivi e le relative istruzioni per partecipare.`,
                contactsSectionTitle: `Contact us!`,
                contactsSectionDescription: `Qui si inserisce un invito a contattarci e tutti i possibili recapiti. Valutare se inserire un form... che è una fantastica fonte di spam :-). Valutare se si riesca a mettere qui qualcosa su Foligno e l'Umbria senza ingolfare troppo. Oppure potrebbe andare nella sezione sulle opportunità stage.`,
                contactsSectionCall2Action: `Alla fine possiamo decidere di inserire una call to action... o forse no!`,
                readMore: ` - Read more`,
                website: ` - Website`
            }
        },
        projs: {
            hero: {
                title: `Frase significativa e di ispirazione`,
                citation: {
                    author: `Autore`,
                    title: `Fonte`,
                    source: `https://error404.org`
                },
                subtitle: `Qualche riga che spiega la natura dei nostri progetti e la loro distribuzione territoriale (europei, nazionali e locali)."`
            },
            main: {
                projsSectionTitle: `Consiglio Direttivo`,
                staffSectionTitle: `Staff`,
                internsSectionTitle: `Stagisti e Volontari`,
                pastSectionTitle: `Hanno collaborato con noi`,
                friendsSectionTitle: `Amici del CLF4D`,
                readMore: ` - Read more`,
                website: ` - Website`
            }
        },
        labs: {
            hero: {
                title: `The Future is already here - it's just not very evenly distributed.`,
                citation: {
                    author: `William Gibson`,
                    title: `The Science in Science Fiction`,
                    source: `https://www.npr.org/2018/10/22/1067220/the-science-in-science-fiction`
                },
                subtitle: `Qualche riga che spiega cosa faccia il nostro laboratorio."`
            },
            main: {
                readMore: ` - Read more`,
                website: ` - Website`                
            }
        }
    }
};

module.exports = localizationLabels;