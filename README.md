#  Book Store API
This **Book Store API** is developed using **Express.js**, and **TypeScript**, with **MongoDB** , and **Mongoose** for database management. It offers comprehensive functionalities for managing books and processing orders, featuring inventory control, order tracking, and revenue calculations.

##  Features

### **Books Management**
- **Create Books**:  Add a new book with details like title, author, price, category, description, and stock information.
- **Get Books**: Getting all books or search for books by title, author, or category.
- **Update Books**: Modify existing book details by id; like update the price, quantity, etc.
- **Delete Books**: Remove books from the database.

###  **Order Management**
- **Place Orders**: Create new orders while checking inventory for stock.
- **Revenue Calculation**: Get the total revenue generated from all orders using MongoDB aggregation.
- **Error Handling**: Provide clear message when stock is insufficient or invalid inputs, missing resources, or internal errors.

## **Testing

- Use tool ApiDog to test the API endpoints.
- **Access API** The API is available at: http://localhost:5000
---

##ApiDog Endpoints
**Product**
- POST /api/products - Add a book
- GET /api/products - List books or filter
- GET /api/products/:id - View a book
- PUT /api/products/:id - Update a book
- DELETE /api/products/:id - Delete a book
**Orders**
- POST /api/orders - Place an order
- GET /api/orders/revenue - Get total revenue


