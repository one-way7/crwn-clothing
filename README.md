# 👑 CRWN Clothing &nbsp;|&nbsp; E-Commerce React App ⚛
## Overview

A fictional **online clothing store** made with **React** (_see [Live Demo](https://clothingcrwnstore.netlify.app/)_). Features include: user authentication, shopping cart, checkout & data persistence.

## Technologies Used
- React plus Hooks, React Router Dom
- redux: state management
- redux-saga: handling asynchronous events keeping actions pure
- redux-logger: console logging redux data flow
- reselect: reusing redux selectors in a performant way
- redux-persist: storing data in local storage
- Styled Components for CSS-in-JS
- Firebase - User Authentication & Data Storage in Real-time Database (Firestore)

## List of Features

-   Completely custom & responsive design with mobile-first approach
-   Browse shop items by category (with previews of each category)
-   Shop data is loaded from real-time Firestore database
-   Shopping cart - functionalities:
    -   Add item to cart
    -   Increase quantity of existing item in cart
    -   Remove item from cart
-   Checkout - functionalities:
    -   Summary of cart at checkout, including:
        -   calculated sub-total per item
        -   calculated total of all items
    -   Add / remove items at checkout
-   User login & register
-   Data persistence for:
    -   cart items
    -   user session
-   Lazily loaded routes via route-based code