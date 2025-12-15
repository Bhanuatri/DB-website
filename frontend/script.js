function login() {
  fetch("http://localhost:5001/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => {
    if(res.ok) window.location.href="products.html";
    else alert("Invalid Login");
  });
}

function loadProducts() {
  fetch("http://localhost:5002/products")
    .then(res => res.json())
    .then(data => {
      let ul = document.getElementById("products");
      data.forEach(p => {
        ul.innerHTML += `<li>${p.name} - ₹${p.price}</li>`;
      });
    });
}

function pay() {
  fetch("http://localhost:5003/pay", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      product:"Laptop",
      amount:50000
    })
  })
  .then(()=>alert("Payment Successful"));
}
