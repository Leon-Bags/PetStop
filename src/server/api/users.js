const express = require('express')
const usersRouter = express.Router();

const { requireUser } = require('./utils')
const {
    getAllUsers,
    createUser,
    getUserById,
    getUserByEmail,
    deleteUserById,
} = require('../db');

const jwt = require('jsonwebtoken')

usersRouter.get('/', async( req, res, next) => {
    try {
        const users = await getAllUsers();

        res.send({
            users
        });
    } catch ({name, message}) {
        next({name, message})
    }
});

usersRouter.get('/:userId', async( req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await getUserById(userId);
        res.send({
            user
        });
    } catch ({name, message}) {
        next({name, message})
    }
});

usersRouter.get('/:email', async( req, res, next) => {
    try {
        const { email } = req.params;
        const user = await getUserByEmail(email);
        res.send({
            user
        });
    } catch ({name, message}) {
        next({name, message})
    }
});

usersRouter.post('/login', async(req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) {
        next({
            name: 'MissingCredentialsError',
            message: 'Please supply both an email and password'
        });
    }
    try {
        const user = await getUserByEmail(email);
        const userId = user.id
        if(user) {
            const token = jwt.sign({
                id: user.id,
                email
            }, process.env.JWT_SECRET, {
                expiresIn: '1w'
            });

            res.send({
                message: 'Login successful!',
                token,
                userId,
            });
        }
        else {
            next({
                name: 'IncorrectCredentialsError',
                message: 'Username or password is incorrect'
            });
        }
    } catch(err) {
        next(err);
    }
});

usersRouter.post('/register', async(req, res, next) => {
    const { email, password, firstName, lastName, address, isAdministrator } = req.body;

    try {
        const _user = await getUserByEmail(email);

        if(_user) {
            next({
                name: 'UserExistsError',
                message: 'A user with that email already exists'
            });
        }
        
        const user = await createUser({
            email,
            password,
            firstName,
            lastName,
            address,
            isAdministrator
        });
        
        const userId = user.id

        const token = jwt.sign({
            id: user.id,
            email
        }, process.env.JWT_SECRET, {
            expiresIn: '1w'
        });

        res.send({
            message: 'Sign up successful!',
            token,
            userId,
        });
    } catch({name, message}) {
        next({name, message})
    }
})

usersRouter.post('/administartor/register', async(req, res, next) => {
    const { email, password, firstName, lastName, address, isAdministrator } = req.body;

    try {
        const _user = await getUserByEmail(email);

        if(_user) {
            next({
                name: 'UserExistsError',
                message: 'A user with that email already exists'
            });
        }
        
        const user = await createUser({
            email,
            password,
            firstName,
            lastName,
            address,
            isAdministrator
        });

        const userId = user.id
        
        const token = jwt.sign({
            id: user.id,
            email
        }, process.env.JWT_SECRET, {
            expiresIn: '1w'
        });

        res.send({
            message: 'Sign up successful!',
            token,
            userId,
        });
    } catch({name, message}) {
        next({name, message})
    }
})

usersRouter.delete('/:userId', requireUser, async (req, res, next) => {
    try {
      const {userId} = req.params;
      const getUserId = await getUserById(userId);
      if(!getUserId) {
        next({
          name: 'User NotFound',
          message: `No user by ID ${userId}`
        })
      } else {
        const deleteUser = await deleteUserById(userId)
        res.send(deleteUser);
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = usersRouter;