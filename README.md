# Book Hub Backend

## 📌 Overview
The **Book Hub Backend** is a RESTful API that powers the Book Hub web application. It allows users to manage books, including adding, editing, deleting, and retrieving book data. The API is built using **Node.js, Express.js, and MongoDB**.

## 🚀 Features
- 📚 **CRUD Operations**: Create, Read, Update, and Delete books
- 🔍 **Search & Filtering**: Search books by title and filter by genre
- 📏 **Sorting**: Sort books by title, author, publication date, and rating
- 📖 **Pagination**: Display large book datasets efficiently
- 📜 **Swagger API Documentation**

## 🛠️ Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for handling routes and requests
- **MongoDB & Mongoose** - Database and ODM
- **Cors** - Enables cross-origin requests
- **Dotenv** - Manages environment variables
- **Swagger** - API documentation

## 📥 Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **MongoDB** installed on your system.

### Clone the Repository
```sh
git clone https://github.com/innocentmanzi/bookhub-backend.git
cd book-hub
```

### Install Dependencies
```sh
npm install
```

### Configure Environment Variables
Create a `.env` file in the backend root folder and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Start the Server
```sh
npm start
```
The server will run at: `http://localhost:5000`

## 📌 API Endpoints

### 📖 Books API
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/books`      | Get all books |
| GET    | `/api/books/:id`  | Get a book by ID |
| POST   | `/api/books`      | Add a new book |
| PUT    | `/api/books/:id`  | Update a book |
| DELETE | `/api/books/:id`  | Delete a book |

### 📜 API Documentation
Swagger API docs are available at:
```sh
http://localhost:5000/api-docs
```

## 🤝 Contribution Guidelines
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📞 Contact
For questions or support, reach out:
- GitHub: [Innocent Manzi](https://github.com/innocentmanzi)
- Email: i.manzi@alustudent.com

---
✨ Happy Coding! 🚀
