const vehicleConfigs = {
    defaults: {
        id: 'Domes',
        addons: {
        },
    },
    vehicles: {
        //Table Lamps
        Domes: {
            make: 'Table Lamps',
            name: 'Domes',
            model: 'assets/models/Table-Lambs/Domes/DomesHead.glb',
            imageUrl: 'assets/images/products/domes.png',

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
                            model: 'assets/models/Table-Lambs/Domes/DomesHead.glb',
                        },
                    },
                },
                Bulb: {
                    name: 'Bulb',
                    required: true,
                    options: {
                        stock: {
                            name: 'Bulb',
                            model: 'assets/models/Table-Lambs/Domes/DomesBulb.glb',
                        },
                    },
                },
                Body: {
                    name: 'Base',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass Brushed',
                            model: 'assets/models/Table-Lambs/Domes/DomesFoot_BRASSBRUSHED.glb',
                        },
                        BRONZEBRUSHED: {
                            name: 'Bronze Brushed',
                            model: 'assets/models/Table-Lambs/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        },
                        BRONZEBRUSHED2: {
                            name: 'Bronze Brushed 2',
                            model: 'assets/models/Table-Lambs/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        },
                        SHINYBRASS: {
                            name: 'Shiny Brass',
                            model: 'assets/models/Table-Lambs/Domes/DomesFoot_SHINYBRASS.glb',

                        },
                        MATTBRASS: {
                            name: 'Matt Brass',
                            model: 'assets/models/Table-Lambs/Domes/DomesFoot_MATTBRASS.glb',
                        }
                    },
                },
            },
        },

        Brezy: {
            make: 'Table Lamps',
            name: 'Brezy',
            model: 'assets/models/Table-Lambs/BREZY/BREZY.glb',
            imageUrl: 'assets/images/products/brezy.png',

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
                            model: 'assets/models/Table-Lambs/BREZY/BrezyBodyGold.glb',
                        },
                        BLACKMATT: {
                            name: 'Black Matt',
                            model: 'assets/models/Table-Lambs/BREZY/BrezyBodyBlack.glb',
                        },
                    },
                },
            },
        },

        Kira: {
            make: 'Table Lamps',
            name: 'Kira',
            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKira.glb',
            imageUrl: 'assets/images/products/kira.png',

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
                            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKiraHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKiraHeadGold.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKiraStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKiraStandGold.glb',
                        },
                    },
                },

                Base: {
                    name: 'Base',
                    required: true,
                    options: {

                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKiraBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/GOLD-KIRA/GoldKiraBaseGold.glb',
                        },
                        // BRONZEBRUSHED: {
                        //     name: 'Bronze Brushed',
                        //     model: 'assets/models/Table-Lambs/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // BRONZEBRUSHED2: {
                        //     name: 'Bronze Brushed 2',
                        //     model: 'assets/models/Table-Lambs/Domes/DomesFoot_BRONZEBRUSHED.glb',
                        // },
                        // SHINYBRASS: {
                        //     name: 'Shiny Brass',
                        //     model: 'assets/models/Table-Lambs/Domes/DomesFoot_SHINYBRASS.glb',

                        // },
                        // MATTBRASS: {
                        //     name: 'Matt Brass',
                        //     model: 'assets/models/Table-Lambs/Domes/DomesFoot_MATTBRASS.glb',
                        // }


                    },
                },
            },
        },

        Huns: {
            make: 'Table Lamps',
            name: 'Huns',
            model: 'assets/models/Table-Lambs/Huns/Huns.glb',
            imageUrl: 'assets/images/products/huns.png',

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
                            model: 'assets/models/Table-Lambs/Huns/HunsHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Huns/HunsHeadGold.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Huns/HunsStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Huns/HunsStandGold.glb',
                        },
                    },
                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Huns/HunsBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Huns/HunsBaseGold.glb',
                        },
                    },
                },
            },
        },

        Shadedkira: {
            make: 'Table Lamps',
            name: 'Shadedkira',
            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKira.glb',
            imageUrl: 'assets/images/products/shadedKira.png',

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
                            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKiraHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKiraHeadGold.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKiraStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKiraStandGold.glb',
                        },
                    },
                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKiraBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Shaded-Kira/ShadedKiraBaseGold.glb',
                        },
                    },
                },
            },
        },

        Sheddy: {
            make: 'Table Lamps',
            name: 'Sheddy',
            model: 'assets/models/Table-Lambs/Sheddy/Sheddy.glb',
            imageUrl: 'assets/images/products/sheddy.png',

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
                            model: 'assets/models/Table-Lambs/Sheddy/SheddyBaseStock.glb',
                        },
                    },
                },
                Head: {
                    name: 'Head',
                    required: true,
                    options: {

                        stock: {
                            name: 'Brass Brushed',
                            model: 'assets/models/Table-Lambs/Sheddy/SheddyHeadGold.glb',
                        },
                        Black: {
                            name: 'Black Matt',
                            model: 'assets/models/Table-Lambs/Sheddy/SheddyHeadBlack.glb',
                        },
                    },
                },
            },
        },

        Toris: {
            make: 'Table Lamps',
            name: 'Toris',
            model: 'assets/models/Table-Lambs/Toris/Toris.glb',
            imageUrl: 'assets/images/products/toris.png',

            default_addons: {

                Body: 'stock'
            },

            addons: {
                Body: {
                    name: 'Base',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass Matt',
                            model: 'assets/models/Table-Lambs/Toris/TorisBaseGold.glb',
                        },
                        BLACKMATT: {
                            name: 'Black Matt',
                            model: 'assets/models/Table-Lambs/Toris/TorisBaseBlack.glb',
                        },
                    },
                },
            },
        },

        Vector: {
            make: 'Table Lamps',
            name: 'Vector',
            model: 'assets/models/Table-Lambs/Vector/Vector.glb',
            imageUrl: 'assets/images/products/vector.png',

            default_addons: {
                Head: 'stock',
                // Base: 'stock',
                Stand: 'stock'
            },

            addons: {
                Head: {
                    name: 'Head',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Vector/VectorHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Vector/VectorHeadGold.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Vector/VectorStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Vector/VectorStandGold.glb',
                        },
                    },
                },
            },
        },

        Wing: {
            make: 'Table Lamps',
            name: 'Wing',
            model: 'assets/models/Table-Lambs/Wing/Wing.glb',
            imageUrl: 'assets/images/products/wing.png',

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
                            model: 'assets/models/Table-Lambs/Wing/WingHeadBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Wing/WingHeadGold.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Wing/WingStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Wing/WingStandGold.glb',
                        },
                    },
                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Table-Lambs/Wing/WingBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Table-Lambs/Wing/WingBaseGold.glb',
                        },
                    },
                },
            },
        },

        //Floor Lamps
        Arche: {
            make: 'Floor Lamps',
            name: 'Arche',
            model: 'assets/models/Floor-Lambs/Arche/Arche.glb',
            imageUrl: 'assets/images/products/arche.png',

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
                        Gold: {
                            name: 'Gold',
                            model: 'assets/models/Floor-Lambs/Arche/ArcheHeadGold.glb',
                        },
                        stock: {

                            name: 'Black',
                            model: 'assets/models/Floor-Lambs/Arche/ArcheHeadBlack.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Floor-Lambs/Arche/ArcheStandBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Floor-Lambs/Arche/ArcheStandGold.glb',
                        },
                    },
                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        Black: {
                            name: 'Black',
                            model: 'assets/models/Floor-Lambs/Arche/ArcheBaseBlack.glb',
                        },
                        stock: {
                            name: 'Gold',
                            model: 'assets/models/Floor-Lambs/Arche/ArcheBaseGold.glb',
                        },
                    },
                },
            },
        },

        Curvy: {
            make: 'Floor Lamps',
            name: 'Curvy',
            model: 'assets/models/Floor-Lambs/Curvy/Curvy.glb',
            imageUrl: 'assets/images/products/curvy.png',

            default_addons: {
                Stand: 'stock',
                Base: 'stock'
            },

            addons: {
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        stock: {
                            name: 'Black Matt',
                            model: 'assets/models/Floor-Lambs/Curvy/CurvyBaseBlack.glb',
                        },
                    },
                },
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        Gold: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Curvy/CurvyStandGold.glb',
                        },
                        stock: {
                            name: 'Black Matt',
                            model: 'assets/models/Floor-Lambs/Curvy/CurvyStandBlack.glb',
                        },
                    },
                },
            },
        },

        Victory: {
            make: 'Floor Lamps',
            name: 'Victory',
            model: 'assets/models/Floor-Lambs/Victory/Victory.glb',
            imageUrl: 'assets/images/products/victory.png',

            default_addons: {
                Stand: 'stock'
            },

            addons: {
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Victory/VictoryStandGold.glb',
                        },
                        Black: {
                            name: 'Black Matt',
                            model: 'assets/models/Floor-Lambs/Victory/VictoryStandBlack.glb',
                        },
                    },
                },
            },
        },

        Inverse: {
            make: 'Floor Lamps',
            name: 'Inverse',
            model: 'assets/models/Floor-Lambs/Inverse/Inverse.glb',
            imageUrl: 'assets/images/products/inverse.png',

            default_addons: {
                Stand: 'stock'
            },
            addons: {
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Inverse/InverseStandGold.glb',
                        },
                        Black: {
                            name: 'Black Matt',
                            model: 'assets/models/Floor-Lambs/Inverse/InverseStandBlack.glb',
                        },
                    },
                },
            },
        },

        Mount: {
            make: 'Floor Lamps',
            name: 'Mount',
            model: 'assets/models/Floor-Lambs/Mount/Mount.glb',
            imageUrl: 'assets/images/products/mount.png',

            default_addons: {
                Base: 'stock',
                Stand: 'stock'
            },

            addons: {
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Mount/MountStandGold.glb',
                        },
                    },
                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {

                        stock: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Mount/MountBaseGold.glb',
                        },
                    },
                },
            },
        },

        Tordu: {
            make: 'Floor Lamps',
            name: 'Tordu',
            model: 'assets/models/Floor-Lambs/Tordu/Tordu.glb',
            imageUrl: 'assets/images/products/tordu.png',

            default_addons: {
                Base: 'stock',
                Stand: 'stock'
            },

            addons: {
                Stand: {
                    name: 'Stand',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Tordu/TorduStandGold.glb',
                        },
                        Black: {
                            name: 'Black Matt',
                            model: 'assets/models/Floor-Lambs/Tordu/TorduStandBlack.glb',
                        },
                    },
                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        stock: {
                            name: 'Brass',
                            model: 'assets/models/Floor-Lambs/Tordu/TorduBaseGold.glb',
                        },
                        Black: {
                            name: 'Black Matt',
                            model: 'assets/models/Floor-Lambs/Tordu/TorduBaseBlack.glb',
                        },
                    },
                },
            },
        },
    },
}

export default vehicleConfigs
