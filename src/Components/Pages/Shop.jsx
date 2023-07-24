import React, { useState } from "react";
import Card from "../Cards";
import "./Shop.css";

function Shop() {
  const initialFilters = {
    category: "",
    price: "all",
    metal: "all",
  };

  const cards = [
    {
      id: 1,
      image: "../../Images/Bangle3.webp",
      name: "Bangle",
      metal: "Yellow Gold",
      price: "$2100",
      category: "Bracelet",
      description: "Jewellerina Lock",
      detailedDescription: `Inspired by the power of togetherness and inclusivity, Tiffany Lock is a bold and visual statement about the personal bonds that make us who we are. Designed to be worn by all genders, the Tiffany Lock bangle features an innovative clasp that echoes the functionality of a padlock, an important motif from The Tiffany Archives. This style is expertly crafted in 18k yellow and white gold.`,
    },
    {
      id: 2,
      image: "../../Images/Bangle4.webp",
      name: "Bangle",
      metal: "Yellow Gold",
      price: "$3600",
      category: "Bracelet",
      description: "Jewellerina Lock",
      detailedDescription: `Inspired by the power of togetherness and inclusivity, Tiffany Lock is a bold and visual statement about the personal bonds that make us who we are. Designed to be worn by all genders, the Tiffany Lock bangle features an innovative clasp that echoes the functionality of a padlock, an important motif from The Tiffany Archives. This style is expertly crafted in 18k yellow and white gold.`,
    },
    {
      id: 3,
      image: "../../Images/Ring1.webp",
      name: "Knot Ring",
      metal: "Yellow Gold",
      price: "$3900",
      category: "Ring",
      description: "Jewellerina Knot",
      detailedDescription: `The entwined ends of Jewellerina Knot signature motif symbolize the power of connections between people. Balancing strength and elegance, each Tiffany Knot design is a complex feat of craftsmanship. This ring is crafted with yellow gold and pavé diamonds, then polished by hand for high shine. Each round brilliant diamond—specifically chosen to meet Tiffany’s high standards—is hand set at precise angles to maximize brilliance. Wear this ring on its own or partnered with classic silhouettes for an unexpected pairing.`,
    },
    {
      id: 4,
      image: "../../Images/Neck1.webp",
      name: "Jewellerina HardWare",
      metal: "Yellow Gold",
      price: "$3000",
      category: "Necklace",
      description: "Medium Link Necklace",
      detailedDescription: `Jewellerina HardWear is elegantly subversive and captures the spirit of the women of New York City. A bold chain of gauge links captures the urban edge of the city, making a stunning statement.`,
    },
    {
      id: 5,
      image: "../../../Images/Neck2.webp",
      name: "Jewellerina Victoria",
      metal: "Yellow Gold",
      price: "$1500",
      category: "Necklace",
      description: "Vine Drop Necklace",
      detailedDescription: `Inspired by the natural world, Jewellerina Victoria designs capture the fluid movement of flowers, vines and leaves with a mix of expertly cut diamonds. This striking drop necklace is crafted of 18k gold that features a contrast of high polish and sandblasted finishes. Round brilliant and marquise diamonds totaling over one carat play off the light and accentuate the vine motif. When too many diamonds are never enough, Tiffany Victoria is the ultimate way to shine. Wear on its own for a dramatic statement.`,
    },
    {
      id: 6,
      image: "../../../Images/Earrings3.webp",
      name: "Hoop Earrings",
      metal: "White Gold",
      price: "$2000",
      category: "Earrings",
      description: "Olive Leaf Hoop Earrings",
      detailedDescription: `With beautifully sculpted leaves, Paloma honors the olive branch, a symbol of peace and abundance.`,
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
          ? parseInt(card.price.slice(1)) >= 0
          : filters.price === "highToLow"
          ? parseInt(card.price.slice(1)) >= 0
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
    <h2 className="shop-title">Shop </h2>
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

      <div
        className="card-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          justifyItems: "center",
          padding: "0 10%",
        }}
      >
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            metal={card.metal}
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

export default Shop;
