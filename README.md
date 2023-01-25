# eShop: An eCommerceProject Mock Site
eShop demonstrates numerous frontend and backend skills with the utilization of numerous modern web development technology. This includes React, Next.js, Material UI, Redux, Prisma, PostgreSQL, Axios, JSON Web Token and bcrypt. Some unit tests have been created to test functionality using Jest.

## Account Creation & Sign In

<p align="center">
Client-side and server-side validation for account creation and signing in:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/create-acc-sign-in.gif" width="70%"/>
</p>

#

<p align="center">
Server-side validation for emails already in use:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/email%20in%20use.PNG" width="50%"/>
</p>

#

<p align="center">
When the account is created, the password is hashed before it is stored using bcrypt, while the user id is created utilizing cuid:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/HashedPass.PNG" width="70%"/>
</p>

#

<p align="center">
A JWT token is created for the session:
</p>
  
<p align="center"> 
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/token.PNG" width="30%"/>
</p>

#

<p align="center">
The database stores this session data to verify user session:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/session.PNG" width="60%"/>
</p>

## Products & Dynamic Routing

<p align="center">
Each product has an individual page created through dynamic routing using their ID:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/ProductsImages/URLID.PNG" width="60%"/>
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/ProductsImages/dynamic-product-page.PNG" width="60%"/>
</p>

#

<p align="center">
The pages that show products by category have the typical functionality an eCommerce website may have:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/filter-sort-view.gif" width="60%"/>
</p>

## Adding to Cart, Manipulating the Items & Placing an Order

<p align="center">
The cart page functionality consists of being able to add, subtract and remove items from cart, subtotal & placing an order:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/cart-functionality.gif" width="60%"/>
</p>

#

<p align="center">
Cart items are stored in the browser's local storage for persistence between browser sessions:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/CartImages/LocalStorageCartItems.PNG" width="60%"/>
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/CartImages/LocalStorageCartItems.PNG" width="60%"/>
</p>

## Orders and the Orders Page

<p align="center">
The functionality is minimal; the goal was to manipulate some attribute of the order server-side, in this case, the orderStatus:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/orders-functionality.gif" width="60%"/>
</p>

#
<p align="center">
Orders are stored on two separate tables in the database--the order and its order details:
</p>

<p align="center">
Order Table:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/OrdersImages/OrderModel.PNG" width="60%"/>
</p>

#

<p align="center">
Order Details Table:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/OrdersImages/OrderDetailsModel.PNG" width="60%"/>
</p>
  
## Search Bar

<p align="center">
The search bar utilizes a debouncer to avoid sending numerous calls to the database as the query is typed, as well as a flag to ensure pending calls are cancelled when a new one is queued:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/search-functionality.gif" width="60%"/>
</p>
  
## Responsive Web Design

<p align="center">
Not all elements in this website are responsive yet, but will be soon; because this website is built using Material UI, the layout of the website is mobile-friendly.
</p>

