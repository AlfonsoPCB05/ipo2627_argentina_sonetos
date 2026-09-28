export default class Model {
    constructor() {
        // Almacén de sonetos
        this.sonnets = [
            {
                id: "lope-1",
                title: "Un soneto me manda hacer Violante",
                author: "Lope de Vega",
                // 14 versos: dos cuartetos y dos tercetos
                stanzas: [
                    [
                        "Un soneto me manda hacer Violante",
                        "que en mi vida me he visto en tanto aprieto;",
                        "catorce versos dicen que es soneto;",
                        "burla burlando van los tres delante."
                    ],
                    [
                        "Yo pensé que no hallara consonante,",
                        "y estoy a la mitad de otro cuarteto;",
                        "mas si me veo en el primer terceto,",
                        "no hay cosa en los cuartetos que me espante."
                    ],
                    [
                        "Por el primer terceto voy entrando,",
                        "y parece que entré con pie derecho,",
                        "pues fin con este verso le voy dando."
                    ],
                    [
                        "Ya estoy en el segundo, y aun sospecho",
                        "que voy los trece versos acabando;",
                        "contad si son catorce, y está hecho."
                    ]
                ]
            
            },

            {
                id: "quevedo-1",
                title: "A una nariz",
                author: "Quevedo",
                stanzas:[
                [   "Érase un hombre a una nariz pegado",
                    "érase una nariz superlativa",
                    "érase una nariz sayón y escriba",
                    "érase un pez espada muy barbado."
                ],
                [   
                    "Érase un reloj de sol mal encarado,",
                    "érase un alquitara pensativa,",
                    "érase un elefante boca arriba,",
                    "era Ovidio Nasón mas narizado."

                ],
                [
                    "Érase un espolón de una galera,",
                    "érase una pirámide de Egipto,",
                    "las doce tribus de narices era."
                ],
                [
                    "Érase un naricísimo infinito,",
                    "muchísima nariz, nariz tan fiera,",
                    "que en la cara de Anás fuera delito."
                ],

                ]

            }
        ];
        }

    getAllSonnets() {
        return this.sonnets.map(s => ({ id: s.id, title: s.title, author: s.author }));
    }

    getSonnetById(id) {
        return this.sonnets.find(s => s.id === id);
    }
}