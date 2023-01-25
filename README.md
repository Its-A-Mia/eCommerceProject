# eShop: An eCommerceProject Mock Site
eShop demonstrates numerous frontend and backend skills with the utilization of numerous modern web development technology. This includes React, Next.js, Material UI, Redux, Prisma, PostgreSQL, Axios, JSON Web Token and bcrypt. Some unit tests have been created to test functionality using Jest.

# Account Creation & Sign In
Client-side and server-side validation for account creation and signing in.:
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/create-acc-sign-in.gif" width="70%"/>

Server-side validation for emails already in use:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/email%20in%20use.PNG" width="50%"/>

When the account is created, the password is hashed before it is stored using bcrypt, while the user id is created utilizing cuid:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/HashedPass.PNG" width="70%"/>

A JWT token is created for the session:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/token.PNG" width="30%"/>

The database stores this session data to verify user session:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/AuthImages/session.PNG" width="60%"/>

# Products & Dynamic Routing
Each product has an individual page created through dynamic routing using their ID:
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/ProductsImages/URLID.PNG" width="60%"/>
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/ProductsImages/dynamic-product-page.PNG" width="60%"/>

The pages that show products by category have the typical functionality an eCommerce website may have:
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/filter-sort-view.gif" width="60%"/>

# Adding to Cart, Manipulating the Items & Placing an Order
The cart page functionality consists of being able to add, subtract and remove items from cart, subtotal & placing an order:
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/cart-functionality.gif" width="60%"/>

Cart items are stored in the browser's local storage for persistence between browser sessions:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/CartImages/LocalStorageCartItems.PNG" width="60%"/>

# Orders and the Orders Page
The functionality is minimal; the goal was to manipulate some attribute of the order server-side, in this case, the orderStatus:
<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/orders-functionality.gif" width="60%"/>

Orders are stored on two separate tables in the database--the order and its order details:

Order Table:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/OrdersImages/OrderModel.PNG" width="60%"/>

Order Details Table:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/OrdersImages/OrderDetailsModel.PNG" width="60%"/>

# Search Bar
The search bar utilizes a debouncer to avoid sending numerous calls to the database as the query is typed, as well as a flag to ensure pending calls are cancelled when a new one is queued:

<img src="https://github.com/Its-A-Mia/eCommerceExternalData/blob/main/eShopGifs/search-functionality.gif" width="60%"/>

# Responsive Web Design

Not all elements in this website are responsive yet, but will be soon; because this website is built using Material UI, the layout of the website is mobile-friendly.
