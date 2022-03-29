import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import Hello from './components/hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'
// import withLoader from './components/withLoader'
import useURLLoader from './hooks/useURLLoader'

interface ImageShowResult {
  message: string
  status: string
}
interface ITheme {
  [key: string]: { color: string; background: string }
}
const themes: ITheme = {
  light: {
    color: '#000',
    background: '#eee',
  },
  dark: {
    color: '#fff',
    background: '#222',
  },
}
export const ThemeContext = React.createContext(themes.light)
// const DogShow: React.FC<{ data: ImageShowResult }> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog Show: {data.status}</h2>
//       <img src={data.message} alt="" />
//     </>
//   )
// }
function App() {
  // const WrapperDogshow = withLoader(
  //   DogShow,
  //   'https://dog.ceo/api/breeds/image/random'
  // )
  const [show, setShow] = useState(true)
  // const positions1 = useMousePosition()
  const [data, loading] = useURLLoader(
    'https://dog.ceo/api/breeds/image/random',
    [show]
  )
  const dogResult = data as ImageShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
          X:{positions1.x},Y:{positions1.y}
        </p> */}
          <p>
            <button
              onClick={() => {
                setShow(!show)
              }}
            >
              删除
            </button>
          </p>
          {show && <MouseTracker />}
          {/* hello world 组件 */}
          {/* <Hello message="hello world2" /> */}
          {/* likeButton组件 */}
          {/* <WrapperDogshow /> */}
          {/* {loading ? (
          <p>狗狗数据读取中</p>
        ) : (
          <img src={dogResult?.message} alt="12" />
        )} */}
          <LikeButton />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
