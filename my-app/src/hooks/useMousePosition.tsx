import React, { useState, useEffect } from 'react'

// 1.自定义hook必须以use开头(约定，否则无法判断函数对其内部hook的调用)
// 2.组件中使用相同的hook会共享state么，不会，每个使用其中state都是隔离的
const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return positions
}
export default useMousePosition
