







// You have been assigned to the creation of a Smartphone Shop Website. 
// The homepage you're about to write is just a showcase of the products of the shop with some extra information.
//  No shopping cart / checkout features are required.

// Complete exercises from 1 to 6 with just plain HTML.

// EX1.: Add an h1 tag with the name of your shop

// EX2.: Add a TABLE with the top 5 products of your shop

// EX3.: Insert for each product an image, a title, a description and a price

// EX4.: Add links to existing Amazon products for each item in the table

// EX5.: Add a footer with the address and the name of your shop

// EX6.: Add a message board where the user can type a message in it (no real posting/saving features required!)

//----------------------------------------------------------------------------------------------------------------------

// EXTRA (use JavaScript code here)

// EX7.: Write a function to change the h1 text

let h1 = document.querySelector('header h1')
    const changeH1Text = () =>  h1.innerHTML = "THE BIG READ"
    changeH1Text()
  

// EX8.: Write a function to change the page background color
let body = document.body;
const changeBodyColor = () =>  body.style.backgroundColor = "tomato "
   changeBodyColor()


// EX9.: Write a function to change the footer address with a fake one

let address = document.querySelector('#address');
    const changeAddress = () =>  address.innerHTML = " 56 New Road HULL HU47 6XR"
    changeAddress()



// EX10.: Write a function to add a CSS class to every Amazon link

let links = document.querySelector('a');
    const addClass = () =>  links.classList.add("buy")
    addClass()


// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
    
let img = document.querySelector('img');
        const toggleClass = () =>  img.classList.toggle("hide")
        toggleClass()

// EX12: Write a function to color the price of each product in a different one every time it's invoked

