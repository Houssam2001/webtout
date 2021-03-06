import { useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import CustoControls from '../../controls'
import CustoCamera from '../../custom-camera'
import { folder, useControls } from 'leva'

import Earth from '../earth'
import Cloud from '../cloud'

import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'

const spotlightConfig: any = {
  showHelper: {
    value: false,
  },
  intensity: {
    value: 1.2,
    min: 0,
    max: 3,
  },
  color: {
    value: '#ffffff',
  },
  position: {
    value: [-26, 11, -11],
  },
  angle: {
    value: 0.2,
    min: 0,
    max: 1,
  },
  castShadow: {
    value: false,
  },
  penumbra: {
    value: 0.4,
    min: 0,
    max: 1,
  },
  distance: {
    value: 58,
    min: 0,
    max: 300,
  },
  decay: {
    value: 1,
    min: 0,
    max: 2,
  },
}

const Scene = function (props: any) {
  const earthGrounpRef = useRef<THREE.Group>(null)
  const spotLightRef = useRef<any>(null)

  // @ts-ignore
  // const spotlightProps = useControls({
  //   spotLight: folder(spotlightConfig),
  // })

  useEffect(() => {
    // ..
  })

  // useHelper(spotLightRef, spotlightProps.showHelper ? SpotLightHelper : null)

  useFrame((state, delta) => {
    if (earthGrounpRef.current) {
      earthGrounpRef.current.rotation.y += 0.002
    }
  })

  // @ts-ignore
  return (
    <>
      <CustoCamera
        position={[0, 0, -20]}
        fov={40}
        near={0.1}
        far={1000}
        name={'per-camera'}
      >
        <spotLight
          ref={spotLightRef}
         // {...spotlightConfig}
          //  {...spotlightProps}
          intensity={1.20}
          color={"#ffffff"}
          position={[-26, 11, -11]}
          angle={0.2}
          penumbra={0.4}
          distance={58}
          decay={1}
          //shadow-camera-near={50}
          //shadow-camera-far={200}
          //shadow-camera-fov={35}
          //shadow-mapSize-width={2048}
          //shadow-mapSize-height={2048}
       />
      </CustoCamera>
      <ambientLight intensity={0.8} color={'#393939'}/>
      <Suspense fallback={null}>
        <group ref={earthGrounpRef}>
          <Earth postion={[0, 0, 0]} />
          <Cloud />
        </group>
        {/* <Box></Box> */}
      </Suspense>
      <CustoControls />
    </>
  )
}

export default Scene
