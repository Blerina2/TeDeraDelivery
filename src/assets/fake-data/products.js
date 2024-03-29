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

import product_07_image_01 from "../images/TomYumSoup2.png";
import product_07_image_02 from "../images/TomYumSoup.png";
import product_07_image_03 from "../images/TomYumSoup3.png";

import product_08_image_01 from "../images/WontonKorean.png";
import product_08_image_02 from "../images/WontonKorean2.png";
import product_08_image_03 from "../images/WontonKorean3.png";

import product_09_image_01 from "../images/PulëGeneralTso.jpg";
import product_09_image_02 from "../images/PulëGeneralTso2.jpg";
import product_09_image_03 from "../images/PulëGeneralTso3.jpg";

import product_10_image_01 from "../images/UdonBulgogi.jpg";
import product_10_image_02 from "../images/UdonBulgogi2.jpg";
import product_10_image_03 from "../images/UdonBulgogi3.png";

import product_11_image_01 from "../images/Tofutakuanroll.jpg";
import product_11_image_02 from "../images/Tofutakuanroll2.jpg";
import product_11_image_03 from "../images/Tofutakuanroll3.jpg";

import product_12_image_01 from "../images/Fli.jpg";
import product_12_image_02 from "../images/Fli2.jpg";
import product_12_image_03 from "../images/Fli3.jpg";

import product_13_image_01 from "../images/Pite.jpg";
import product_13_image_02 from "../images/Pite2.jpg";
import product_13_image_03 from "../images/Pite3.jpg";

import product_14_image_01 from "../images/Pasul2.jpg";
import product_14_image_02 from "../images/Pasul.jpg";
import product_14_image_03 from "../images/Pasul3.jpg";

import product_15_image_01 from "../images/Qebapa3.jpg";
import product_15_image_02 from "../images/Qebapa2.jpg";
import product_15_image_03 from "../images/Qebapa.jpg";



const products = [
    {
        id: "01",
        title: "Chicken Burger",
        price: 3.00,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: " Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo.  ",
    },

    {
        id: "02",
        title: "Vegetarian Pizza",
        price: 8.00,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "Pizza",

        desc: " Roasted red peppers, baby spinach, onions, mushrooms, tomatoes, and black olives. It's also topped with three kinds of cheese — feta, provolone, and mozzarella — and sprinkled with garlic herb seasoning",
    },

    {
        id: "03",
        title: "Double Cheese Margherita",
        price: 10.00,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "Pizza",

        desc: " The combined flavors of the sauce, soft dough and cheese, topped with some oregano are bound to put you in a happy mood.",
    },

    {
        id: "04",
        title: "Maxican Green Wave",
        price: 12.00,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "If onions, tomatoes, jalapeno, and capsicum are your favorite pizza toppings, you will surely fall in love with Mexican green wave pizza.",
    },

    {
        id: "05",
        title: "Cheese Burger",
        price: 3.40,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Salty, buttery, and slightly sharp, Comté cheese crisps similarly to Parmesan, adding an irresistibly crunchy frico layer to these cheeseburgers.",
    },

    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 3.50,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: " Sesame seed bun, chicken patty, sandwich sauce, tomato, cheese, bacon",
    },

    {
        id: "07",
        title: "Seafood Pizza",
        price: 15.00,
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
        price: 9.00,
        image01: product_03_image_02,
        image02: product_03_image_01,
        image03: product_03_image_03,
        category: "Pizza",

        desc: " This classic cheese pizza recipe makes a chewy crust, homemade tomato sauce, and three different types of cheese",
    },

    {
        id: "09",
        title: "Pizza With Mushroom",
        price: 10.00,
        image01: product_04_image_02,
        image02: product_04_image_01,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "This delicious mushroom pizza is smothered in sautéed mushrooms, onions and garlic, slivers of lacinato kale and layers of mozzarella and fresh-grated parmesan.",
    },

    {
        id: "10",
        title: "Classic Hamburger",
        price: 2.00,
        image01: product_05_image_02,
        image02: product_05_image_01,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Fresh 100% pure ground beef burger with lettuce, tomato, pickles and our Heavenly sauce. Served with our piping hot crinkle-cut French Fries.",
    },

    {
        id: "11",
        title: "Crunchy Bread ",
        price: 0.60,
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Sourdough Bread.The crunch of the outside gives way to a soft, chewy middle to create the perfect bite. For many people, a meal isn't complete unless bread is served with it. ",
    },

    {
        id: "12",
        title: "Delicious Bread ",
        price: 0.80,
        image01: product_06_image_02,
        image02: product_06_image_01,
        image03: product_06_image_03,
        category: "Bread",

        desc: " Soft, silky and still with certain degree of firmness",
    },

    {
        id: "13",
        title: "Loaf Bread ",
        price: 1.00,
        image01: product_06_image_03,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "A loaf of bread is bread which has been shaped and baked in one piece.",
    },
    {
        id: "14",
        title: "Tom Yum Soup ",
        price: 6.00,
        image01:product_07_image_01,
        image02: product_07_image_02,
        image03: product_07_image_03,
        category: "Asian Food",

        desc: "Tom Yum is a simple, but flavorful, soup made with fresh lemongrass, kaffir lime leaves, fish sauce, chiles, and protein… Usually shrimp.  ",
    },

    {
        id: "15",
        title: "Wonton Korean ",
        price: 5.50,
        image01:product_08_image_01,
        image02: product_08_image_02,
        image03: product_08_image_03,
        category: "Asian Food",

        desc: " These shallow-fried Korean wontons are juicy, crunchy pockets of cabbage, carrots, bean sprouts, and beef soaking in an Asian spice blend. ",
    },
    {
        id: "16",
        title: "Pulë General Tso ",
        price: 8.00,
        image01:product_09_image_01,
        image02: product_09_image_02,
        image03: product_09_image_03,
        category: "Asian Food",

        desc: " General Tso's Chicken is that perfect combination of sweet, savoury, spicy and tangy with crispy Chinese chicken bites. ",
    },

    {
        id: "17",
        title: "Udon Bulgogi Korean",
        price: 8.00,
        image01:product_10_image_01,
        image02: product_10_image_02,
        image03: product_10_image_03,
        category: "Asian Food",

        desc: " Bulgogi Udon, an easy, quick noodle dish of marinated thinly sliced meat with chewy udon noodles ",
    },
    {
        id: "18",
        title: "Tofu Takuan roll",
        price: 10.00,
        image01:product_11_image_01,
        image02: product_11_image_02,
        image03: product_11_image_03,
        category: "Asian Food",

        desc: " This sushi roll has rice and daikon wrapped in seaweed and sectioned into bite-sized pieces. ",
    },
    {
        id: "19",
        title: "Fli",
        price: 12.00,
        image01:product_12_image_01,
        image02: product_12_image_02,
        image03: product_12_image_03,
        category: "Albanian Food",

        desc: " \n" +
            "Fli is a must-try dish for anyone who loves savory and comforting flavors. " +
            "The layers of dough and yogurt sauce create a unique texture that's both crispy and creamy. ",
    },
    {
        id: "20",
        title: "Pite",
        price: 8.00,
        image01:product_13_image_01,
        image02: product_13_image_02,
        image03: product_13_image_03,
        category: "Albanian Food",

        desc: " \n" +
            "Made with layers of phyllo dough and a filling of meat, vegetables, or cheese, this dish is packed with flavor. " +
            "The crispiness of the phyllo dough contrasts perfectly with the softness of the filling," +
            " creating a wonderful texture that you'll love. ",
    },
    {
        id: "21",
        title: "Pasul",
        price: 5.00,
        image01:product_14_image_01,
        image02: product_14_image_02,
        image03: product_14_image_03,
        category: "Albanian Food",

        desc: " \n" +
            "If you're a fan of hearty stews and beans, Pasul is your go choice.It is typically made with white beans, meat (usually beef or pork), onions, garlic, and paprika." +
            " Some variations also include tomatoes, peppers, and other vegetables.",
    }, {
        id: "22",
        title: "Qebapa",
        price: 3.00,
        image01:product_15_image_01,
        image02: product_15_image_02,
        image03: product_15_image_03,
        category: "Albanian Food",

        desc: " \n" +
            "Qebapa consists of small grilled sausages made from a mixture of ground meat seasoned with spices such as paprika, salt, and pepper, and formed into small cylindrical shapes." +
            "The sausages are usually grilled until they are browned and crispy on the outside, but still juicy and tender on the inside. They are then served on a plate with a side of bread, " +
            "often a type of Albanian flatbread called lepinja, and topped with diced onions and the yogurt sauce.",
    },

];

export default products;