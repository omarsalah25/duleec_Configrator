const vehicleConfigs = {
    defaults: {
        id: 'domes',
        addons: {
        },
    },
    vehicles: {

        domes: {

            make: 'Lampshade',
            name: 'Domes',
            model: 'assets/models/Domes/DomesHead.glb',

            default_addons: {
                Bulb: 'stock',
                Head: 'stock',
                Body: 'stock'
            },

            addons: {

                Head: {
                    name: 'Head',
                    required: true,

                    options: {
                        stock: {
                            name: 'Glass',
                            model: 'assets/models/Domes/DomesHead.glb',
                        },

                    },

                },
                Bulb: {
                    name: 'Bulb',
                    required: true,
                    options: {
                        stock: {
                            name: 'Bulb',
                            model: 'assets/models/Domes/DomesBulb.glb',
                        },

                    },
                },

                Body: {
                    name: 'Body',
                    required: true,
                    options: {

                        stock: {
                            name: 'Brass Brushed',
                            model: 'assets/models/Domes/DomesFoot_BRASSBRUSHED.glb',
                        },
                        BRONZEBRUSHED: {
                            name: 'Bronze Brushed',
                            model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        },
                        BRONZEBRUSHED2: {
                            name: 'Bronze Brushed 2',
                            model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        },
                        SHINYBRASS: {
                            name: 'Shiny Brass',
                            model: 'assets/models/Domes/DomesFoot_SHINYBRASS.glb',

                        },
                        MATTBRASS: {
                            name: 'Matt Brass',
                            model: 'assets/models/Domes/DomesFoot_MATTBRASS.glb',
                        }


                    },
                },
            },
        },



    },
}

export default vehicleConfigs
