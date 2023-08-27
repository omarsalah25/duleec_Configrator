const vehicleConfigs = {
    defaults: {
        id: 'chand',
        addons: {
        },
    },
    vehicles: {
        chand: {
            make: 'chand',
            name: 'chand',
            model: 'assets/models/wheels/rims/body.glb',

            default_addons: {
                chains: 'stock',
                heads: 'stock',
                lambs: 'stock',
            },
            addons: {
                lambs: {
                    name: 'lambs',
                    required: true,
                    options: {
                        stock: {
                            name: 'chand',
                            model: 'assets/models/wheels/rims/lamb.glb',
                        },
                        shrockworks: {
                            name: 'chand2',
                            model: 'assets/models/wheels/rims/lamb-1.glb',
                        },
                    },
                },
                chains: {
                    name: 'chains',
                    required: true,
                    options: {
                        stock: {
                            name: 'chain',
                            model: 'assets/models/wheels/rims/chain.glb',
                        },

                    },

                },
                heads: {
                    name: 'heads',
                    required: false,
                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/head.glb',
                        },


                    },

                },
                // sliders: {
                //     name: 'Sliders',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb',
                //         },
                //         steel: {
                //             name: 'Steel',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb',
                //         },
                //     },
                // },
                // rack: {
                //     name: 'Rack',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_rack.glb',
                //         },
                //         whitson: {
                //             name: 'Whitson Metalworks',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb',
                //         },
                //     },
                // },
            },
        },

        chand2: {
            make: 'chand',
            name: 'chand2',
            model: 'assets/models/wheels/rims/GoldChandelier-base.glb',

            default_addons: {
                crystals: 'stock',
                chains: 'stock'

            },
            addons: {
                lambs: {
                    name: 'lambs',
                    required: true,
                    options: {
                        stock: {
                            name: 'chand',
                            model: 'assets/models/wheels/rims/GoldChandelier-lambs.glb',
                        },
                        shrockworks: {
                            name: 'chand2',
                            model: 'assets/models/wheels/rims/lamb-1.glb',
                        },
                    },
                },
                chains: {
                    name: 'chains',
                    required: false,
                    options: {
                        stock: {
                            name: 'chain',
                            model: 'assets/models/wheels/rims/GoldChandelier-chain.glb',
                        },

                    },

                },

                crystals: {
                    name: 'crystals',
                    required: true,
                    options: {
                        stock: {
                            name: 'head',
                            model: 'assets/models/wheels/rims/GoldChandelier-crystals.glb',
                        },


                    },

                },
                // sliders: {
                //     name: 'Sliders',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb',
                //         },
                //         steel: {
                //             name: 'Steel',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb',
                //         },
                //     },
                // },
                // rack: {
                //     name: 'Rack',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_rack.glb',
                //         },
                //         whitson: {
                //             name: 'Whitson Metalworks',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb',
                //         },
                //     },
                // },
            },
        },
        chand3: {
            make: 'chand',
            name: 'chand3',
            model: 'assets/models/wheels/rims/chand-body.glb',

            default_addons: {


            },
            addons: {

                // sliders: {
                //     name: 'Sliders',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb',
                //         },
                //         steel: {
                //             name: 'Steel',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb',
                //         },
                //     },
                // },
                // rack: {
                //     name: 'Rack',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_rack.glb',
                //         },
                //         whitson: {
                //             name: 'Whitson Metalworks',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb',
                //         },
                //     },
                // },
            },
        },

        chand4: {
            make: 'chand',
            name: 'chand4',
            model: 'assets/models/wheels/rims/k-body.glb',

            default_addons: {


            },
            addons: {

                // sliders: {
                //     name: 'Sliders',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_sliders.glb',
                //         },
                //         steel: {
                //             name: 'Steel',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/steel_sliders.glb',
                //         },
                //     },
                // },
                // rack: {
                //     name: 'Rack',
                //     required: false,
                //     options: {
                //         stock: {
                //             name: 'Stock',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/stock_rack.glb',
                //         },
                //         whitson: {
                //             name: 'Whitson Metalworks',
                //             model: 'assets/models/vehicles/toyota/4runner/3g/whitson_rack.glb',
                //         },
                //     },
                // },
            },
        },
    },
}

export default vehicleConfigs
