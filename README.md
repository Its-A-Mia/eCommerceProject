# eShop: An eCommerce Project Mock Site
eShop demonstrates numerous frontend and backend skills with the utilization of numerous modern web development technology. This includes React, Next.js, Material UI, Redux, Prisma, PostgreSQL, Axios, JSON Web Token and bcrypt. Some unit tests have been created to test functionality using Jest.

## Fully-Validated Account Creation & Data Manipulation

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
A JWT token is created and stored in the user's cookies for the session:
</p>
  
<p align="center"> 
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/token.PNG" width="30%"/>
</p>

#

<p align="center">
The database stores this session data to verify user session for backend calls to sensitive data:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/session.PNG" width="60%"/>
</p>

#

<p align="center">
Profile information can be updated and utilizes similar validation as account creation. There's also a password check to change sensitive data:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/profile-functionality.gif" width="70%"/>
</p>

## Real Products with Dynamic Routing

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

## Fully Functional Cart

<p align="center">
The cart page functionality consists of being able to add, subtract and remove items from cart, subtotal & placing an order. Middleware handles page requests and ensures pages that require session authentication redirect the user to the auth page if no token is found in cookies:
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

## Full-Stack Orders & Data Manipulation

<p align="center">
The functionality is minimal; the goal was to store data that has complex referencing in the database, then call and display the information client-side, and, finally, manipulate some attribute of the order server-side, in this case, the orderStatus:
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
  
## Site-wide Search Functionality

<p align="center">
The search bar utilizes a debouncer to avoid sending numerous calls to the database as the query is typed, as well as a flag to ensure pending calls are cancelled when a new one is queued:
</p>

<p align="center">
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/search-functionality.gif" width="60%"/>
</p>
  
## Truly Responsive Web Design

<p align="center">
Not all elements in this website are responsive yet, but will be soon; because this website is built using Material UI, the layout of the website is mobile-friendly.
</p>

