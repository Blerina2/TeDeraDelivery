// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
    {
        id: "01",
        title: "Chicken Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: " Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo.  ",
    },

    {
        id: "02",
        title: "Vegetarian Pizza",
        price: 115.0,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "Pizza",

        desc: " Roasted red peppers, baby spinach, onions, mushrooms, tomatoes, and black olives. It's also topped with three kinds of cheese — feta, provolone, and mozzarella — and sprinkled with garlic herb seasoning",
    },

    {
        id: "03",
        title: "Double Cheese Margherita",
        price: 110.0,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "Pizza",

        desc: " The combined flavors of the sauce, soft dough and cheese, topped with some oregano are bound to put you in a happy mood.",
    },

    {
        id: "04",
        title: "Maxican Green Wave",
        price: 110.0,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "If onions, tomatoes, jalapeno, and capsicum are your favorite pizza toppings, you will surely fall in love with Mexican green wave pizza.",
    },

    {
        id: "05",
        title: "Cheese Burger",
        price: 24.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Salty, buttery, and slightly sharp, Comté cheese crisps similarly to Parmesan, adding an irresistibly crunchy frico layer to these cheeseburgers.",
    },

    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: " Sesame seed bun, chicken patty, sandwich sauce, tomato, cheese, bacon",
    },

    {
        id: "07",
        title: "Seafood Pizza",
        price: 115.0,
        image01: product_02_image_02,
        image02: product_02_image_01,
        image03: product_02_image_03,
        category: "Pizza",

        desc: "The smoked salmon pizza is great both as an appetizer or light meal. " +
            "It’s something that you can whip up quickly and each bite is usually pretty healthy and fulfilling." +
            " The crispy crust topped with tasty pieces of smoked salmon, creamy cheese, onion, and capers creates the most delightful flavor in your mouth. " +
            "And it’s perfect for breakfast, lunch, dinner, or late-night snacks.",
    },

    {
        id: "08",
        title: "Thin Cheese Pizza",
        price: 110.0,
        image01: product_03_image_02,
        image02: product_03_image_01,
        image03: product_03_image_03,
        category: "Pizza",

        desc: " This classic cheese pizza recipe makes a chewy crust, homemade tomato sauce, and three different types of cheese",
    },

    {
        id: "09",
        title: "Pizza With Mushroom",
        price: 110.0,
        image01: product_04_image_02,
        image02: product_04_image_01,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "This delicious mushroom pizza is smothered in sautéed mushrooms, onions and garlic, slivers of lacinato kale and layers of mozzarella and fresh-grated parmesan.",
    },

    {
        id: "10",
        title: "Classic Hamburger",
        price: 24.0,
        image01: product_05_image_02,
        image02: product_05_image_01,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Fresh 100% pure ground beef burger with lettuce, tomato, pickles and our Heavenly sauce. Served with our piping hot crinkle-cut French Fries.",
    },

    {
        id: "11",
        title: "Crunchy Bread ",
        price: 35.0,
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Sourdough Bread.The crunch of the outside gives way to a soft, chewy middle to create the perfect bite. For many people, a meal isn't complete unless bread is served with it. ",
    },

    {
        id: "12",
        title: "Delicious Bread ",
        price: 35.0,
        image01: product_06_image_02,
        image02: product_06_image_01,
        image03: product_06_image_03,
        category: "Bread",

        desc: " Soft, silky and still with certain degree of firmness",
    },

    {
        id: "13",
        title: "Loaf Bread ",
        price: 35.0,
        image01: product_06_image_03,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "A loaf of bread is bread which has been shaped and baked in one piece.",
    },
];

export default products;