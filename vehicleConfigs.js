const vehicleConfigs = {
    defaults: {
        id: 'domes',
        addons: {
        },
    },
    vehicles: {

        // chand: {
        //     make: 'chand',
        //     name: 'chand',
        //     model: 'assets/models/wheels/rims/body.glb',

        //     default_addons: {
        //         chains: 'stock',
        //         heads: 'stock',
        //         lambs: 'stock',
        //     },
        //     addons: {
        //         lambs: {
        //             name: 'lambs',
        //             required: true,
        //             options: {
        //                 stock: {
        //                     name: 'chand',
        //                     model: 'assets/models/wheels/rims/lamb.glb',
        //                 },
        //                 shrockworks: {
        //                     name: 'chand2',
        //                     model: 'assets/models/wheels/rims/lamb-1.glb',
        //                 },
        //             },
        //         },
        //         chains: {
        //             name: 'chains',
        //             required: true,
        //             options: {
        //                 stock: {
        //                     name: 'chain',
        //                     model: 'assets/models/wheels/rims/chain.glb',
        //                 },

        //             },

        //         },
        //         heads: {
        //             name: 'heads',
        //             required: false,
        //             options: {
        //                 stock: {
        //                     name: 'head',
        //                     model: 'assets/models/wheels/rims/head.glb',
        //                 },


        //             },

        //         },
        //     },
        // },

        // chand2: {
        //     make: 'chand',
        //     name: 'chand2',
        //     model: 'assets/models/wheels/rims/GoldChandelier-base.glb',

        //     default_addons: {
        //         crystals: 'stock',
        //         chains: 'stock'

        //     },
        //     addons: {
        //         lambs: {
        //             name: 'lambs',
        //             required: true,
        //             options: {
        //                 stock: {
        //                     name: 'chand',
        //                     model: 'assets/models/wheels/rims/GoldChandelier-lambs.glb',
        //                 },
        //                 shrockworks: {
        //                     name: 'chand2',
        //                     model: 'assets/models/wheels/rims/lamb-1.glb',
        //                 },
        //             },
        //         },
        //         chains: {
        //             name: 'chains',
        //             required: false,
        //             options: {
        //                 stock: {
        //                     name: 'chain',
        //                     model: 'assets/models/wheels/rims/GoldChandelier-chain.glb',
        //                 },

        //             },

        //         },

        //         crystals: {
        //             name: 'crystals',
        //             required: true,
        //             options: {
        //                 stock: {
        //                     name: 'head',
        //                     model: 'assets/models/wheels/rims/GoldChandelier-crystals.glb',
        //                 },


        //             },

        //         },

        //     },
        // },

        // chand3: {
        //     make: 'chand',
        //     name: 'chand3',
        //     model: 'assets/models/wheels/rims/chand-body.glb',

        //     default_addons: {


        //     },
        //     addons: {


        //     },
        // },

        // chand4: {
        //     make: 'chand',
        //     name: 'chand4',
        //     model: 'assets/models/wheels/rims/k-body.glb',

        //     default_addons: {


        //     },
        //     addons: {

        //     },
        // },

        domes: {

            make: 'domes',
            name: 'domes',
            model: 'assets/models/wheels/rims/DomesHead.glb',

            default_addons: {
                Bulb: 'stock',
                Head: 'stock',
                Body: 'stock'
            },

            addons: {

                Head: {
                    name: 'head',
                    required: true,

                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/DomesHead.glb',
                        },
                        stockW: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/DomesHead.glb',
                        },
                    },

                },
                Bulb: {
                    name: 'Bulb',
                    required: true,
                    options: {
                        stock: {
                            name: 'chand',
                            model: 'assets/models/wheels/rims/DomesBulb.glb',
                        },

                    },
                },

                Body: {
                    name: 'body',
                    required: true,
                    options: {
                        // stock: {
                        //     name: 'white',
                        //     model: 'assets/models/wheels/rims/DomesFoot.glb',
                        // },
                        stock: {
                            name: 'Brass Brushed',
                            model: 'assets/models/wheels/rims/DomesFoot_BRASSBRUSHED.glb',
                        },
                        BRONZEBRUSHED: {
                            name: 'Bronze Brushed',
                            model: 'assets/models/wheels/rims/DomesFoot_BRONZEBRUSHED.glb',
                        },
                        BRONZEBRUSHED2: {
                            name: 'Bronze Brushed 2',
                            model: 'assets/models/wheels/rims/DomesFoot_BRONZEBRUSHED.glb',
                        },
                        SHINYBRASS: {
                            name: 'Shiny Brass',
                            model: 'assets/models/wheels/rims/DomesFoot_SHINYBRASS.glb',

                        },
                        MATTBRASS: {
                            name: 'Matt Brass',
                            model: 'assets/models/wheels/rims/DomesFoot_MATTBRASS.glb',
                        }


                    },
                },
            },
        },

        lind: {

            make: 'lind',
            name: 'lind',
            model: 'assets/models/wheels/rims/lind/LindHead.glb',

            default_addons: {
                Wire: 'stock',
                Base: 'stock',
                Head: 'stock',
                Body: 'stock'
            },

            addons: {

                Head: {
                    name: 'head',
                    required: true,

                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/lind/LindHead.glb',
                        },
                        // stockW: {
                        //     name: 'head',
                        //     model: 'assets/models/wheels/rims/DomesHead.glb',
                        // },
                    },

                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        stock: {
                            name: 'normal',
                            model: 'assets/models/wheels/rims/lind/LindBase.glb',
                        },

                    },
                },
                Wire: {
                    name: 'Wire',
                    required: true,
                    options: {
                        stock: {
                            name: 'black matt',
                            model: 'assets/models/wheels/rims/lind/LindWire.glb',
                        },

                    },
                },

                Body: {
                    name: 'body',
                    required: false,
                    options: {
                        stock: {
                            name: 'white',
                            model: 'assets/models/wheels/rims/lind/LindBaseTopWhite.glb',
                        },

                        // gold: {
                        //     name: 'gold',
                        //     model: 'assets/models/wheels/rims/lind/LindBaseTopGold.glb',
                        // },

                        wood: {
                            name: 'wood',
                            model: 'assets/models/wheels/rims/lind/LindBaseTopWood.glb',
                        },
                    },
                },
            },
        },

        lindD: {

            make: 'lind',
            name: 'lind(with dinner set)',
            model: 'assets/models/wheels/rims/dinnerSet.glb',

            default_addons: {
                Wire: 'stock',
                Base: 'stock',
                Head: 'stock',
                Body: 'stock'
            },

            addons: {

                Head: {
                    name: 'head',
                    required: true,

                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/Lind2/LindHead.glb',
                        },
                        // stockW: {
                        //     name: 'head',
                        //     model: 'assets/models/wheels/rims/DomesHead.glb',
                        // },
                    },

                },
                Base: {
                    name: 'Base',
                    required: true,
                    options: {
                        stock: {
                            name: 'normal',
                            model: 'assets/models/wheels/rims/Lind2/LindBase.glb',
                        },

                    },
                },
                Wire: {
                    name: 'Wire',
                    required: true,
                    options: {
                        stock: {
                            name: 'black matt',
                            model: 'assets/models/wheels/rims/Lind2/LindWire.glb',
                        },

                    },
                },

                Body: {
                    name: 'body',
                    required: false,
                    options: {
                        stock: {
                            name: 'white',
                            model: 'assets/models/wheels/rims/Lind2/LindBaseTopWhite.glb',
                        },
                        gold: {
                            name: 'gold',
                            model: 'assets/models/wheels/rims/Lind2/LindBaseTopGold.glb',
                        },
                        // wood: {
                        //     name: 'wood',
                        //     model: 'assets/models/wheels/rims/Lind2/LindBaseTopWood.glb',
                        // },
                    },
                },
            },
        },

        chandlier: {
            make: 'chandlier',
            name: 'Lotus Chandlier',
            model: 'assets/models/wheels/rims/Chandlier/chandlierBase.glb',

            default_addons: {
                chains: 'stock',
                Head: 'stock',
                Bulb: 'stock',
                Body: 'stock'
            },
            addons: {
                Bulb: {
                    name: 'Bulb',
                    required: true,
                    options: {
                        stock: {
                            name: 'stock',
                            model: 'assets/models/wheels/rims/Chandlier/chandlierBulb.glb',
                        },
                        // shrockworks: {
                        //     name: 'chand2',
                        //     model: 'assets/models/wheels/rims/lamb-1.glb',
                        // },
                    },
                },
                chains: {
                    name: 'chains',
                    required: true,
                    options: {
                        stock: {
                            name: 'chain',
                            model: 'assets/models/wheels/rims/Chandlier/chandlierChain.glb',
                        },

                    },

                },
                Head: {
                    name: 'Head',
                    required: false,
                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/Chandlier/chandlierHead.glb',
                        },


                    },

                },
                Body: {
                    name: 'Head',
                    required: false,
                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/Chandlier/chandlierBaseTop.glb',
                        },


                    },

                },
            },
        },

        lotus: {
            make: 'chandlier',
            name: 'Lotus',
            model: 'assets/models/wheels/rims/Lotus/base.glb',

            default_addons: {
                Head: 'stock',
                Bulb: 'stock',
                Body: 'stock'
            },
            addons: {
                Bulb: {
                    name: 'Bulb',
                    required: true,
                    options: {
                        stock: {
                            name: 'stock',
                            model: 'assets/models/wheels/rims/Lotus/bulb.glb',
                        },
                        // shrockworks: {
                        //     name: 'chand2',
                        //     model: 'assets/models/wheels/rims/lamb-1.glb',
                        // },
                    },
                },

                Head: {
                    name: 'Head',
                    required: true,
                    options: {
                        stock: {
                            name: 'stock',
                            model: 'assets/models/wheels/rims/Lotus/head.glb',
                        },


                    },

                },
                Body: {
                    name: 'Body',
                    required: true,
                    options: {
                        stock: {
                            name: 'gold',
                            model: 'assets/models/wheels/rims/Lotus/baseTop.glb',
                        },
                        black: {
                            name: 'black',
                            model: 'assets/models/wheels/rims/Lotus/baseTopBlack.glb',
                        },


                    },

                },
            },
        },

        parker: {
            make: 'chandlier',
            name: 'Parker',
            model: 'assets/models/wheels/rims/Parker_chandlier/body.glb',

            default_addons: {
                Head: 'stock',
                Bulb: 'stock',
                Glass: 'stock',
                Body: 'stock'
            },
            addons: {
                Bulb: {
                    name: 'Bulb',
                    required: true,
                    options: {
                        stock: {
                            name: 'stock',
                            model: 'assets/models/wheels/rims/Parker_chandlier/bulb.glb',
                        },
                        // shrockworks: {
                        //     name: 'chand2',
                        //     model: 'assets/models/wheels/rims/lamb-1.glb',
                        // },
                    },
                },
                Glass: {
                    name: 'Bulb',
                    required: false,
                    options: {
                        stock: {
                            name: 'stock',
                            model: 'assets/models/wheels/rims/Parker_chandlier/glass.glb',
                        },
                        // shrockworks: {
                        //     name: 'chand2',
                        //     model: 'assets/models/wheels/rims/lamb-1.glb',
                        // },
                    },
                },

                Head: {
                    name: 'Head',
                    required: true,
                    options: {
                        stock: {
                            name: 'stock',
                            model: 'assets/models/wheels/rims/Parker_chandlier/head.glb',
                        },
                        white: {
                            name: 'white',
                            model: 'assets/models/wheels/rims/Parker_chandlier/headWhite.glb',
                        },


                    },

                },
                Body: {
                    name: 'Body',
                    required: true,
                    options: {
                        stock: {
                            name: 'gold',
                            model: 'assets/models/wheels/rims/Parker_chandlier/body.glb',
                        },
                        black: {
                            name: 'black',
                            model: 'assets/models/wheels/rims/Parker_chandlier/bodyBlack.glb',
                        },


                    },

                },
            },
        },

        // bed: {

        //     make: 'lind',
        //     name: 'lind(with bed set)',
        //     model: 'assets/models/wheels/rims/bedromm.glb',

        //     default_addons: {
        //         chains: 'stock',
        //         Head: 'stock',
        //         Bulb: 'stock',
        //         Base: 'stock',
        //         Body: 'stock'
        //     },
        //     addons: {
        //         Bulb: {
        //             name: 'Bulb',
        //             required: true,
        //             options: {
        //                 stock: {
        //                     name: 'stock',
        //                     model: 'assets/models/wheels/rims/Chandlier/bedroom/chandlierBulb.glb',
        //                 },
        //                 // shrockworks: {
        //                 //     name: 'chand2',
        //                 //     model: 'assets/models/wheels/rims/lamb-1.glb',
        //                 // },
        //             },
        //         },
        //         chains: {
        //             name: 'chains',
        //             required: true,
        //             options: {
        //                 stock: {
        //                     name: 'chain',
        //                     model: 'assets/models/wheels/rims/Chandlier/bedroom/chandlierChain.glb',
        //                 },

        //             },

        //         },
        //         Head: {
        //             name: 'Head',
        //             required: false,
        //             options: {
        //                 stock: {
        //                     name: 'head',
        //                     model: 'assets/models/wheels/rims/Chandlier/bedroom/chandlierHead.glb',
        //                 },
        //             },
        //         },
        //         Body: {
        //             name: 'Head',
        //             required: false,
        //             options: {
        //                 stock: {
        //                     name: 'head',
        //                     model: 'assets/models/wheels/rims/Chandlier/bedroom/chandlierBaseTop.glb',
        //                 },
        //             },
        //         },
        //         Base: {
        //             name: 'Head',
        //             required: false,
        //             options: {
        //                 stock: {
        //                     name: 'head',
        //                     model: 'assets/models/wheels/rims/Chandlier/bedroom/chandlierBase.glb',
        //                 },


        //             },

        //         },
        //     },
        // },

    },
}

export default vehicleConfigs
