const db = require('./client');
const { createUser } = require('./users');
const { createProduct } = require('./products');
const { createOrder } = require('./orders')
const { createCart } = require('./cart')
const { createReview } = require('./reviews');

const users = [
  {
    firstName: 'Guest Access',
    lastName: "Guest Access",
    email: 'guest@guest.com',
    password: 'strongpass',
    isAdministrator: false
  },
  {
    firstName: 'Emily',
    lastName: "Johnson",
    email: 'emily@example.com',
    password: 'securepass',
    isAdministrator: false,
  },
  {
    firstName: 'Isabella',
    lastName: "Garcia",
    email: 'bella@example.com',
    password: 'pass1234',
    isAdministrator: false,
  },
  {
    firstName: 'Mohammed',
    lastName: "Ahmed",
    email: 'mohammed@example.com',
    password: 'mysecretpassword',
    isAdministrator: false,
  },
  {
    firstName: 'John',
    lastName: "Smith",
    email: 'john@example.com',
    password: 'password123',
    isAdministrator: true,
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
    name: "dog toy 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 7.99,
    quantity: 5,
    petType: "dog",
    productType: "toy",
    inStock: true,
    isPopular: true,
    imgUrl: "https://i5.walmartimages.com/seo/Multipet-Smiling-Dog-Loofa-Pals-Latex-Plush-Dog-Toy-Banana-Shaped_5510aba5-b44c-4ce3-91fc-226f49f65603.96dad7327bf73586c2685d44654b7764.png"
  },
  {
    name: "bird cage 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 89.99,
    quantity: 20,
    petType: "bird",
    productType: "cage",
    inStock: true,
    isPopular: true,
    imgUrl: "https://m.media-amazon.com/images/I/91gb6kQF-xL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "reptile tank 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 69.99,
    quantity: 5,
    petType: "reptile-amphibian",
    productType: "tank",
    inStock: true,
    isPopular: true,
    imgUrl: "https://reptizoo.store/cdn/shop/products/20gallon-snake_8bb3fe5b-f9fb-4d70-b43c-d90aeaed06bd.jpg?v=1658291367"
  },
  {
    name: "dog bed 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 34.99,
    quantity: 14,
    petType: "dog",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i5.walmartimages.com/seo/Vibrant-Life-Small-Cuddler-Dog-Bed-Gray_664bc6a9-ea04-4248-bdca-49e86f99aa68.7e65d8b17d5cfaeb7494617d2f25c735.jpeg"
  },
  {
    name: "cat tree 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 57.99,
    quantity: 2,
    petType: "cat",
    productType: "tree",
    inStock: true,
    isPopular: false,
    imgUrl: "https://target.scene7.com/is/image/Target/GUEST_3985506d-a8fc-4ecb-857f-c42c201ddb16?wid=488&hei=488&fmt=pjpeg"
  },
  {
    name: "dog accessory 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 20,
    petType: "dog",
    productType: "accessory",
    inStock: true,
    isPopular: true,
    imgUrl: "https://target.scene7.com/is/image/Target/GUEST_e1e6d270-1297-48c3-8718-fc9b2dd92902?wid=1200&hei=1200&qlt=80&fmt=webp"
  },
  {
    name: "bird food 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 9.99,
    quantity: 0,
    petType: "bird",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://images.thdstatic.com/productImages/9508b72a-fc64-4514-a670-5629e65c4985/svn/pennington-bird-seed-food-100542060-64_1000.jpg"
  },
  {
    name: "cat toy 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 30,
    petType: "cat",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.coastalpet.com/remote.axd/images.salsify.com/image/upload/s--R8yRy57W--/bxi15tyclkyhwyifcrvu.jpg?format=webp&quality=80"
  },
  {
    name: "dog house 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 59.99,
    quantity: 8,
    petType: "dog",
    productType: "house",
    inStock: true,
    isPopular: false,
    imgUrl: "https://sp.menardc.com/main/items/media/SUNCA001/ProductMedium/2536210-DH251_WS.jpg"
  },
  {
    name: "bird toy 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 9.99,
    quantity: 25,
    petType: "bird",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/1204335-center-1"
  },
  {
    name: "reptile food 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 10,
    petType: "reptile-amphibian",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/81zF+00YbQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "cat scratcher 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 29.99,
    quantity: 14,
    petType: "cat",
    productType: "scratcher",
    inStock: true,
    isPopular: true,
    imgUrl: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3312421-center-1"
  },
  {
    name: "cat bed 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 13,
    petType: "cat",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3124244-center-1"
  },
  {
    name: "dog cage 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 79.99,
    quantity: 8,
    petType: "dog",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://assets.wfcdn.com/im/91506296/resize-h445%5Ecompr-r85/2255/22554978/Brianna+Double+Door+Foldable+Pet+Crate.jpg"
  },
  {
    name: "bird accessory 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 9.99,
    quantity: 24,
    petType: "bird",
    productType: "accessory",
    inStock: true,
    isPopular: true,
    imgUrl: "https://ae01.alicdn.com/kf/Sda178eb79d4e4780a7938b9d513ce0d6r.jpg"
  },
  {
    name: "reptile accessory 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 27,
    petType: "reptile-amphibian",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5229837?$CLEARjpg$"
  },
  {
    name: "cat litter box 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 16,
    petType: "cat",
    productType: "litter-box",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.hartz.com/wp-content/uploads/2016/12/3270081136_Hartz_cat_litter_tray_beige_angle_1300x1300-1.jpg"
  },
  {
    name: "cat accessory 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 16.99,
    quantity: 10,
    petType: "cat",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://image.chewy.com/is/image/catalog/708182_MAIN._AC_SL600_V1689278359_.jpg"
  },
  {
    name: "reptile lighting 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 32.99,
    quantity: 4,
    petType: "reptile-amphibian",
    productType: "heating-lighting",
    inStock: true,
    isPopular: false,
    imgUrl: "https://healthlighting.com/cdn/shop/products/UVB-Reptile-Basking-Lamp_1200x1200.jpg?v=1617139396"
  },
  {
    name: "reptile lighting 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 4,
    petType: "reptile-amphibian",
    productType: "heating-lighting",
    inStock: true,
    isPopular: true,
    imgUrl: "https://cdn.shopify.com/s/files/1/0089/8567/3828/products/PHAL75boxwithbulb_1600x.jpg?v=1631807882"
  },
  {
    name: "reptile lighting 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 39.99,
    quantity: 4,
    petType: "reptile-amphibian",
    productType: "heating-lighting",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.reptiledeli.com/cdn/shop/products/PhotoRoom-20220707_102725_2000x.png?v=1657205087"
  },
  {
    name: "reptile lighting 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 4,
    petType: "reptile-amphibian",
    productType: "heating-lighting",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.zillarules.com/-/media/project/oneweb/zilla/images/products-homepage/product-images/lighting-heating/heatuvb-baskingfixture/096316280823main.jpg"
  },
  {
    name: "reptile lighting 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 29.99,
    quantity: 4,
    petType: "reptile-amphibian",
    productType: "heating-lighting",
    inStock: true,
    isPopular: false,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKYizjb6PNVcLRWs5yFv48S0RrzPe5scjjw&usqp=CAU"
  },
  {
    name: "cat accessory 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 10,
    petType: "cat",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.dailypaws.com/thmb/6adQMIFI7lYSKMEZMKnfsZNO5Yo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/frisco-fair-isle-fleece-lined-cat-hoodie-e3533e8625ca4a52a7de0ab81d4a8638.jpg"
  },
  {
    name: "cat accessory 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 9.99,
    quantity: 10,
    petType: "cat",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/71QUVzVFaCL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "cat accessory 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 10,
    petType: "cat",
    productType: "accessory",
    inStock: true,
    isPopular: true,
    imgUrl: "https://m.media-amazon.com/images/I/71L1a9dPM+L._AC_SY300_SX300_.jpg"
  },
  {
    name: "cat accessory 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 29.99,
    quantity: 10,
    petType: "cat",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/61OZFvaCC3L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "cat accessory 6",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 10,
    petType: "cat",
    productType: "accessory",
    inStock: true,
    isPopular: true,
    imgUrl: "https://m.media-amazon.com/images/I/51osWpjrdoL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "bird toy 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 20,
    petType: "bird",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://image.chewy.com/is/image/catalog/228196_MAIN._AC_SL600_V1668531877_.jpg"
  },
  {
    name: "bird toy 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 7.99,
    quantity: 25,
    petType: "bird",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5297829?$CLEARjpg$"
  },
  {
    name: "bird toy 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 25,
    petType: "bird",
    productType: "toy",
    inStock: true,
    isPopular: true,
    imgUrl: "https://m.media-amazon.com/images/I/51mI-AWMx4L.jpg"
  },
  {
    name: "bird toy 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 25,
    petType: "bird",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://image.chewy.com/is/image/catalog/138695_MAIN._AC_SL600_V1662671535_.jpg"
  },
  {
    name: "dog house 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 99.99,
    quantity: 8,
    petType: "dog",
    productType: "house",
    inStock: true,
    isPopular: false,
    imgUrl: "https://cdn.media.amplience.net/s/hobbylobby/2202828-81078901-IMGSET"
  },
  {
    name: "dog house 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 49.99,
    quantity: 4,
    petType: "dog",
    productType: "house",
    inStock: true,
    isPopular: false,
    imgUrl: "https://image.chewy.com/is/image/catalog/235496_MAIN._AC_SL600_V1591025563_.jpg"
  },
  {
    name: "dog house 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 59.99,
    quantity: 8,
    petType: "dog",
    productType: "house",
    inStock: true,
    isPopular: true,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5180848?$CLEARjpg$"
  },
  {
    name: "dog house 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 129.99,
    quantity: 10,
    petType: "dog",
    productType: "house",
    inStock: true,
    isPopular: false,
    imgUrl: "https://images.thdstatic.com/productImages/5e29a04a-92c1-4219-8e6d-c1bd0c139d8b/svn/brown-dog-houses-air80-64_600.jpg"
  },
  {
    name: "cat bed 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 13,
    petType: "cat",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5338566?$CLEARjpg$"
  },
  {
    name: "cat bed 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 13,
    petType: "cat",
    productType: "bed",
    inStock: true,
    isPopular: true,
    imgUrl: "https://catit.us/cdn/shop/products/121fa5a8445fb7c03743c010863b341ed2ef1e61.jpg?v=1687983928&width=823"
  },
  {
    name: "cat bed 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 13,
    petType: "cat",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8d9fe868d16649fb623404f89195fd4c.jpg?imageView2/2/w/800/q/70"
  },
  {
    name: "cat bed 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 13,
    petType: "cat",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/eafa9f626065ab686cca9ceb3f5b33bd.jpg?imageView2/2/w/800/q/70"
  },

  {
    name: "cat food 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 6.99,
    quantity: 12,
    petType: "cat",
    productType: "food",
    inStock: true,
    isPopular: true,
    imgUrl: "https://images.heb.com/is/image/HEBGrocery/prd-medium/000146801.jpg"
  },
  {
    name: "dog food 1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 29.99,
    quantity: 7,
    petType: "dog",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/81xyE8OZBqL.jpg"
  },
  {
    name: "dog toy 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 16.99,
    quantity: 10,
    petType: "dog",
    productType: "toy",
    inStock: true,
    isPopular: true,
    imgUrl: "https://www.dailypaws.com/thmb/QFu1znLVvV5myz7_29sa1mI6lvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chew-King-Fetch-Balls-56a65d4ac8c442e78bf45992a3007336.jpg"
  },
  {
    name: "bird food 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 0,
    petType: "bird",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3541953-center-1"
  },
  {
    name: "bird food 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 9.99,
    quantity: 0,
    petType: "bird",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://i5.walmartimages.com/seo/Kaytee-Forti-Diet-Parrot-Food-Feather-Health-8-lb_2eeb8494-2461-48ca-a2aa-b0cdb3fdff71.e83fe1c0dec97071c8f2b9d212198883.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
  },
  {
    name: "bird food 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 0,
    petType: "bird",
    productType: "food",
    inStock: false,
    isPopular: true,
    imgUrl: "https://target.scene7.com/is/image/Target/GUEST_010dc9ec-f86a-46b8-b226-1a203184054e?wid=488&hei=488&fmt=pjpeg"
  },
  {
    name: "bird food 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 0,
    petType: "bird",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://www.fmbrown.com/wp-content/uploads/2017/10/40780.jpg"
  },
  {
    name: "dog accessory 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 17.99,
    quantity: 4,
    petType: "dog",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5336630?$CLEARjpg$"
  },
  {
    name: "dog accessory 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 4,
    petType: "dog",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://img.fruugo.com/product/5/68/618152685_max.jpg"
  },
  {
    name: "dog accessory 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 4,
    petType: "dog",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.sparkpaws.com/cdn/shop/products/DSC_1393.jpg?v=1626362098"
  },
  {
    name: "dog accessory 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 4,
    petType: "dog",
    productType: "accessory",
    inStock: true,
    isPopular: true,
    imgUrl: "https://img.fruugo.com/product/4/00/611158004_max.jpg"
  },
  {
    name: "dog bed 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 23,
    petType: "dog",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5214094?$CLEARjpg$"
  },
  {
    name: "dog bed 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 13,
    petType: "dog",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40qByw_xCPgXF_hQqwOIxDKl6hIvJJw5alw&usqp=CAU"
  },
  {
    name: "dog bed 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 23.99,
    quantity: 18,
    petType: "dog",
    productType: "bed",
    inStock: true,
    isPopular: false,
    imgUrl: "https://assets.petco.com/petco/image/upload/f_auto%2Cq_auto/3323825-center-1?$Zoom$"
  },
  {
    name: "dog bed 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 27.99,
    quantity: 14,
    petType: "dog",
    productType: "bed",
    inStock: true,
    isPopular: true,
    imgUrl: "https://www.ikea.com/us/en/images/products/lurvig-dog-bed-light-gray__0782458_pe761331_s5.jpg?f=s"
  },
  {
    name: "dog food 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 0,
    petType: "dog",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/815zdFzssCL.jpg"
  },
  {
    name: "dog food 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 0,
    petType: "dog",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/71Azp-504uL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "dog food 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 29.99,
    quantity: 0,
    petType: "dog",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://images.heb.com/is/image/HEBGrocery/001519542-1"
  },
  {
    name: "dog food 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 11.99,
    quantity: 0,
    petType: "dog",
    productType: "food",
    inStock: false,
    isPopular: false,
    imgUrl: "https://cdn.royalcanin-weshare-online.io/fufPTYcBaPOZra8qQPwH/v51/00030111447142-cf-gs1"
  },
  {
    name: "dog cage 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 69.99,
    quantity: 8,
    petType: "dog",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/71eK5rt634L.jpg"
  },
  {
    name: "dog cage 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 89.99,
    quantity: 8,
    petType: "dog",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://target.scene7.com/is/image/Target/GUEST_5de85854-428a-409a-aec7-67b120555f0c?wid=488&hei=488&fmt=pjpeg"
  },
  {
    name: "dog cage 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 59.99,
    quantity: 8,
    petType: "dog",
    productType: "cage",
    inStock: true,
    isPopular: true,
    imgUrl: "https://assets.wfcdn.com/im/95560318/resize-h445%5Ecompr-r85/2479/247926783/Dog+Crate+Furniture+With+Thick+Cushion+%26+Double+Doors+For+Small+To+Large+Dogs.jpg"
  },
  {
    name: "dog cage 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 49.99,
    quantity: 8,
    petType: "dog",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i5.walmartimages.com/asr/36a58d2a-4dde-4d94-a9d3-cb5527ceb191.0777071dae0908b7879b55a5da96c07a.jpeg"
  },
  {
    name: "dog toy 3",
    description: "first toy",
    price: 12.99,
    quantity: 5,
    petType: "dog",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://us.tug-e-nuff.com/cdn/shop/products/UntitledCatalog2954_512x512.jpg?v=1635274208"
  },
  {
    name: "dog toy 4",
    description: "first toy",
    price: 9.99,
    quantity: 5,
    petType: "dog",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://target.scene7.com/is/image/Target/GUEST_55a2a456-4c41-44ce-b226-6bce34d8025c?wid=488&hei=488&fmt=pjpeg"
  },
  {
    name: "dog toy 5",
    description: "first toy",
    price: 13.99,
    quantity: 5,
    petType: "dog",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://media.istockphoto.com/id/116012038/photo/yellow-squishy-dog-toy-for-clean-teeth.jpg?s=612x612&w=0&k=20&c=1vVKWugkL-uo2HMqe-yaf5QSTBCWcFUL3gJAyu_Xoyw="
  },
  {
    name: "cat food 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 12,
    petType: "cat",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i5.walmartimages.com/seo/9Lives-Daily-Essentials-Dry-Cat-Food-With-Chicken-Beef-Salmon-Flavors-15-5-lb-Bag_2f561c17-4d13-4172-9f0c-cb78709b4d39.b447c46c4937fd22c45b945e65ae88b5.jpeg"
  },
  {
    name: "cat food 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 12,
    petType: "cat",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.iams.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf3396/files/migrate-product-files/images/nfbnqzclqspwsyngh8fw.png"
  },
  {
    name: "cat food 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 12,
    petType: "cat",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://cdn0.woolworths.media/content/wowproductimages/large/053224.jpg"
  },
  {
    name: "cat food 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 11.99,
    quantity: 12,
    petType: "cat",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://concordpetfoods.com/cdn/shop/products/11890-5_354x500.jpg?v=1571613835"
  },
  {
    name: "cat toy 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 30,
    petType: "cat",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5c6467680cf57d95a64743db/1618328087580-2643I1AGBEXTYW4FJB25/jingle_ball_cat_toy.jpg?format=1000w"
  },
  {
    name: "cat toy 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 8.99,
    quantity: 30,
    petType: "cat",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i5.walmartimages.com/seo/Playful-Pet-Feathers-Wand-Cat-Toy_744808d2-28e1-44e1-835a-a1ccad0e31c0_1.3ced401ef23b70039d58dcc8796125c2.jpeg"
  },
  {
    name: "cat toy 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 6.99,
    quantity: 30,
    petType: "cat",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://cdn11.bigcommerce.com/s-asivtkjxr8/images/stencil/1280x1280/products/2115/7014/bly00acn3mrwvaiceph8__78953.1630111762.jpg?c=1"
  },
  {
    name: "cat toy 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 30,
    petType: "cat",
    productType: "toy",
    inStock: true,
    isPopular: false,
    imgUrl: "https://cdn11.bigcommerce.com/s-asivtkjxr8/images/stencil/1280x1280/products/1844/5274/nv9xzc83rbx5edlaswnl__26049.1630111067.jpg?c=1"
  },
  {
    name: "cat scratcher 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 14,
    petType: "cat",
    productType: "scratcher",
    inStock: true,
    isPopular: false,
    imgUrl: "https://images.thdstatic.com/productImages/4a0a070d-2489-40ba-8294-35e49c64f8cf/svn/foobrues-cat-trees-scratch-posts-l-w79633965-64_600.jpg"
  },
  {
    name: "cat scratcher 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 14,
    petType: "cat",
    productType: "scratcher",
    inStock: true,
    isPopular: false,
    imgUrl: "https://images.thdstatic.com/productImages/52fd3135-761e-4504-83ee-dea3b65f7752/svn/andmakers-cat-trees-scratch-posts-mz-cylinder-rpl-64_600.jpg"
  },
  {
    name: "cat scratcher 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 34.99,
    quantity: 14,
    petType: "cat",
    productType: "scratcher",
    inStock: true,
    isPopular: true,
    imgUrl: "https://m.media-amazon.com/images/I/61LsnH5NpzL.jpg"
  },
  {
    name: "cat scratcher 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 17.99,
    quantity: 14,
    petType: "cat",
    productType: "scratcher",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.cozycatfurniture.com/image/cache/catalog/sisal-carpet-cat-scratcher-bed-500x500.jpg"
  },
  {
    name: "cat tree 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 69.99,
    quantity: 2,
    petType: "cat",
    productType: "tree",
    inStock: true,
    isPopular: true,
    imgUrl: "https://www.catrygroup.com/cdn/shop/products/CT210397_01.jpg?v=1640133375"
  },
  {
    name: "cat tree 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 55.99,
    quantity: 2,
    petType: "cat",
    productType: "tree",
    inStock: true,
    isPopular: false,
    imgUrl: "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3119752-center-1"
  },
  {
    name: "cat tree 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 49.99,
    quantity: 2,
    petType: "cat",
    productType: "tree",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.cozycatfurniture.com/image/cache/catalog/usa-wooden-cat-tree-carpet-500x500.jpg"
  },
  {
    name: "cat tree 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 39.99,
    quantity: 2,
    petType: "cat",
    productType: "tree",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/71DJfgDN58L.jpg"
  },
  {
    name: "cat litter box 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 16,
    petType: "cat",
    productType: "litter-box",
    inStock: true,
    isPopular: false,
    imgUrl: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/2746033-center-1"
  },
  {
    name: "cat litter box 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 29.99,
    quantity: 16,
    petType: "cat",
    productType: "litter-box",
    inStock: true,
    isPopular: false,
    imgUrl: "https://s7d2.scene7.com/is/image/PetSmart/5313011"
  },
  {
    name: "cat litter box 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 23.99,
    quantity: 16,
    petType: "cat",
    productType: "litter-box",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i.ebayimg.com/images/g/AwIAAOSwY0pi~kMO/s-l1600.jpg"
  },
  {
    name: "cat litter box 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 32.99,
    quantity: 16,
    petType: "cat",
    productType: "litter-box",
    inStock: true,
    isPopular: false,
    imgUrl: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_17/3600240/31q6rnwaezl-sl500-6421b6602f2d8.jpg"
  },
  {
    name: "bird cage 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 49.99,
    quantity: 20,
    petType: "bird",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/81+otqZcswL.jpg"
  },
  {
    name: "bird cage 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 59.99,
    quantity: 20,
    petType: "bird",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.supermoss.com/wp-content/uploads/2020/04/Bird_Cage_Large_80853-600x750.jpg"
  },
  {
    name: "bird cage 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 69.99,
    quantity: 20,
    petType: "bird",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://images.thdstatic.com/productImages/7b22798e-f7c6-45ea-a380-560b0f7ddf87/svn/vivohome-bird-cages-carriers-x002fp6ac1-64_1000.jpg"
  },
  {
    name: "bird cage 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 79.99,
    quantity: 20,
    petType: "bird",
    productType: "cage",
    inStock: true,
    isPopular: false,
    imgUrl: "https://birdcages4less.com/Merchant5/graphics/00000002/2/New%20PA5747%20Black%20450.png"
  },
  {
    name: "bird accessory 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 24,
    petType: "bird",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3H9f5IJaeOaG-8uojrzT4_qJZFnyci-g_w&usqp=CAU"
  },
  {
    name: "bird accessory 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 24,
    petType: "bird",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://imageservice.gloster.com/Render?model=15727&simple=&angle=34&bgcolor=transparent&format=webp"
  },
  {
    name: "bird accessory 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 7.99,
    quantity: 24,
    petType: "bird",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQj4dhIvqUl7-F_75AP-Ilr1wkP2gIAmdNVg&usqp=CAU"
  },
  {
    name: "bird accessory 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 11.99,
    quantity: 24,
    petType: "bird",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://ae01.alicdn.com/kf/S00e2f316a82b4269b826ebe92ae0681cx/Natural-Wood-Pet-Parrot-Raw-Wood-Fork-Tree-Branch-Stand-Rack-Squirrel-Bird-Hamster-Branch-Perches.jpg"
  },
  {
    name: "reptile food 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 10,
    petType: "reptile-amphibian",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://gargeer.com/cdn/shop/files/Gargeer-Fruit-Blend-Calcium-WITH-D3_front.jpg?v=1692615136"
  },
  {
    name: "reptile food 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 10,
    petType: "reptile-amphibian",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i.pinimg.com/originals/e5/89/df/e589df9e5913c9792883e5a8790529c9.jpg"
  },
  {
    name: "reptile food 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 9.99,
    quantity: 10,
    petType: "reptile-amphibian",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://m.media-amazon.com/images/I/91NqdgSvkkL.jpg"
  },
  {
    name: "reptile food 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 24.99,
    quantity: 10,
    petType: "reptile-amphibian",
    productType: "food",
    inStock: true,
    isPopular: false,
    imgUrl: "https://cdn.powered-by-nitrosell.com/product_images/29/7193/large-097612400762.jpg"
  },
  {
    name: "reptile tank 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 89.99,
    quantity: 5,
    petType: "reptile-amphibian",
    productType: "tank",
    inStock: true,
    isPopular: false,
    imgUrl: "https://i5.walmartimages.com/seo/REPTI-ZOO-Knock-Down-40-Gallon-Glass-Reptile-Terrarium_5c056f36-9cca-417c-9514-099dc6c7367c.d802568459a9ee598cda6dd8c8b559b6.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
  },
  {
    name: "reptile tank 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 49.99,
    quantity: 5,
    petType: "reptile-amphibian",
    productType: "tank",
    inStock: true,
    isPopular: false,
    imgUrl: "https://www.junglebobsreptileworld.com/cdn/shop/products/tetrafauna-deluxe-slide-door-terrarium-75-gallon-48x18x21supplies---terrariumsjungle-bobs-reptile-world-31077174_1af0b93f-976a-46a2-b376-b21d9c2e82e5_512x512.png?v=1652842840"
  },
  {
    name: "reptile tank 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 59.99,
    quantity: 5,
    petType: "reptile-amphibian",
    productType: "tank",
    inStock: true,
    isPopular: false,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstwVvLu53S5wYh9FnbrtrNFyfNzxzvCZXxpLAlG8pEisUTsA6psy177MjD9zBrtvYf98&usqp=CAU"
  },
  {
    name: "reptile tank 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 39.99,
    quantity: 5,
    petType: "reptile-amphibian",
    productType: "tank",
    inStock: true,
    isPopular: true,
    imgUrl: "https://reptizoo.store/cdn/shop/products/10gallon-snake.jpg?v=1658291329"
  },
  {
    name: "reptile accessory 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 14.99,
    quantity: 27,
    petType: "reptile-amphibian",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMdO4sUrf1iTap4d7z7Q6dRAm2bUHmC7_m6LRXjG4fBWHvo-F4ReaQ2gc7HbiVCMgqH4&usqp=CAU"
  },
  {
    name: "reptile accessory 3",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 12.99,
    quantity: 27,
    petType: "reptile-amphibian",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://youronlinepetstore.com.au/cdn/shop/collections/reptile-hides-and-bowls-your-online-pet-store_a5284f6d-a22c-497b-bcca-af3eef7959ab.png?v=16898060805"
  },
  {
    name: "reptile accessory 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 17.99,
    quantity: 27,
    petType: "reptile-amphibian",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://image.made-in-china.com/202f0j00kilrjKwgMAzq/Hot-Sale-Resin-Pyramid-Reptile-Hide-Cave-for-Reptile-Supplies-Xiamen.webp"
  },
  {
    name: "reptile accessory 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 19.99,
    quantity: 27,
    petType: "reptile-amphibian",
    productType: "accessory",
    inStock: true,
    isPopular: false,
    imgUrl: "https://img.kwcdn.com/product/1e29825078/3c76469a-1899-4e4d-80e9-61ee6519774b_800x800.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp"
  },


]

const cartProducts = [
  {
    name: "do toy 1",
    description: "first toy",
    price: 7.99,
    quantity: 5,
    petType: "dog",
    productType: "toy",
    inStock: true,
    isPopular: true,
    imgUrl: "https://i5.walmartimages.com/seo/Multipet-Smiling-Dog-Loofa-Pals-Latex-Plush-Dog-Toy-Banana-Shaped_5510aba5-b44c-4ce3-91fc-226f49f65603.96dad7327bf73586c2685d44654b7764.png"
  },
  
  

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
    products: [
      {
        name: "toy1",
        description: "first toy",
        price: 10,
        quantity: 5,
        petType: "dog",
        productType: "toy",
        inStock: true,
        isPopular: true,
        imgUrl: "https://i5.walmartimages.com/seo/Multipet-Smiling-Dog-Loofa-Pals-Latex-Plush-Dog-Toy-Banana-Shaped_5510aba5-b44c-4ce3-91fc-226f49f65603.96dad7327bf73586c2685d44654b7764.png"
      },
      {
        name: "pet food 2",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        price: 30,
        quantity: 12,
        petType: "cat",
        productType: "food",
        inStock: true,
        isPopular: true,
        imgUrl: "https://image.chewy.com/is/image/catalog/76091_MAIN._AC_SL1500_V1683817870_.jpg"
      },
      {
        name: "pet food 3",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        price: 45,
        quantity: 7,
        petType: "dog",
        productType: "food",
        inStock: true,
        isPopular: false,
        imgUrl: "https://m.media-amazon.com/images/I/81xyE8OZBqL.jpg"
      },
      {
        name: "dog toy 3",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        price: 18,
        quantity: 10,
        petType: "dog",
        productType: "toy",
        inStock: true,
        isPopular: true,
        imgUrl: "https://www.dailypaws.com/thmb/QFu1znLVvV5myz7_29sa1mI6lvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chew-King-Fetch-Balls-56a65d4ac8c442e78bf45992a3007336.jpg"
      },
    ],
    userId: 2
  }
]

const reviews = [
  {
    title: 'Great Item!',
    content: 'My pet loved it',
    date: '2023-09-21',
    productId: 1,
    userId: 1,
  },
  {
    title: 'Needs more colors!',
    content: 'I really like the product... Hopefully, there are more color selections!',
    date: '2023-09-22',
    productId: 1,
    userId: 2,
  },
  {
    title: 'Awesome purchase',
    content: 'Coolest thing ever.',
    date: '2023-09-23',
    productId: 2,
    userId: 3,
  },
  {
    title: 'My Pet loved it!',
    content: 'Great item. Thank you!',
    date: '2023-09-24',
    productId: 2,
    userId: 4,
  },
  {
    title: 'Coolest thing ever',
    content: 'My pet loved it. Awesome purchase!',
    date: '2023-09-25',
    productId: 4,
    userId: 5,
  },

  {
    title: 'Fantastic Product',
    content: 'My pet can\'t get enough of it!',
    date: '2023-09-26',
    productId: 5,
    userId: 1,
  },
  {
    title: 'Very satisfied',
    content: 'This product exceeded my expectations.',
    date: '2023-09-27',
    productId: 3,
    userId: 2,
  },
  {
    title: 'Impressive quality',
    content: 'The quality of this product is impressive.',
    date: '2023-09-28',
    productId: 6,
    userId: 3,
  },
  {
    title: 'Highly recommend',
    content: 'I would highly recommend this product to others.',
    date: '2023-09-29',
    productId: 7,
    userId: 4,
  },
  {
    title: 'Great value',
    content: 'This product is a great value for the price.',
    date: '2023-09-30',
    productId: 8,
    userId: 5,
  },
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
  catch (err) {
    throw err;
  }
}

const createTables = async () => {
  try {
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
          "petType" VARCHAR(255),
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
            "products" JSONB[],
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
  catch (err) {
    throw err;
  }
}

const insertUsers = async () => {
  try {
    for (let user of users) {
      const _user = await createUser({ 
                        firstName: user.firstName, 
                        lastName: user.lastName, 
                        email: user.email, 
                        password: user.password, 
                        isAdministrator: user.isAdministrator
                      });
      console.log(_user);
      await addCartToUser(_user.id);
    }
    console.log('Seed user data inserted successfully.');
  } catch (error) {
    console.error('Error seeding user data:', error);
  }
};

const addCartToUser = async (userId) => {
  console.log("userId addCartToUser", userId);
  console.log("addCartToUser", cartProducts);
  await createCart({ products:cartProducts , userId });
}

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
      await createProduct({
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        petType: product.petType,
        productType: product.productType,
        inStock: product.inStock,
        isPopular: product.isPopular,
        imgUrl: product.imgUrl
      });
    }
    console.log('Seed products data inserted successfully.');
  } catch (error) {
    console.error('Error seeding products data:', error);
  }
};

const insertOrders = async () => {
  try {
    for (const order of orders) {
      await createOrder({
        date: order.date,
        createdAt: order.createdAt,
        productId: order.productId,
        userId: order.userId,
        trackingNumber: order.trackingNumber
      });
    }
    console.log('Seed orders data inserted successfully.');
  } catch (error) {
    console.error('Error seeding orders data:', error);
  }
};

const insertCart = async () => {
  try {
    for (const cart of carts) {
      await createCart(cart);
    }
    console.log('Seed cart data inserted successfully.');
  } catch (error) {
    console.error('Error seeding cart data:', error);
  }
};

const insertReviews = async () => {
  try {
    for (const review of reviews) {
      await createReview({
        title: review.title,
        content: review.content,
        date: review.date,
        productId: review.productId,
        userId: review.userId
      });
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
