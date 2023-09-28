const db = require('./client');
const { createUser } = require('./users');
const { createProduct } = require('./products');
const { createOrder } = require('./orders')
const { createCart } = require('./cart')
const { createReview } = require('./reviews')

const users = [
  {
    firstName: 'Liu',
    lastName: "Wei",
    email: 'liu@example.com',
    password: 'strongpass'
  },
  {
    firstName: 'Emily',
    lastName: "Johnson",
    email: 'emily@example.com',
    password: 'securepass'
  },
  {
    firstName: 'Isabella',
    lastName: "Garcia",
    email: 'bella@example.com',
    password: 'pass1234'
  },
  {
    firstName: 'Mohammed',
    lastName: "Ahmed",
    email: 'mohammed@example.com',
    password: 'mysecretpassword'
  },
  {
    firstName: 'John',
    lastName: "Smith",
    email: 'john@example.com',
    password: 'password123'
  },
  // Add more user objects as needed
];  

// Insert starter information:

const administrators = [
  {
    name: 'admin1',
    email: 'admin1@gmail.com',
    password: 'password123',
  },
]
const products = [
  {
    name: 'toy1',
    description: 'first toy',
    price:  10.00,
    quantity: '5',
    productType: 'Toy',
    inStock:  true,
    isPopular: true,
    imgUrl: 'https://i5.walmartimages.com/seo/Multipet-Smiling-Dog-Loofa-Pals-Latex-Plush-Dog-Toy-Banana-Shaped_5510aba5-b44c-4ce3-91fc-226f49f65603.96dad7327bf73586c2685d44654b7764.png'
  }
]

const orders = [
  {
    date: '2023-09-21',
    createdAt: '2023-09-21 18:58:20',
    productId: 1,
    userId: 1,
    trackingNumber: 12365645,
  }
]

const carts = [
  {
    productId: [1]
  }
]

const reviews = [
  {
    title: 'review',
    content: 'some stuff',
    date: '2023-09-21',
    productId: 1,
    userId: 1,
  }
]

//:

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS cart;
        DROP TABLE IF EXISTS users;
        `)
    }
    catch(err) {
        throw err;
    }
}

const createTables = async () => {
    try{
        await db.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            address VARCHAR (255),
            "firstName" VARCHAR(255),
            "lastName" VARCHAR(255),
            "isAdministrator" BOOLEAN DEFAULT false
        );

        CREATE TABLE products(
          id SERIAL PRIMARY KEY,
          name VARCHAR(225) UNIQUE NOT NULL,
          description VARCHAR(255),
          price FLOAT,
          quantity INTEGER,
          "productType" VARCHAR(255),
          "inStock" BOOLEAN DEFAULT true,
          "isPopular" BOOLEAN DEFAULT true,
          "imgUrl" VARCHAR(255) DEFAULT NULL
      );
        
        CREATE TABLE orders(
            id SERIAL PRIMARY KEY,
            date DATE,
            "createdAt" TIMESTAMP,
            "productId" INTEGER,
            "userId" INTEGER REFERENCES users(id),
            "trackingNumber" VARCHAR(255) UNIQUE
        );
          
                                          -- Cart NEEDS WORK
        CREATE TABLE cart(
            id SERIAL PRIMARY KEY,
            "productId" INTEGER[],
            "userId" INTEGER REFERENCES users(id)
        );

        CREATE TABLE reviews(
          id SERIAL PRIMARY KEY,
          title varchar(255) NOT NULL,
          content TEXT NOT NULL,
          date DATE,
          "productId" INTEGER REFERENCES products(id),
          "userId" INTEGER REFERENCES users(id)
        );

        `)
    }
    catch(err) {
        throw err;
    }
}

const insertUsers = async () => {
  try {
    for (let user of users) {
      await createUser({ firstName: user.firstName, 
                         lastName: user.lastName, 
                         email: user.email, 
                         password: user.password });
    }
    console.log('Seed user data inserted successfully.');
  } catch (error) {
    console.error('Error seeding user data:', error);
  }
};

// const insertAdministrators = async () => {
//   try {
//     for (const administrator of administrators) {
//       await createAdministrator({name: administrator.name, email: administrator.email, password: administrator.password, token: administrator.token});
//     }
//     console.log('Seed administrator data inserted successfully.');
//   } catch (error) {
//     console.error('Error seeding administrator data:', error);
//   }
// };

const insertProducts = async () => {
  try {
    for (const product of products) {
      await createProduct({name: product.name,
                        description: product.description,
                        price: product.price,
                        quantity: product.quantity,
                        productType: product.productType,
                        inStock: product.inStock,
                        isPopular: product.isPopular,
                        imgUrl: product.imgUrl});
    }
    console.log('Seed products data inserted successfully.');
  } catch (error) {
    console.error('Error seeding products data:', error);
  }
};

const insertOrders = async () => {
  try {
    for (const order of orders) {
      await createOrder({date: order.date,
                        createdAt: order.createdAt,
                        productId: order.productId,
                        userId: order.userId,
                        trackingNumber: order.trackingNumber});
    }
    console.log('Seed orders data inserted successfully.');
  } catch (error) {
    console.error('Error seeding orders data:', error);
  }
};

const insertCart = async () => {
  try {
    for (const cart of carts) {
      await createCart({productId: cart.productId,});
    }
    console.log('Seed cart data inserted successfully.');
  } catch (error) {
    console.error('Error seeding cart data:', error);
  }
};

const insertReviews = async () => {
  try {
    for (const review of reviews) {
      await createReview({title: review.title,
                        content: review.content,
                        date: review.date,
                        productId: review.productId,
                        userId: review.userId});
    }
    console.log('Seed review data inserted successfully.');
  } catch (error) {
    console.error('Error seeding review data:', error);
  }
};


const seedDatabse = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertUsers();
        await insertProducts();
        await insertOrders();
        await insertCart();
        await insertReviews();
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabse()
