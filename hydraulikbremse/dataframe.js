
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: false,

            node: {
                collapsable: true,
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            //image: "img/malory.png",
            text: {
                name: "Hydraulikbremse",
            },
          collapsed: true,
            children: [
                {
                    //image: "img/lana.png",
                    text: {name: "Störgeräusche"}, collapsed: true,
                    children: [{text: {name: "funktion gegeben"}, collapsed: true, children: [
                            {text: {name: "Bremssattel"}, collapsed: true, children: [{text: { name: "Schrauben locker oder falsch justiert" }, image: "assets/1.png", children: [
                                {text: {name: "siehe Tabelle 2. 1.3.3"}}
                            ]}
                                ]
                            }, {
                                text: {name : "Bremsscheibe"}, collapsed: true, children: [
                                    {text: {name: "Bremsscheibe locker"}, collapsed: true, image: "assets/2.png", children: [
                                        {text: {name: "siehe Tabelle 2, 1.4.5"}}
                                    ]}, 
                                    {text: { name: "Bremsscheibe gerissen bzw angerissen"}, image: "assets/3.png", children: [
                                        {text: {name: "siehe Tabelle 2, 1.4.1"}}
                                    ]}
                                ]
                            }
                        ]
                        },
                        {text: {name: "funktion nicht gegeben"}, collapsed: true, children: [
                            {text: {name: "Bremsscheibe"}, collapsed: true, children: [
                                {text:{name: "Fremdkörper blockiert "}, image: "assets/4.png", children: [
                                    {text: {name: "siehe Tabelle 2 27 1.4.2"}}
                                ]}
                            ]
                            }
                        ]
                }]
                },
            {
                text: {
                    name: "Funktion eingeschränkt"
                }, collapsed: true,
                children: [
                    {text:{name: "optische Beschädigungen am Bremssystem"}, collapsed: true, 
                children: [
                    {text: {name: "Bremshebel"},collapsed: true, children: [{text: {name: "Bremshebel verbogen"}, image: "assets/5.png", children: [
                        {text: {name: "siehe Tabelle 2, 1.1.4"}}
                    ]}]},
                    {text: {name: "Bremsleitung"}, collapsed: true, children: [
                        {text: {name: "zu enge Verlegungsradien (Knick) oder Kabelbinder zu fest"}, image: "assets/6.png", children: [{text: {name: "siehe Tabelle 2, 1.2.2"}}]},
                        {text: {name: "Leitung abgetrennt"}, image: "assets/7.png", children: [{text: {name: "siehe Tabelle 2 1.2.3"}}]},
                        {text: {name: "Leckage aufgrund einer Leitungsbeschädigung"}, image: "assets/8.png", children: [{text: {name: "siehe Tabelle 2 1.2.1"}}]}
                    ]},
                    {text: {name: "Bremssattel"}, collapsed: true, children: [
                        {text: {name: "Bremsbeläge fehlen wegen fehlendem Sicherungsstift"}, image: "assets/9.png", children: [{text: {name:"siehe Tabelle 2: 1.3.7"}}]}
                    ]
                    },
                    {text: {name: "Bremsscheibe"}, collapsed: true, children: [
                        {text: {name: "Bremsscheibe verbogen"}, image: "assets/10.png", children: [{text: {name: "siehe Tabelle 2, 1.4.4"}}]}
                    ]},
                ]}
                , 
                {text: {name: "keine erkennbaren optischen Beschädigungen am Bremssystem"}, collapsed: true, children: [
                    {text: {name: "Bremshebel"}, collapsed: true, children: [
                        {text: {name: "Bremshebeleinheit am Lenker verdreht"}, image: "assets/11.png", children: [{text:{name: "siehe Tabelle 2, 1.1.8"} }]},
                        {text: {name: "Fremdkörper blockiert"}, image: "assets/12.png", children: [{text: {name: "siehe Tabelle 2, 1.1.1"}}]},
                        {text: {name: "Entlüftungsschraube offen oder defekt"}, image: "assets/13.png", children: [{text: {name: "siehe Tabelle 2, 1.1.3"}}]},
                        {text: {name: "Kolben gebrochen"}, image: "assets/14.png", children: [{text: {name: "siehe Tabelle 2, 1.1.2"}}]},
                        {text: {name: "Presshülse undicht oder fehlerhaft montiert"}, image: "assets/14.png", children:[{text: {name: "siehe Tabelle 2, 1.1.7"}}]},
                        {text: {name: "Dichtung des Vorratsbehälters beschädigt"}, image: "assets/15.png", children: [{text: {name: "siehe Tabelle 2, 1.1.6"}}]}
                    ]},
                    {text: {name: "Bremsleitung"}, collapsed: true, children: [
                        {text: {name: "Luft im Hydrauliksystem"}, image: "assets/16.png", children: [{text: {name: "siehe Tabelle 2, 1.1.5"}}]}
                    ]},
                    {text: {name: "Bremssattel"}, collapsed: true, children:[
                        {text: {name: "Verbrannte Bremsbeläge"}, image: "assets/17.png", children: [{text: {name: "siehe Tabelle 2, 1.3.6"}}]},
                        {text: {name: "Fremdkörper blockiert 27 1.3.4"}, image: "assets/18.png", children: [{text: {name: "siehe Tabelle 2, 1.3.4"}}]},
                        {text: {name: "Presshülse undicht oder fehlerhaft montiert"}, image: "assets/19.png", children: [{text: {name: "siehe Tabell3 2, 1.3.1"}}]},
                        {text: {name: "Verschleiß der Bremsbeläge"}, image: "assets/20.png", children: [{text: {name: "siehe Tabelle 2, 1.3.2"}}]},
                        {text: {name: "Schmierfilm auf Bremseinheit"}, image: "assets/21.png", children: [{text: {name: "siehe Tabelle 2, 1.3.5"}}]}
                    ] },
                    {text: {name: "Bremsscheibe"}, collapsed: true, children: [
                        {text: {name: "Bremsscheibe verschlissen"}, image: "assets/22.png", children: [{text: {name:"siehe Tabelle 2, 1.4.3"}}]}
                    ]}
                ]}
            
            ]
            }],
    }
}