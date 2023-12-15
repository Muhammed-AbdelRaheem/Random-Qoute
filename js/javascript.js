var quotes=[
    {qoute:"Be yourself; everyone else is already taken",
    name:"Oscar Wilde"
    },
    {qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name:"Albert Einstein"
    },
    {qoute:"A room without books is like a body without a soul.",
    name:"Marcus Tullius Cicero"
    },
    {qoute:"You only live once, but if you do it right, once is enough.",
    name:"Mae West"
    },
    {qoute:" the change that you wish to see in the world.",
    name:"Mahatma Gandhi"
    }
]


// var used =[]

// var blackbox = document.getElementById("quote").innerHTML

function newqoute(){

    var randomQ =Math.trunc(Math.random()*quotes.length);


// if(used.length ==quotes.length){
//  used=[]
// }


document.getElementById("quote").innerHTML=`    <p id="quote">${quotes[randomQ].qoute}</p> `;
document.getElementById("name").innerHTML=`     <p id="name">${quotes[randomQ].name}</p> `;
// used.push(randomQ);
console.log(quotes[randomQ]);

// console.log(used[randomQ]);

}


