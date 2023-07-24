import React, { useState } from "react";
import Card from "../Cards";
import "./Sales.css";


function Sales() {
  const initialFilters = {
    category: "",
    price: "all",
    metal: "all",
  };

  const cards = [
    {
      id: 1,
      image: "/Images/Ring.webp",
      name: "Jewellerina Knot",
      metal: "Yellow Gold",
      secondPrice: "Now $1500",
      price: " Was $1900",
      category: "Ring",
      description: "Double Row Hinged Ring",
      detailedDescription: `The entwined ends of Jewellerina Knots signature motif symbolize the power of connections between people. Balancing strength and elegance, each Jewellerina Knot design is a complex feat of craftsmanship. This bangle is crafted with yellow gold and polished by hand for high shine. Wear on its own or partnered with classic silhouettes for an unexpected pairing.`,
    },
    {
      id: 2,
      image: "/Images/Bangle2.webp",
      name: "Bangle",
      metal: "Yellow Gold",
      secondPrice: "Now $1900",
      price: "Was $2050",
      category: "Bracelet",
      description: "Jewellerina Lock",
      detailedDescription: `Inspired by the power of togetherness and inclusivity, Tiffany Lock is a bold and visual statement about the personal bonds that make us who we are. Designed to be worn by all genders, the Tiffany Lock bangle features an innovative clasp that echoes the functionality of a padlock, an important motif from The Tiffany Archives. This style is expertly crafted in 18k yellow and white gold.`,
    },
    {
      id: 3,
      image: "../../Images/Bangle1.webp",
      name: "Bangle",
      metal: "Yellow Gold",
      secondPrice: "Now $500",
      price: "Was $800",
      category: "Bracelet",
      description: "Jewellerina Lock",
      detailedDescription: `Inspired by the power of togetherness and inclusivity, Tiffany Lock is a bold and visual statement about the personal bonds that make us who we are. Designed to be worn by all genders, the Tiffany Lock bangle features an innovative clasp that echoes the functionality of a padlock, an important motif from The Tiffany Archives. This style is expertly crafted in 18k yellow gold.`,
    },
    {
      id: 4,
      image: "../../Images/Earrings1.webp",
      name: "Jewllerina T",
      metal: "Yellow Gold",
      secondPrice: "Now $700",
      price: "Was $1100",
      category: "Earrings",
      description: "T1 Hoop Earrings",
      detailedDescription: `Tiffany T1 designs reinvent our iconic Tiffany T collection with bold details and dimension. These 18k yellow gold hoop earrings are precisely crafted with a beveled edge to bring out the striking profile. Whether worn alone or with a mix of stud earrings for an unexpected look, they make a perfect finishing touch.`,
    },
    {
      id: 5,
      image: "../../../Images/Earrings2.webp",
      name: "Love Link",
      metal: "Yellow Gold",
      secondPrice: "Now $2000",
      price: "Was $2300",
      category: "Earrings",
      description: "Large Link Earrings",
      detailedDescription: `Tiffany HardWear is elegantly subversive and captures the spirit of the women of New York City. A bold chain of gauge links captures the urban edge of the city, making a stunning statement.`,
    },
    {
      id: 6,
      image: "../../../Images/Necklace1.webp",
      name: "Jewellerina's Hardware",
      metal: "Yellow Gold",
      secondPrice: "Now $3750",
      price: "Was $3950",
      category: "Necklace",
      description: "Medium Link Necklace",
      detailedDescription: `Tiffany HardWear is elegantly subversive and captures the spirit of the women of New York City. A bold chain of gauge links captures the urban edge of the city, making a stunning statement.`,
    },
  ];

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredCards = cards.filter((card) => {
    return (
      (filters.category === "" || card.category.includes(filters.category)) &&
      (filters.price === "all" ||
        (filters.price === "lowToHigh"
          ? parseInt(card.secondPrice.slice(1)) >= 0
          : filters.price === "highToLow"
          ? parseInt(card.secondPrice.slice(1)) >= 0
          : true)) &&
      (filters.metal === "all" || card.metal === filters.metal)
    );
  });

  const uniqueMetals = [...new Set(cards.map((card) => card.metal))];
  const priceOptions = [
    { value: "all", label: "All" },
    { value: "lowToHigh", label: "Low to High" },
    { value: "highToLow", label: "High to Low" },
  ];

  const uniqueCategories = [...new Set(cards.map((card) => card.category))];

  const comparePrices = (a, b) => {
    const priceA = parseInt(a.price.slice(1));
    const priceB = parseInt(b.price.slice(1));

    if (filters.price === "lowToHigh") {
      return priceA - priceB;
    } else if (filters.price === "highToLow") {
      return priceB - priceA;
    } else {
      return 0;
    }
  };

  filteredCards.sort(comparePrices);

  return (
  <div>
    <h2 className="sales-title">Sales </h2>
    <div className="shop-container">
      <div className="filter-container">
        <h3>Filter Options:</h3>
        {/* Category Filter */}
        <div>
          <label>Category:</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label>Price:</label>
          <select
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
          >
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Metal Filter */}
        <div>
          <label>Metal:</label>
          <select
            value={filters.metal}
            onChange={(e) => handleFilterChange("metal", e.target.value)}
          >
            <option value="all">All Metals</option>
            {uniqueMetals.map((metal) => (
              <option key={metal} value={metal}>
                {metal}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="card-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center", padding: "0 10%" }}>
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            metal={card.metal}
            secondPrice={card.secondPrice}
            price={card.price}
            category={card.category}
            description={card.description}
            detailedDescription={card.detailedDescription}

          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default Sales;

// function Sales() {
  // const cards = [
  //   {
  //     id: 1,
  //     image: "/Images/Bangle1.webp",
  //     name: "Product 1",
  //     metal: "Yellow Gold",
  //     secondPrice: "$1500",
  //     price: "$1900",
  //   },
  //   {
  //     id: 2,
  //     image: "/Images/Bangle2.webp",
  //     name: "Product 2",
  //     metal: "Yellow Gold",
  //     secondPrice: "$1900",
  //     price: "$2050",
  //   },
  //   {
  //     id: 3,
  //     image: "../../Images/Bangle3.webp",
  //     name: "Product 3",
  //     metal: "Yellow Gold",
  //     secondPrice: "$500",
  //     price: "$800",
  //   },
  //   {
  //     id: 4,
  //     image: "../../Images/Bangle3.webp",
  //     name: "Product 4",
  //     metal: "Yellow Gold",
  //     secondPrice: "$700",
  //     price: "$1100",
  //   },
  //   {
  //     id: 5,
  //     image: "../../../Images/Bangle3.webp",
  //     name: "Product 5",
  //     metal: "Yellow Gold",
  //     secondPrice: "$200",
  //     price: "$2300",
  //   },
  //   {
  //     id: 6,
  //     image: "../../../Images/Bangle3.webp",
  //     name: "Product 6",
  //     metal: "Yellow Gold",
  //     secondPrice: "$3750",
  //     price: "$3950",
  //   },
  // ];


// //   return (
// //     <div className="sales-container">
// //       <h1 class="sales-title">Clearance</h1>
// //       <div
// //         className="card-container"
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(3, 1fr)",
// //           justifyItems: "center",
// //           padding: "0 10%",
// //         }}
// //       >
// //         {cards.map((card) => (
// //           <Card
// //             key={card.id}
// //             image={card.image}
// //             name={card.name}
// //             metal={card.metal}
// //             secondPrice={card.secondPrice}
// //             price={card.price}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // export default Sales;