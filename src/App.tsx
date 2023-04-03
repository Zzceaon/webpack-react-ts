import React, { useState, lazy, Suspense } from 'react'
// import '@/app.css'
import '@/app.less'
// import Class from './components/Class'
// import smallImg from '@/assets/imgs/left100kb.jpg'
// import bigImg from '@/assets/imgs/right100kb.jpg'
// import { Demo1, Demo2 } from '@/components'

// const LazyDemo = lazy(() => import('@/components/LazyDemo'))
const PreloadDemo = lazy(() => import(
  // webpackChunkName: "PreloadDemo"
  // webpackPreload: true
  '@/components/PreloadDemo'
))
const PreFetchDemo = lazy(() => import(
  // webpackChunkName: "PreFetchDemo"
  // webpackPrefetch: true
  '@/components/PreFetchDemo'
))

function App() {
  // const [count, setCount] = useState('')
  const [show, setShow] = useState(false)
  // const onChange = (e: any) => {
  //   setCount(e.target.value)
  // }
  const onClick = () => {
    import('./app.css')
    setShow(true)
  }

  return (
    <>
      {/* <h2>webpack-react-ts</h2> */}
      {/* <Class /> */}
      {/* <img src={smallImg} alt="小于100kb的图片" />
      <img src={bigImg} alt="大于100kb的图片" /> */}
      {/* <div className="smallImg"></div>
      <div className="bigImg"></div> */}
      {/* <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" /> */}
      {/* <Demo1 /> */}
      <h2 onClick={onClick}>Show</h2>
      {/* {
        show && <Suspense fallback={null}><LazyDemo /></Suspense>
      } */}
      {
        show && (
          <>
            <Suspense fallback={null}><PreloadDemo /></Suspense>
            <Suspense fallback={null}><PreFetchDemo /></Suspense>
          </>
        )
      }
    </>
  )
}

export default App