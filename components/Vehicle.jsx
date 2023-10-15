import React, { memo, useMemo, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import useAnimateHeight from '../hooks/useAnimateHeight'
import vehicleConfigs from '../vehicleConfigs'

// Model loader.
const Model = memo(({ path, ...props }) => {
    const model = useGLTF(path, true)
    return <primitive object={model.scene} {...props} />
})

// Body.
const Body = memo(({ id, height, addons, setVehicle }) => {
    const vehicle = useRef()
    //set from url if exists
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const encodedConfig = urlParams.get('config')

        if (encodedConfig) {
            console.log('Loading vehicle from shared url.')
            const jsonString = decodeURIComponent(encodedConfig)
            const config = JSON.parse(jsonString)
            // Overwrite current vehicle from URL parameter.
            setVehicle(config)
            console.log(config)

        }
        // Set default addons.
        else {
            setVehicle({ addons: vehicleConfigs.vehicles[id].default_addons })
        }
    }, [setVehicle, id])

    // Build array of addon paths.
    const addonPaths = useMemo(() => {
        return Object.entries(addons)
            .filter(([type, value]) => vehicleConfigs.vehicles[id]['addons'][type]?.['options'][value])
            .map(([type, value]) => {
                // Return path.
                return vehicleConfigs.vehicles[id]['addons'][type]['options'][value]['model']
            })
    }, [id, addons])

    // Animate height.
    useAnimateHeight(vehicle, height, height + 0.5)

    return (
        <group ref={vehicle} name='Body' key={id}>
            <Model path={vehicleConfigs.vehicles[id].model} />
            {addonPaths.length ? (
                <group name='Addons'>
                    {addonPaths.map((addon) => (
                        <Model key={addon} path={addon} />
                    ))}
                </group>
            ) : null}
        </group>
    )
})

// Vehicle.
const Vehicle = ({ currentVehicle, setVehicle }) => {
    const { id, addons } = currentVehicle

    // Get wheel (axle) height.
    const axleHeight = useMemo(() => {
        return (30 * 2.6) / 100 / 2
    }, [30])

    // Get lift height in meters.
    const liftHeight = useMemo(() => {
        const liftInches = 1 || 0
        return (liftInches * 2.54) / 100
    }, [1])

    // Get vehicle height.
    const vehicleHeight = useMemo(() => {
        return axleHeight + liftHeight
    }, [axleHeight, liftHeight])


    return (
        <group name='Vehicle'>
            <Body key={id} id={id} height={vehicleHeight} addons={addons} setVehicle={setVehicle} />
        </group>
    )
}

export default Vehicle
