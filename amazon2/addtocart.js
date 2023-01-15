const product = [
    {
        id: 0,
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
        `<div class='main'>
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
document.getElementById('root1').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root2').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root3').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root4').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root5').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root6').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root7').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root8').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root9').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root10').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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
document.getElementById('root11').innerHTML = categories.map((item)=>
{
    var {image, title, price, href} = item;
    
    return(
        `<div class='main'>
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