var list = document.getElementById('Fruit_list');
var fruits = [
    {
      name: "Apple",
      Title: "Malus domestica",
      Types: ["Red Delicious", "Granny Smith", "Fuji", "Gala"],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFwcGxlfGVufDB8fDB8fHww"
    },
    {
      name: "Banana",
      Title: "Musa",
      Types: ["Cavendish", "Lady Finger", "Red Banana",],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww"
    },
    {
      name: "Orange",
      Title: "Citrus sinensis",
      Types: ["Navel", "Valencia", "Blood Orange", "Cara Cara"],
      desc: "Add your discription on click on update",
      image: "https://plus.unsplash.com/premium_photo-1675667381451-be2fc08a122e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Strawberry",
      Title: "Fragaria × ananassa",
      Types: ["June-Bearing", "Ever-Bearing", "Day-Neutral",],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rhd2JlcnJ5fGVufDB8fDB8fHww"
    },
    {
      name: "Grapes",
      Title: "Vitis vinifera",
      Types: ["Concord", "Thompson Seedless", "Red Globe",],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Mango",
      Title: "Mangifera indica",
      Types: ["Alphonso", "Kent", "Tommy Atkins", "Haden"],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbmdvfGVufDB8fDB8fHww"
    },
    {
      name: "Watermelon",
      Title: "Citrullus lanatus",
      Types: ["Seedless", "Picnic", "Icebox", "Yellow Flesh"],
      desc: "Add your discription on click on update",
      image: "https://media.istockphoto.com/id/1393880869/photo/sliced-watermelon-decorated-with-mint-leaves-on-brown-wooden-background-close-up-selective.webp?b=1&s=170667a&w=0&k=20&c=N-1ey_7uysxAEE8awo3-7rCO9rLuwoj6u6bMakZvdeE="
    },
    {
      name: "Pineapple",
      Title: "Ananas comosus",
      Types: ["Queen", "Red Spanish", "Smooth Cayenne",],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1587883012610-e3df17d41270?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGluZWFwcGxlfGVufDB8fDB8fHww"
    },
    {
      name: "Cherry",
      Title: "Prunus avium",
      Types: ["Bing", "Rainier", "Sweetheart", "Tulare"],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1439127989242-c3749a012eac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlcnJ5fGVufDB8fDB8fHww"
    },
    {
      name: "Peach",
      Title: "Prunus persica",
      Types: ["Clingstone", "Freestone", "White Peach",],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1532704868953-d85f24176d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlYWNofGVufDB8fDB8fHww"
    },
    {
      name: "Blueberry",
      Title: "Vaccinium corymbosum",
      Types: ["Highbush", "Lowbush", "Rabbiteye", "Half-High"],
      desc: "Add your discription on click on update",
      image: "https://plus.unsplash.com/premium_photo-1681826706710-a87845edcd5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmx1ZWJlcnJ5fGVufDB8fDB8fHww"
    },
    {
      name: "Kiwi",
      Title: "Actinidia deliciosa",
      Types: ["Hayward", "Hardy", "Arctic", "Golden"],
      desc: "Add your discription on click on update",
      image: "https://plus.unsplash.com/premium_photo-1674382739482-5d36b98d653a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtpd2l8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Papaya",
      Title: "Carica papaya",
      Types: ["Maradol", "Hawaiian", "Solo", "Sunrise"],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1570044803045-d790fc159af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcGF5YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Pomegranate",
      Title: "Punica granatum",
      Types: ["Wonderful", "Angel Red", "Parfianka", "Sweet"],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1601767770428-265b2c67780c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBvbWVncmFuYXRlfGVufDB8fDB8fHww"
    },
    {
      name: "Pear",
      Title: "Pyrus",
      Types: ["Bartlett", "Bosc", "Anjou", "Asian"],
      desc: "Add your discription on click on update",
      image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhcnxlbnwwfHwwfHx8MA%3D%3D"
    }
    
  ]





  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
    <div class="flex relative h-[250px]">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.Title
        }</h1>
        <p class="leading-relaxed">${data.Types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button onclick="updateDesc(this)">Update</button>
        <button class = "btn" onclick="deletearry(this)">Delete</button>        
      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
  });
  
  function updateDesc(ele) {
    console.log("ele=>", ele.previousElementSibling);
    console.log("ele parentr=>", ele.parentElement);
  
    var index = ele.parentElement.id;
    fruits[index].desc = prompt("Desc");
    console.log("fruits-->", fruits);
    list.innerHTML = "";
    fruits.forEach(function (data, ind) {
      var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
      <div class="flex relative h-[250px]">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
          data.image
        }">
        <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
          }</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.Title
          }</h1>
          <p class="leading-relaxed">${data.Types.join(" , ")}</p>
          <p class="leading-relaxed">${data.desc} </p>
          <button onclick="updateDesc(this)">Update</button>
          <button class = "btn" onclick="deletearry(this)">Delete</button>        

        </div>
      </div>
    </div>`;
      list.innerHTML += ele;
    });
    //   var desc = prompt("Desc");
    //   ele.previousElementSibling.innerText = desc;
  }



  function deletearry(ele){
    var index = ele.parentElement.id;
    console.log(index);
    fruits.splice(index, 1);

    list.innerHTML = "";
    fruits.forEach(function (data, ind) {
      var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
      <div class="flex relative h-[250px]">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
          data.image
        }">
        <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
          }</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.Title
          }</h1>
          <p class="leading-relaxed">${data.Types.join(" , ")}</p>
          <p class="leading-relaxed">${data.desc} </p>
          <button onclick="updateDesc(this)">Update</button>
          <button class = "btn" onclick="deletearry(this)">Delete</button>        

        </div>
      </div>
    </div>`;
      list.innerHTML += ele;
    });
    //   var desc = prompt("Desc");
    //   ele.previousElementSibling.innerText = desc;


    
  }