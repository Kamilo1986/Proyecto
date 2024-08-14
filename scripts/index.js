const CardsData = [
  {
    _id: "639c723b992482e5f2834be9",
    name: "Collectivities Party",
    image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
    date: "2022-12-12",
    description:
      "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
    category: "Food Fair",
    place: "Room A",
    capacity: 45000,
    assistance: 42756,
    price: 5,
    __v: 0,
  },
  {
    _id:"639c723b992482e5f2834beb",
    name: "Korean style",
    image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
    date: "2023-08-12",
    description:
      "Enjoy the best Korean dishes, with international chefs and awesome events.",
    category: "Food Fair",
    place: "Room A",
    capacity: 45000,
    price: 10,
    __v: 0,
    estimate: 42756,
  },
  {
    _id: "639c723c992482e5f2834bed",
    name: "Jurassic Park",
    image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
    date: "2022-11-02",
    description:
      "Let's go meet the biggest dinosaurs in the paleontology museum.",
    category: "Museum",
    place: "Field",
    capacity: 82000,
    price: 15,
    __v: 0,
    assistance: 65892,
  },
  {
    _id: "639c723c992482e5f2834bef",
    name: "Parisian Museum",
    image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
    date: "2023-11-02",
    description:
      "A unique tour in the city of lights, get to know one of the most iconic places.",
    category: "Museum",
    place: "Paris",
    capacity: 8200,
    estimate: 8200,
    price: 3500,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf1",
    name: "Comicon",
    image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
    date: "2022-02-12",
    description:
      "For comic lovers, all your favourite characters gathered in one place.",
    category: "Costume Party",
    place: "Room C",
    capacity: 120000,
    assistance: 110000,
    price: 54,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf3",
    name: "Halloween Night",
    image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
    date: "2023-02-12",
    description: "Come with your scariest costume and win incredible prizes.",
    category: "Costume Party",
    place: "Room C",
    capacity: 12000,
    estimate: 9000,
    price: 12,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf5",
    name: "Metallica in concert",
    image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
    date: "2023-01-22",
    description: "The only concert of the most emblematic band in the world.",
    category: "Music Concert",
    place: "Room A",
    capacity: 138000,
    estimate: 138000,
    price: 150,
    __v: 0,
  },
  {
    _id: "639c723c992482e5f2834bf7",
    name: "Electronic Fest",
    image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
    date: "2022-01-22",
    description:
      "The best national and international DJs gathered in one place.",
    category: "Music Concert",
    place: "Room A",
    capacity: 138000,
    assistance: 110300,
    price: 250,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834bf9",
    name: "10K for life",
    image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
    date: "2022-03-01",
    description: "Come and exercise, improve your health and lifestyle.",
    category: "Race",
    place: "Soccer field",
    capacity: 30000,
    assistance: 25698,
    price: 3,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834bfb",
    name: "15K NY",
    image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
    date: "2023-03-01",
    description:
      "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
    category: "Race",
    place: "New York",
    capacity: 3000000,
    price: 3,
    __v: 0,
    estimate: 2569800,
  },
  {
    _id: "639c723d992482e5f2834bfd",
    name: "School's book fair",
    image: "https://i.postimg.cc/Sst763n6/book1.jpg",
    date: "2023-10-15",
    description: "Bring your unused school book and take the one you need.",
    category: "Book Exchange",
    place: "Room D1",
    capacity: 150000,
    estimate: 123286,
    price: 1,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834bff",
    name: "Just for your kitchen",
    image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
    date: "2022-11-09",
    description:
      "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
    category: "Book Exchange",
    place: "Room D6",
    capacity: 130000,
    assistance: 90000,
    price: 100,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834c01",
    name: "Batman",
    image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
    date: "2022-3-11",
    description: "Come see Batman fight crime in Gotham City.",
    category: "Cinema",
    place: "Room D1",
    capacity: 11000,
    assistance: 9300,
    price: 225,
    __v: 0,
  },
  {
    _id: "639c723d992482e5f2834c03",
    name: "Avengers",
    image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
    date: "2023-10-15",
    description:
      "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
    category: "Cinema",
    place: "Room D1",
    capacity: 9000,
    estimate: 9000,
    price: 250,
    __v: 0,
  }
];

const opciones = ['Food Fair', 'Museum', 'Costume Party', 'Music Concert', 'Category', 'Race', 'Cinema', 'Book Exchange'];


const checkboxContainer = document.getElementById('checkbox-container');
opciones.forEach((opcion, index) => {
    checkboxContainer.innerHTML += `
        <label class="form-check form-check-inline  ">
            <input type="checkbox" class="form-check-input" id="flexCheckChecked${index + 1}" value="${opcion}">
            <span class="form-check-label ">${opcion}</span>
        </label>
    `;
});

const FormDeBusqueda = `
    <form id="search-form" class="search-form">
        <div class="d-flex justify-content-end" id="search-container">
            <input type="text" name="search" id="search-input" placeholder="Buscar" class="form-control">
            <button type="submit">
                <img src="../imagenes/search.svg" alt="Lupa">
            </button>
            <button type="button" id="clear-button">Limpiar</button>
        </div>
    </form>
`;
checkboxContainer.insertAdjacentHTML('afterend', FormDeBusqueda);

document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    pintarTodasLasTarjetas(CardsData);
});


function filtrarPorNombreYDescripcion(searchTerm) {
  searchTerm = searchTerm.toLowerCase().trim();
  return CardsData.filter(evento => 
      evento.name.toLowerCase().includes(searchTerm) ||
      evento.description.toLowerCase().includes(searchTerm)
  );
}


function pintarTodasLasTarjetas(data) {
  const contenedor2 = document.getElementById('contenedor2');
  contenedor2.innerHTML = ''; 

  data.forEach(evento => {
      const divTarjeta = document.createElement('div');
      divTarjeta.classList.add('card');
      divTarjeta.innerHTML = `
          <div class="card-header">
              
              <img class="card-img-top" src="${evento.image}" alt="${evento.name}">
          </div>
          <div class="card-body">
              <h2 class="card-title badge text-bg-primary text-wrap d-flex justify-content-center align-items-center">${evento.name}</h2>
              <p class="card-text"><span>Date:</span> ${evento.date}</p>
              <p class="card-text"><span>Description:</span> ${evento.description}</p>
              <p class="card-text"><span>Category:</span> ${evento.category}</p>
              <p class="card-text"><span>Place:</span> ${evento.place}</p>
              <p class="card-text"><span>Capacity:</span> ${evento.capacity}</p>
              <p class="card-text"><span>Estimate:</span> ${evento.estimate || 'undefined'}</p>
              <p class="card-text"><span>Assistance:</span> ${evento.assistance || 'undefined'}</p>
          </div>
          <div class="detailsprice d-flex flex-row-reverse justify-content-around align-items-end">
              <a href="Details.html?id=${evento._id}" class="btn btn-primary">Details</a>
              <h6 class="h6 d-flex align-items-center">$ ${evento.price}</h6>
          </div>
      `;
      contenedor2.appendChild(divTarjeta);

      
      const detailsButton = divTarjeta.querySelector('.btn.btn-primary');
      detailsButton.addEventListener('click', () => {
          
          window.location.href = `Details.html?id=${evento._id}`;
      });
  });

  
  if (data.length === 0) {
      contenedor2.innerHTML = '<p>No se encontraron eventos que coincidan con los criterios de búsqueda.</p>';
  }
}


function manejarBusquedaEnTiempoReal() {
    const searchTerm = document.getElementById('search-input').value;
    const eventosFiltrados = filtrarPorNombreYDescripcion(searchTerm);
    pintarTodasLasTarjetas(eventosFiltrados);
}


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', manejarBusquedaEnTiempoReal);

    
    pintarTodasLasTarjetas(CardsData);
});


 function filtrarPorCategoria() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  const categoriasSeleccionadas = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  if (categoriasSeleccionadas.length === 0) {
   
    pintarTodasLasTarjetas(CardsData);
  } else {
   
    const tarjetasFiltradas = CardsData.filter(evento =>
      categoriasSeleccionadas.includes(evento.category)
    );
    pintarTodasLasTarjetas(tarjetasFiltradas);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filtrarPorCategoria);
  });
  
  
  pintarTodasLasTarjetas(CardsData);
});




