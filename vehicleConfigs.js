const vehicleConfigs = {
    defaults: {
        id: 'domes',
        addons: {
        },
    },
    vehicles: {

        domes: {

            make: 'Table Lamps',
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
                    name: 'Base',
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

        BREZY: {
            make: 'Table Lamps',
            name: 'Brezy',
            model: 'assets/models/BREZY/BREZY.glb',
            default_addons: {

                Body: 'stock'
            },
            addons: {
                Body: {
                    name: 'Base',
                    required: true,
                    options: {

                        stock: {
                            name: 'Brass Brushed',
                            model: 'assets/models/BREZY/BrezyBodyGold.glb',
                        },
                        BLACKMATT: {
                            name: 'Black Matt',
                            model: 'assets/models/BREZY/BrezyBodyBlack.glb',
                        },

                    },
                },
            },
        },

        Kira: {
            make: 'Table Lamps',
            name: 'Kira',
            model: 'assets/models/GOLD-KIRA/GoldKira.glb',
            default_addons: {
                Head: 'stock',
                Base: 'stock',
                Stand: 'stock'
            },
            addons: {

                Head: {
                    name: 'Head',
                    required: true,

                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/GOLD-KIRA/GoldKiraHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/GOLD-KIRA/GoldKiraHeadGold.glb',
                        },

                    },

                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/GOLD-KIRA/GoldKiraStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/GOLD-KIRA/GoldKiraStandGold.glb',
                        },

                    },
                },

                Base: {
                    name: 'Base',
                    required: true,
                    options: {

                        Black: {
                            name: 'Black',
                            model: 'assets/models/GOLD-KIRA/GoldKiraBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/GOLD-KIRA/GoldKiraBaseGold.glb',
                        },
                        // BRONZEBRUSHED: {
                        //     name: 'Bronze Brushed',
                        //     model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // BRONZEBRUSHED2: {
                        //     name: 'Bronze Brushed 2',
                        //     model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // SHINYBRASS: {
                        //     name: 'Shiny Brass',
                        //     model: 'assets/models/Domes/DomesFoot_SHINYBRASS.glb',

                        // },
                        // MATTBRASS: {
                        //     name: 'Matt Brass',
                        //     model: 'assets/models/Domes/DomesFoot_MATTBRASS.glb',
                        // }


                    },
                },
            },
        },

        Huns: {
            make: 'Table Lamps',
            name: 'Huns',
            model: 'assets/models/Huns/Huns.glb',
            default_addons: {
                Head: 'stock',
                Base: 'stock',
                Stand: 'stock'
            },
            addons: {

                Head: {
                    name: 'Head',
                    required: true,

                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Huns/HunsHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Huns/HunsHeadGold.glb',
                        },

                    },

                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Huns/HunsStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Huns/HunsStandGold.glb',
                        },

                    },
                },

                Base: {
                    name: 'Base',
                    required: true,
                    options: {

                        Black: {
                            name: 'Black',
                            model: 'assets/models/Huns/HunsBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Huns/HunsBaseGold.glb',
                        },
                        // BRONZEBRUSHED: {
                        //     name: 'Bronze Brushed',
                        //     model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // BRONZEBRUSHED2: {
                        //     name: 'Bronze Brushed 2',
                        //     model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // SHINYBRASS: {
                        //     name: 'Shiny Brass',
                        //     model: 'assets/models/Domes/DomesFoot_SHINYBRASS.glb',

                        // },
                        // MATTBRASS: {
                        //     name: 'Matt Brass',
                        //     model: 'assets/models/Domes/DomesFoot_MATTBRASS.glb',
                        // }


                    },
                },
            },
        },

        ShadedKira: {
            make: 'Table Lamps',
            name: 'Shaded Kira',
            model: 'assets/models/Shaded-Kira/ShadedKira.glb',
            default_addons: {
                Head: 'stock',
                Base: 'stock',
                Stand: 'stock'
            },
            addons: {

                Head: {
                    name: 'Head',
                    required: true,

                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Shaded-Kira/ShadedKiraHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Shaded-Kira/ShadedKiraHeadGold.glb',
                        },

                    },

                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Shaded-Kira/ShadedKiraStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Shaded-Kira/ShadedKiraStandGold.glb',
                        },

                    },
                },

                Base: {
                    name: 'Base',
                    required: true,
                    options: {

                        Black: {
                            name: 'Black',
                            model: 'assets/models/Shaded-Kira/ShadedKiraBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Shaded-Kira/ShadedKiraBaseGold.glb',
                        },
                        // BRONZEBRUSHED: {
                        //     name: 'Bronze Brushed',
                        //     model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // BRONZEBRUSHED2: {
                        //     name: 'Bronze Brushed 2',
                        //     model: 'assets/models/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // SHINYBRASS: {
                        //     name: 'Shiny Brass',
                        //     model: 'assets/models/Domes/DomesFoot_SHINYBRASS.glb',

                        // },
                        // MATTBRASS: {
                        //     name: 'Matt Brass',
                        //     model: 'assets/models/Domes/DomesFoot_MATTBRASS.glb',
                        // }


                    },
                },
            },
        },

        Sheddy: {
            make: 'Table Lamps',
            name: 'Sheddy',
            model: 'assets/models/Sheddy/Sheddy.glb',
            default_addons: {
                Head: 'stock',
                Body: 'stock'
            },
            addons: {
                Body: {
                    name: 'Base',
                    required: true,
                    options: {

                        stock: {
                            name: 'Black',
                            model: 'assets/models/Sheddy/SheddyBaseStock.glb',
                        },
                        // BLACKMATT: {
                        //     name: 'Black Matt',
                        //     model: 'assets/models/Sheddy/SheddyBodyBlack.glb',
                        // },

                    },
                },

                Head: {
                    name: 'Head',
                    required: true,
                    options: {

                        Gold: {
                            name: 'Brass Brushed',
                            model: 'assets/models/Sheddy/SheddyHeadGold.glb',
                        },
                        stock: {
                            name: 'Black Matt',
                            model: 'assets/models/Sheddy/SheddyHeadBlack.glb',
                        },

                    },
                },
            },
        },





    },
}

export default vehicleConfigs
