import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ResizeObserver } from '@juggle/resize-observer'

import Scene from './scene'

import { Controls, withControls } from 'react-three-gui'

import './index.scss'

//@ts-ignore
// const CanvasControls = withControls(Canvas)

const Index = function () {
  useEffect(() => {
    // ..
  }, [])

  return (
    <div className="index-page">
      <Canvas resize={{ polyfill: ResizeObserver }} >
        <Scene/>
        {/* <Box></Box> */}
        {/* <ambientLight intensity={0.5} color={'#ffffff'}></ambientLight> */}
      </Canvas>
    </div>
  )
}
export default Index
