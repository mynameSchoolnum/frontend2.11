// const express = require('express');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('../routes/index');
// const contactRouter = require('../routes/contactRoutes');
// const userRouter = require('../routes/userRoutes');

// const app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Define routes
// app.use('/', indexRouter);
// app.use('/api/contacts', contactRouter);
// app.use('/api/users', userRouter);

// // Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   res.status(404).json({ success: false, message: 'Not Found' });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({ success: false, message: err.message });
// });

// module.exports = app;

// const express = require('express');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');

// // Import routers
// const indexRouter = require('../routes/index'); // Root route
// const contactRouter = require('../routes/contactRouters'); // Contacts API routes
// const userRouter = require('../routes/userRouters'); // Users API routes

// const app = express();

// // Middleware setup
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Define routes
// app.use('/', indexRouter); // Root route
// app.use('/contacts', contactRouter); // Contacts API
// app.use('/users', userRouter); // Users API

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
  
//   // error handler
//   app.use(function(err, req, res, next) {
  
//     // Send the error message
//     res.status(err.status || 500);
//     res.json({ 
//       success: false,
//       message: err.message
//      });
//   });

// module.exports = app;

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors'); // Import createError for handling 404 errors

// Import routers
const indexRouter = require('../routes/index');
const contactRouter = require('../routes/contactRouters');
const userRouter = require('../routes/userRouters');

const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/submit', (req, res) => {
    res.send('Form submitted');
  });

// Define routes
app.use('/', indexRouter); // Root route
app.use('/contacts', contactRouter); // Contacts API
app.use('/users', userRouter); // Users API

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ 
      success: false,
      message: err.message
    });
});

module.exports = app;