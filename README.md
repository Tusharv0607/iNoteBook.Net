# iNoteBook
iNoteBook is a simple web-based note-taking application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to create, edit, delete, and view their notes securely.

### Features
1. User authentication and authorization using JSON Web Tokens (JWT).
2. Create, Edit, Delete and View notes.
3. Search functionality to search for notes based on title and content.
4. Responsive design that works on mobile and desktop.

### Technologies Used
* MongoDB
* Express.js
* React.js
* Node.js
* Bootstrap 4.0
* JSON Web Tokens (JWT)

### Getting Started
To get started, clone the repository to your local machine and install the necessary dependencies using npm.

```
git clone https://github.com/Tusharv0607/iNoteBook.git
cd iNoteBook
npm install
```
Create a .env file in the root directory of the project and add the following environment variables:

```
PORT=3000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```

### Start the development server:

```
npm start
```

You should now be able to access the application at http://localhost:3000/.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
