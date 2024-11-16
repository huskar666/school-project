document.addEventListener('DOMContentLoaded', (event) => {
            const modal1 = document.getElementById('modal1');
            const modal2 = document.getElementById('modal2');
            const openModal1Btn = document.getElementById('openModal1');
            const openModal2Btn = document.getElementById('openModal2');
            const closeModal1Btn = document.getElementById('closeModal1');
            const closeModal2Btn = document.getElementById('closeModal2');
            const formFields = document.querySelectorAll('#modal2 input');

            function openModal(modal) {
                modal.style.display = 'block';
            }

            function closeModal(modal) {
                modal.style.display = 'none';
            }

            openModal1Btn.addEventListener('click', () => {
                openModal(modal1);
            });

            openModal2Btn.addEventListener('click', () => {
                closeModal(modal1);
                openModal(modal2);
            });

            closeModal1Btn.addEventListener('click', () => {
                closeModal(modal1);
            });

            closeModal2Btn.addEventListener('click', () => {
                closeModal(modal2);
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal1) {
                    closeModal(modal1);
                }
                if (event.target === modal2) {
                    closeModal(modal2);
                }
            });

         
            const submitButton = document.getElementById('openModal2');

            submitButton.addEventListener('click', (event) => {
                let isValid = true;

                formFields.forEach(field => {
                    if (field.value.trim() === '') {
                        field.classList.add('error');
                        isValid = false;
                    } else {
                        field.classList.remove('error');
                    }
                });

                if (!isValid) {
                    event.preventDefault();
                }
            });

            formFields.forEach(field => {
                field.addEventListener('input', () => {
                    if (field.value.trim() !== '') {
                        field.classList.remove('error');
                    }
                });
            });
        });
        document.getElementById('burger-menu').addEventListener('click', function () {
            document.getElementById('nav-menu').style.width = '50%';
        });
        
        document.getElementById('close-menu').addEventListener('click', function () {
            document.getElementById('nav-menu').style.width = '0';
        });

let cart = [];


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const productName = card.getAttribute('data-name');
    const productPrice = card.getAttribute('data-price');
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
  });
});

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}


function toggleCart() {
  const cartElement = document.getElementById('cart');
  cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';


  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} грн`;
    cartItems.appendChild(li);
  });
}


function purchase() {
  if (cart.length === 0) {
    alert('Корзина порожня');
  } else {
    alert('Покупка здійснена!');
    cart = [];
    updateCartCount();
    toggleCart();
  }
}


function sortCards() {
  const cardGrid = document.getElementById('cardGrid');
  const sortOption = document.getElementById('sortPrice').value;
  const cards = Array.from(cardGrid.getElementsByClassName('card'));

  cards.sort((a, b) => {
    const priceA = parseInt(a.getAttribute('data-price'));
    const priceB = parseInt(b.getAttribute('data-price'));
    return sortOption === 'lowToHigh' ? priceA - priceB : priceB - priceA;
  });

  cards.forEach(card => cardGrid.appendChild(card));
}


function filterByPrice() {
  const priceRange = document.getElementById('priceRange').value;
  const priceLabel = document.getElementById('priceLabel');
  const cards = document.querySelectorAll('.card');

  priceLabel.textContent = `${priceRange} грн`;

  cards.forEach(card => {
    const cardPrice = parseInt(card.getAttribute('data-price'));
    card.style.display = cardPrice <= priceRange ? 'block' : 'none';
  });
}
function initMap() {
  const mapOptions = {
    center: { lat: 50.4501, lng: 30.5234 }, 
    zoom: 10,
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
$(document).ready(function() {
  $('.opendiv').click(function(){
    $('.block2').toggle();
    setTimeout(function(){
    $('body,html').scrollTop($('.block2').offset().top);
      console.log($('.block2').outerHeight()+$('.block2').offset().top);
    });
  });
});
