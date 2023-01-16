const product = [
    {
        id: 0,
        image: 'img/h2.jpg',
        title: 'wireless Headphone',
        price: 120,
        href: 'page2.html',
    },
    {
        id: 1,
        image: 'img/watch.jpg',
        title: 'Smart Watch',
        price: 10,
        href: 'page3.html',
    },
    {
        id: 2,
        image: 'img/shoe_1.jpg',
        title: 'Nike Shoes',
        price: 7,
        href: 'page4.html',
    },
    {
        id: 3,
        image: 'img/s1.jpg',
        title: 'Winter Wearing Kit',
        price: 4,
        href: 'page1.html',
    },
    {
        id: 4,
        image: 'img/h2.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        href: 'page1.html',
    },
    {
        id: 5,
        image: 'img/h2.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        href: 'page1.html',
    },
    {
        id: 6,
        image: 'img/h2.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        href: 'page1.html',
    },
    {
        id: 7,
        image: 'img/h2.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        href: 'page1.html',
    },
    
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main1'>
                <div class='box'>
                <a href='${href}'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>
                </a>
                <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button>Buy</button><button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
                </div>
        </div>`
    )
})

.join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price,} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                  <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px; width: auto; background-color:rgb(73, 69, 69);'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i><</div>"
            );
        }).join('');
    }

    
}