import './App.css'
import { Imageportion } from './components/imagePortion'
import { SubTitle, Titletext, Text } from './components/text'


function App() {
  return (
    <>
      <Titletext props={"React Assigment 02"} />
      <SubTitle props={"Image Gallery"} />
      <div className='Image_area pt-5'>
        <Text content={"Hello I am Mubashir Ahmed Abdullah A FrontEnd Web and Mobile App Developer"} />
        <div className="imageArea flex flex-wrap justify-evenly items-center pt-5">
          <Imageportion />
          <Imageportion />
          <Imageportion />
          <Imageportion />
          <Imageportion />
          <Imageportion />
          <Imageportion />
        </div>
      </div>

    </>
  )
}

export default App
