import React, { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, PerformanceMonitor } from '@react-three/drei'
import { DefaultLoadingManager } from 'three'
import Environment from './Environment'
import Loader from './Loader'
import Vehicle from './Vehicle'
import Screenshot from './Screenshot'

const ThreeCanvas = ({ currentVehicle, setVehicle, cameraAutoRotate }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [performanceDegraded, setPerformanceDegraded] = useState(false)

    // Set loaded state based on default loading manager.
    useEffect(() => {
        const loadingManager = DefaultLoadingManager
        loadingManager.onStart = () => {
            setIsLoaded(false)
        }
        loadingManager.onLoad = () => {
            setIsLoaded(true)
        }

        return () => {
            loadingManager.onStart = null
            loadingManager.onLoad = null
        }
    }, [])

    return (
        <div id='vehicle'>
            {!isLoaded && <Loader />}
            <Canvas shadows>
                <PerformanceMonitor onDecline={() => setPerformanceDegraded(true)} />
                <OrbitControls
                    makeDefault
                    target={[0, 0.5, 0]}
                    minDistance={2}
                    maxDistance={500}
                    maxPolarAngle={Math.PI}
                    autoRotate={cameraAutoRotate}
                    autoRotateSpeed={5}
                    dampingFactor={0.025}
                />
                <PerspectiveCamera makeDefault fov={25} position={[1, 1.5, 1.5]}>
                    <pointLight position={[4, 2, 4]} intensity={0.1} />
                </PerspectiveCamera>

                <Suspense fallback={null}>
                    <Vehicle currentVehicle={currentVehicle} setVehicle={setVehicle} scale={1} />
                </Suspense>

                <Environment performanceDegraded={performanceDegraded} />

                <Screenshot />
            </Canvas>
        </div>
    )
}

export default ThreeCanvas
