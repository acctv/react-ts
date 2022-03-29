import React, { useState, useEffect, useRef, useContext } from 'react'
// import useMousePosition from '../hooks/useMousePosition'
import { ThemeContext } from '../App'
//点赞增加按钮/增加开关按钮
const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({ like: 0, on: true })
  // const positions = useMousePosition()
  //useRef
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  // 拿到input节点，进行focus操作
  const domRef = useRef<HTMLInputElement>(null)
  // 引用全局theme
  const theme = useContext(ThemeContext)
  const style = {
    color: theme.color,
    background: theme.background,
  }
  //使用useEffect改变标题
  useEffect(() => {
    console.log('document title effect is running')
    document.title = `点击了${obj.like}`
    // on like 改变都会运行effect
  }, [obj.like])
  // 组件更新发生的操作
  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  function handleAlertClick() {
    setTimeout(() => {
      alert('you click on' + likeRef.current)
    }, 3000)
  }
  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  return (
    <>
      <input type="text" ref={domRef} />
      {/* <h2>
        X:{positions.x},Y:{positions.y}
      </h2> */}
      <button
        style={style}
        onClick={() => {
          setObj({ like: obj.like + 1, on: obj.on })
          likeRef.current++
        }}
      >
        {obj.like}好
      </button>
      <button
        onClick={() => {
          setObj({ like: obj.like, on: !obj.on })
        }}
      >
        {obj.on ? 'ON' : 'OFF'}好
      </button>
      <button onClick={handleAlertClick}>Alert?</button>
    </>
  )
}
export default LikeButton
