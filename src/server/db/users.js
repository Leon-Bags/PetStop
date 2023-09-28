const db = require('./client')
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createUser = async({ name='first last', email, password, isAdministrator, token }) => {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    try {
        const { rows: [ users ] } = await db.query(`
        INSERT INTO users(name, email, password, "isAdministrator", token)
        VALUES($1, $2, $3, $4, $5)
        ON CONFLICT (email) DO NOTHING
        RETURNING *`, [name, email, hashedPassword, isAdministrator, token]);

        return users;
    } catch (err) {
        throw err;
    }
}

const getAllUserAdmins = async() => {
    try {
        const { rows: [ users ] } = await db.query(`
        SELECT * 
        FROM users
        WHERE "isAdministrator"=$1;`, [true]);

        if(!users) {
            console.error("No Admins")
            return;
        }
        return users;
    } catch (err) {
        throw err;
    }
}

const getAllUsers = async() => {
    try {
        const { rows: [ users ] } = await db.query(`
        SELECT * 
        FROM users`, []);

        if(!users) {
            console.error("No Users")
            return;
        }
        return users;
    } catch (err) {
        throw err;
    }
}

const getUserById = async(id) => {
    try {
        const { rows: [ users ] } = await db.query(`
        SELECT * 
        FROM users
        WHERE name=$1;`, [ id ]);

        if(!users) {
            console.error("No Users");
            return;
        }
        return users;
    } catch (err) {
        throw err;
    }
}


const getUserByEmail = async(email) => {
    try {
        const { rows: [ users ] } = await db.query(`
        SELECT * 
        FROM users
        WHERE email=$1;`, [ email ]);

        if(!users) {
            return;
        }
        return users;
    } catch (err) {
        throw err;
    }
}

const updateUserById = async(id, fields = {}) => {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');
    if (setString.length === 0) {
        return;
    }
    try {
        const { rows: [users] } = await client.query(`
            UPDATE users
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
        `, Object.values(fields));
        return users;
    } catch (error) {
        throw error;
    }
}

const deleteUserById = async(id) => {
    try {
        const { rows: [ users ] } = await db.query(`
        DELETE FROM users
        WHERE id=$1
        RETURNING *;`, [ id ]);

        if(!users) {
            return;
        }
        return users;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getAllUserAdmins,
    getUserById,
    getUserByEmail,
    updateUserById,
    deleteUserById,
};