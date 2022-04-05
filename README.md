<h1 align="center"><b>Love & Coffee</b></h1>
<div align="center">Love & Coffee is a React E-commerce app for coffee lovers.</div>


---

## **Live App**
To view the website live in action visit\
[Love&Coffee](https://love-coffee.netlify.app/).

https://user-images.githubusercontent.com/47236093/161788878-2b52cf8b-4717-4d1b-bbc5-406cbb4b95f1.mp4



---

## **Functionality** 
* Navbar
  * Navbar has links to navigate to shop, cart, wishlist and login/register.
  * The badges on cart and wishlist update as soon as items get added/removed to/from cart/wishlist.
  * Contact Us and Login/Register are still WIP with regards to the pending Auth lecture.
* Landing Page
  * Featured categories -> On clicking on any of them, you'll be taken to the Product Listing Page with only that category filtered.
  * CTA Banner -> A CTA banner with a tagline and clicking on the Shop Now button will take you to the Product Listing Page with all products.
* Shop
  * Displays all/filtered/sorted products.
  * Filters -> Range Slider for price, Show Out of Stock Products, Filter by category, Rating and Sort by Price. Click on the clear button to clear all filters
* Product Card
  * Displays Product information with CTA
  * On clicking Add to Cart, item is added to cart and button is changed to Go to cart.
  * On clicking add to wishlist, item is added to wishlist and button is changed to Go to wishlist.
  * If item already in cart/wishlist or both, button is also changed.
* Cart
  * Display Items in cart and total checkout value
  * If no item in cart, all cart totals are zero
  * If item is added, item is shown with options to increase or decrease quantity and/or to remove the item or to move it to wishlist.
  * Cart totals and total cart items are also dynamically updated.
* Wishlist
  * Items added to wishlist show here
  * CTA button to move item to cart.
  * Items already in cart will have move to cart CTA disabled
  * Items out of stock will be displayed out of stock and will have move to cart disabled.
* Responsiveness
  * All pages except the Login/Register Page are made responsive to mobile screens. (Width<480px)
  * Navbar is also made responsive on mobile screens with a hamburger/close icon to toggle the full navbar.

---

## **Backend** 
Backend for this app is a NodeJS express backend serving APIs and is deployed on Heroku.
The backend API is accessed through a proxy mentioned in package.json.
As of now the backend is serving API calls to get AllProductList and is also serving product images to make the frontend lighter and faster.
* Github Repo : [Server](https://github.com/dhruvin25799/server_lovecoffee)
* Live API : [ProductsAPI](https://server-lovecoffee.herokuapp.com/products)

---

## **How to run this app**
To run this app locally on your machine, clone the repo to your local machine.\
In the project directory, you can run\
`npm start`\
This will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
Make sure you have access to internet to make use of the API call inside the App.
TO also run the API locally, update proxy in package.json with you local API address.
Also checkout the docs for [Server](https://github.com/dhruvin25799/server_lovecoffee) for more info on how to deploy API locally.
