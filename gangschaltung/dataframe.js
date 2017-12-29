
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
                name: "Gangschhaltung",
            },
          collapsed: true,
            children: [
                {
                    //image: "img/lana.png",
                    text: {name: "Störgeräusche"}, collapsed: true,
                    children: [{text: {name: "Funktion gegeben"}, collapsed: true, children: [
                            {text: {name: "Kette und Zahnräder"}, collapsed: true, children: [{text: { name: "Kette oder Zahnräder rostig" }, image: "assets/1.png", children: [
                                {text: {name: "siehe Tabelle 2, 2.5.4"}}
                            ]},
                            {text: {name: "Kette oder Zahnräder verschlissen"}, image: "assets/2.png", children: [
                                {text: {name: "siehe Tabelle 2, 2.5.3"}}
                            ]},
                            {text: {name: "Bruch einzelner oder mehrerer Zähne an einem Zahnrad"}, image: "assets/3.png", children: [{ext: {name: "siehe Tabelle 2, 2.5.1"}}]}
                                ]
                            }, 
                        ]
                        },
                        ]
                },
            {
                text: {
                    name: "Funktion eingeschränkt"
                }, collapsed: true,
                children: [
                    {text:{name: "optische Beschädigungen an der Schaltung"}, collapsed: true, 
                children: [
                    {text: {name: "Schalthebel"},collapsed: true, children: [{text: {name: "Bruch des Schalthebels"}, image: "assets/4.png", children: [
                        {text: {name: "siehe Tabelle 2, 2.1.3"}}
                    ]}]},
                    {text: {name: "Bowdenzug und Seilzug"}, collapsed: true, children: [
                        {text: {name: "Kabelbinder bzw. Befestigung zu fest"}, image: "assets/5.png", children: [
                            {text: {name: "siehe Tabelle2, 2.2.4"}}
                        ]}
                        
                    ]},
                    {text: {name: "Umwerfer vorne"}, collapsed: true, children: [
                        {text: {name: "Fremdkörper bloickiert"}, image: "assets/6.png", children: [{text: {name:"siehe Tabelle 2, 2.3.3"}}]},
                        {text: {name: "Bruch der Feder im Umwerfer"}, image: "assets/7.png", children: [{text: {name: "siehe Tabelle 2, 2.3.2"}}]},
                        {text: {name: "Bruch des Umwerfers"}, image: "assets/8.png", children: [{text: {name: "siehe Tabelle 2, 2.3.5"}}]}
                    ]
                    },
                    {text: {name: "Schaltwerk hinten"}, collapsed: true, children: [
                        {text: {name: "Fremdkörper blockiert"}, image: "assets/9.png", children: [{text: {name: "siehe Tabelle 2, 2.4.6"}}]},
                        {text: {name: "Bruch der Feder im Schaltwerk"}, image: "assets/10.png", children: [{text: {name: "siehe Tabelle 2, 2.4.2"}}]},
                        {text: {name: "Bruch des Schaltwerks oder des Schaltauges"}, image: "assets/11.png", children: [{text: {name: "siehe Tabelle 2, 2.4.3"}}]}
                    ]},
                    {text: {name: "Kette und Zahnräder"}, collapsed: true, children: [
                        {text: {name: "Schmier-Ablagerungen an den Zahnrädern"}, image: "assets/12.png", children: [{text: {name: "siehe Tabelle 2, 2.5.2"}}]},
                        {text: {name: "Kettenglieder gerissen"}, image: "assets/13.png", children: [{text: {name: "siehe Tabelle 2, 2.5.6"}}]},
                    ]},
                ]}, 
                {text: {name: "keine erkennbare optische Beschädigungen an der Schaltung"}, collapsed: true, children: [
                    {text: {name: "Schalthebel"}, collapsed: true, children: [
                        {text: {name: "Fremdkörper blockiert"}, image: "assets/14.png", children: [{text:{name: "siehe Tabelle 2, 2.1.1"} }]},
                        {text: {name: "Bruch der Seilaufnahme im Schalthebel"}, image: "assets/15.png", children: [{text: {name: "siehe Tabelle 2, 2.1.4"}}]},
                        {text: {name: "Zugspannungsschraube falsch eingestellt oder defekt"}, image: "assets/16.png", children: [{text: {name: "siehe Tabelle 2, 2.1.5"}}]},
                        {text: {name: "Seilspannung zu stark/schwach"}, image: "assets/17.png", children: [{text: {name: "siehe Tabelle 2, 2.1.2"}}]},
                    ]},
                    {text: {name: "Bowdenzug und Seilzug"}, collapsed: true, children: [
                        {text: {name: "Riss des Seilzugs"}, image: "assets/18.png", children: [{text: {name: "siehe Tabelle 2, 2.2.1"}}]},
                        {text: {name: "Fehlendes Schmiermittel auf dem Seilzug(Bowdenzug)"}, image: "assets/19.png", children: [{text: {name: "siehe Tabelle 2, 2.2.3"}}]},
                        {text: {name: "Bowdenzug mit Seilzug zusammengerostet"}, image: "assets/20.png", children: [{text: {name: "siehe Tabelle 2, 2.2.2"}}]}
                    ]},
                    {text: {name: "Umwerfer (vorne)"}, collapsed: true, children:[
                        {text: {name: "Befestigungsschraube des Umwerfers locker"}, image: "assets/21.png", children: [{text: {name: "siehe Tabelle 2, 2.3.4"}}]},
                        {text: {name: "High- und Low-Schraube verstellt"}, image: "assets/22.png", children: [{text: {name: "siehe Tabelle 2, 2.3.1"}}]},
                    ] },
                    {text: {name: "Umwerfer (hinten)"}, collapsed: true, children: [
                        {text: {name: "Befestigungsschraube des Schaltwerks locker"}, image: "assets/23.png", children: [{text: {name:"siehe Tabelle 2, 2.4.1"}}]},
                        {text: {name: "High- und Low-Schraube verstellt"}, image: "assets/24.png", children: [{text: {name:"siehe Tabelle 2, 2.4.4"}}]},
                        {text: {name: "Seilspannung zu schwach oder zu stark"}, image: "assets/25.png", children: [{text: {name:"siehe Tabelle 2, 2.4.5"}}]}
                    ]},
                    {text: {name: "Kette und Zahnräder"}, collapsed: true, children: [
                        {text: {name: "Kettenglieder schwergängig"}, image: "assets/26.png", children: [{text: {name:"siehe Tabelle 2, 2.5.5"}}]},
                        {text: {name: "Verschraubung der Zahnräder fehlerhaft"}, image: "assets/27.png", children: [{text: {name:"siehe Tabelle 2, 2.5.7"}}]},
                    ]}
                ]}
            
            ]
            }],
    }
}