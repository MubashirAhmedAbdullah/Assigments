import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const imagesArray = [
    {
      name: "Mango",
      imageLink: "https://images.unsplash.com/photo-1685429631345-3de21cc2eb65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hbmdvfGVufDB8fDB8fHww",
      key: 1
    },
    {
      name: "Banana",
      imageLink: "https://plus.unsplash.com/premium_photo-1675731118330-08c71253af17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fHww",
      key: 2
    },
    {
      name: "Graps",
      imageLink: "https://images.unsplash.com/photo-1604425009198-26ab86fc4f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcHN8ZW58MHx8MHx8fDA%3D",
      key: 3
    },
    {
      name: "Peach",
      imageLink: "https://plus.unsplash.com/premium_photo-1693329950334-c384f033dbfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
      key: 4
    },
    {
      name: "Apple",
      imageLink: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
      key: 5
    },
    {
      name: "Orange",
      imageLink: "https://plus.unsplash.com/premium_photo-1675667408018-3b64dbc55db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlfGVufDB8fDB8fHww",
      key: 6
    },
    {
      name: "Pineapple",
      imageLink: "https://images.unsplash.com/photo-1450098722705-562182a09e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlfGVufDB8fDB8fHww",
      key: 7
    },
  ]

  return (
    <>
      <div className="container">
        <div className="title text-center text-5xl font-bold underline mt-8 italic">React First Assigment</div>
        <div className="creater text-center text-2xl pt-3 underline italic font-bold">Created By Mubashir Ahmed</div>

        <div className="imagesRenderingContainer p-10">
          {imagesArray.map((data, index) => {
            return (
              <div className="imagesDataCards mt-5">
                <div className="itemImage h-40">
                  <img className='itemIMG h-full w-full' src={data.imageLink} />

                  <div className="imageTitle">
                    <h1 className="text-3xl font-bold p-5 text-center">{data.name}</h1>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App



