let cart = [];
let stock = {1:10, 2:5};
let discount = 0;

function add(name, price, id){
  if(stock[id] <= 0){
    alert("Stok yok!");
    return;
  }

  cart.push({name, price, id});
  stock[id]--;

  document.getElementById("s"+id).innerText = stock[id];
  render();
}

function render(){
  let list = document.getElementById("cart");
  list.innerHTML = "";
  cart.forEach(i=>{
    let li = document.createElement("li");
    li.innerText = i.name + " - " + i.price + "₺";
    list.appendChild(li);
  });
}

function applyCode(){
  let val = document.getElementById("code").value;
  if(val === "FOLDIX5"){
    discount = 0.05;
    alert("%5 indirim aktif!");
  } else {
    alert("Geçersiz kod");
  }
}

function order(){
  if(cart.length === 0){
    alert("Sepet boş!");
    return;
  }

  let total = cart.reduce((a,b)=>a+b.price,0);
  total = total - (total * discount);

  let orderID = "FLX-" + Math.floor(Math.random()*99999);
  let points = Math.floor(total);

  document.getElementById("out").innerHTML =
    `✅ Sipariş: ${orderID}<br>
     💰 Toplam: ${total}₺<br>
     ⭐ Puan: +${points}`;

  cart = [];
  render();
}
