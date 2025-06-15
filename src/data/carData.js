import corollaImage from "../assets/corolla.jpg";
import civicImage from "../assets/civic.jpg";
import teslaImage from "../assets/TeslaModelS.jpg";
import porscheImage from "../assets/PorscheTaycan.jpg";
import bmwImage from "../assets/BMWi8.jpg";
import audiImage from "../assets/AudiRS7.jpg";
import mercedesImage from "../assets/Mercedes-BenzEQS.jpg";
import lamborghiniImage from "../assets/LamborghiniHuracan.jpg";
import lucidImage from "../assets/LucidAir.jpg";
import rangeRoverImage from "../assets/RangeRoverSport.jpg";
import Corolla_side from "../assets/Corolla_side.jpg";
import Corolla_interior from "../assets/Corolla_interior.jpg";
import Corolla_front from "../assets/ Corrola_front.jpg";


const carData = [
  {
    id: 1,
    name: "Corolla",
    description: "A reliable and fuel-efficient sedan with modern features.",
    descriptionDetails:
      "The Toyota Corolla is a top choice for families and commuters alike. It offers a smooth ride, excellent fuel efficiency, and advanced safety features like lane-keeping assist and adaptive cruise control.",
    price: "$23,500",
    fuelType: "Gasoline",
    transmission: "CVT",
    mileage: "35 MPG",
    year: "2023",
    condition: "New",
    image: corollaImage,
    images: [
      Corolla_front,                // main
      Corolla_side,        // import this
      Corolla_interior        // import this
    ]
  },
  {
    id: 2,
    name: "Civic",
    description: "A sporty and refined sedan with great performance.",
    descriptionDetails:
      "The Honda Civic combines sporty looks with impressive handling and efficiency. It's perfect for drivers who want a reliable and fun daily vehicle with great resale value.",
    price: "$24,650",
    fuelType: "Gasoline",
    transmission: "CVT",
    mileage: "36 MPG",
    year: "2023",
    condition: "New",
    image: civicImage,
  },
  {
    id: 3,
    name: "Tesla Model S",
    description: "A premium electric sedan with long range and autopilot.",
    descriptionDetails:
      "The Tesla Model S offers cutting-edge electric performance with an incredible range and unmatched acceleration. Autopilot, a luxurious interior, and zero emissions make it a future-ready ride.",
    price: "$89,990",
    fuelType: "Electric",
    transmission: "Automatic",
    mileage: "396 mi range",
    year: "2024",
    condition: "New",
    image: teslaImage,
  },
  {
    id: 4,
    name: "Porsche Taycan",
    description: "A luxury electric car with top-notch performance.",
    descriptionDetails:
      "The Porsche Taycan redefines electric driving with high performance and sleek German engineering. With rapid acceleration and a sporty feel, it's the ideal electric vehicle for enthusiasts.",
    price: "$92,500",
    fuelType: "Electric",
    transmission: "2-Speed Automatic",
    mileage: "246 mi range",
    year: "2023",
    condition: "New",
    image: porscheImage,
  },
  {
    id: 5,
    name: "BMW i8",
    description: "A hybrid sports car combining performance and efficiency.",
    descriptionDetails:
      "The BMW i8 delivers thrilling performance with a hybrid powertrain wrapped in a futuristic design. Its lightweight carbon-fiber body and dynamic styling turn heads wherever it goes.",
    price: "$147,500",
    fuelType: "Hybrid",
    transmission: "Automatic",
    mileage: "69 MPGe",
    year: "2020",
    condition: "Used",
    image: bmwImage,
  },
  {
    id: 6,
    name: "Audi RS7",
    description: "A luxury sedan with power and elegance.",
    descriptionDetails:
      "The Audi RS7 blends aggressive performance with refined luxury. A twin-turbo V8, quattro all-wheel drive, and a plush interior make this sedan both a powerhouse and a comfort cruiser.",
    price: "$123,000",
    fuelType: "Gasoline",
    transmission: "Automatic",
    mileage: "22 MPG",
    year: "2024",
    condition: "New",
    image: audiImage,
  },
  {
    id: 7,
    name: "Mercedes-Benz EQS",
    description: "A high-end electric car with sleek design.",
    descriptionDetails:
      "The Mercedes-Benz EQS sets new standards for electric luxury. With its minimalist design, MBUX Hyperscreen, and whisper-quiet cabin, it's a premium experience for the modern electric driver.",
    price: "$104,400",
    fuelType: "Electric",
    transmission: "Automatic",
    mileage: "350 mi range",
    year: "2024",
    condition: "New",
    image: mercedesImage,
  },
  {
    id: 8,
    name: "Lamborghini Huracán",
    description: "A powerful supercar with eye-catching design.",
    descriptionDetails:
      "The Lamborghini Huracán is the embodiment of supercar performance and style. With a roaring V10 engine, bold lines, and aerodynamic precision, it's engineered to thrill on every road.",
    price: "$261,274",
    fuelType: "Gasoline",
    transmission: "7-Speed Dual-Clutch",
    mileage: "15 MPG",
    year: "2023",
    condition: "New",
    image: lamborghiniImage,
  },
  {
    id: 9,
    name: "Lucid Air",
    description: "A luxury electric sedan with high performance and range.",
    descriptionDetails:
      "The Lucid Air blends luxury and cutting-edge EV technology. With over 400 miles of range, a spacious interior, and innovative features, it's built to challenge the EV elite.",
    price: "$87,400",
    fuelType: "Electric",
    transmission: "Automatic",
    mileage: "410 mi range",
    year: "2024",
    condition: "New",
    image: lucidImage,
  },
  {
    id: 10,
    name: "Range Rover Sport",
    description: "A powerful and comfortable SUV for every terrain.",
    descriptionDetails:
      "The Range Rover Sport offers rugged capability with first-class comfort. It's the perfect SUV for those who want to explore with luxury, whether on highways or off-road trails.",
    price: "$83,000",
    fuelType: "Mild Hybrid",
    transmission: "Automatic",
    mileage: "23 MPG",
    year: "2024",
    condition: "New",
    image: rangeRoverImage,
  },
];

export default carData;
