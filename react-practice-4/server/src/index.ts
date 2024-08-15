import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 20,
      text: "Soft boiled eggs serve with multigrain bread sticks ",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Freshly made noodles with light and clear chicken broth topped with vegetables , soft boiled eggs and meat",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Fresh and juicy chicken with smoky and charred flavour served with mint chutney",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Moist and light vanilla cake with a sweet strawberry butter cream  and fresh strawberries",
      image: "/images/cake.png",
      type: "dessert",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Soft and warm pancakes topped with different berries and maple syrup or honey as dressing",
      image: "/images/pancake.png",
      type: "breakfast",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
