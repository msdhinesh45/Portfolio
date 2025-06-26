import { useGLTF } from '@react-three/drei'
import React from 'react'

const TechIcon = ({model}) => {
 const scene = useGLTF(model.modelPath)
  return (
    <div></div>
  )
}

export default TechIcon