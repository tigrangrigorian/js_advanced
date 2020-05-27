let fruits = [
  {
    id: 1,
    title: 'Apple',
    price: 10,
    img: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png'
  },
  {
    id: 2,
    title: 'Banana',
    price: 20,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX425_.jpg'
  },
  {
    id: 3,
    title: 'Mango',
    price: 30,
    img: 'https://marymakesdinner.typepad.com/.a/6a00d8342114db53ef0133ed84d7db970b-500wi'
  },
]

const toHTML = fruit => `
  <div class="col-sm">
      <div class="card">
        <img
          src="${fruit.img}"
          class="card-img-top"
          alt="${fruit.title}"
          style="height: 230px"
        >
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a 
          href="#"
          class="btn btn-primary mr-1 mb-1" 
          data-btn="price"
          data-id="${fruit.id}"
          >Show the price</a>
          <a 
          href="#"
          class="btn btn-danger"
          data-btn="remove"
          data-id="${fruit.id}"
          >Delete</a>
        </div>
      </div>
    </div>
`;

function render() {
  document.querySelector('#fruits').innerHTML = fruits.map(toHTML).join('');
}
render()

const priceModal = $.modal({
  title: 'Fruit info',
  closeable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Close',
      type: 'primary',
      handler() {
        priceModal.close();
      }
    }
  ]
})

document.addEventListener('click', event => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const fruit = fruits.find(f => f.id === id)

  if (btnType === 'price') {
    priceModal.setContent(`
      <p>The price of the 
        <strong>
          ${fruit.title}
        </strong> 
        is 
        <strong>
          ${fruit.price}$
        </strong>
      </p>
    `);
    priceModal.open();
  } else if (btnType === 'remove') {
    $.confirm({
      title: `Delete the ${fruit.title}`,
      content: `
        <p>Do you wont to delete
          <strong> ${fruit.title} </strong>? 
        </p>`,
    }).then(() => {
      fruits = fruits.filter(f => f.id !== id);
      render()
    }).catch(() => {
      console.log('catch');
    })
  }
})
