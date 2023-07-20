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
      image: "/Images/Bangle1.webp",
      name: "Product 1",
      metal: "Yellow Gold",
      secondPrice: "$1500",
      price: "$1900",
      category: "Ring"
    },
    {
      id: 2,
      image: "/Images/Bangle2.webp",
      name: "Product 2",
      metal: "Yellow Gold",
      secondPrice: "$1900",
      price: "$2050",
      category: "Bracelet"
    },
    {
      id: 3,
      image: "../../Images/Bangle3.webp",
      name: "Product 3",
      metal: "Yellow Gold",
      secondPrice: "$500",
      price: "$800",
      category: "Bracelet"
    },
    {
      id: 4,
      image: "../../Images/Bangle3.webp",
      name: "Product 4",
      metal: "Yellow Gold",
      secondPrice: "$700",
      price: "$1100",
      category: "Earrings"
    },
    {
      id: 5,
      image: "../../../Images/Bangle3.webp",
      name: "Product 5",
      metal: "Yellow Gold",
      secondPrice: "$2000",
      price: "$2300",
      category: "Earrings"
    },
    {
      id: 6,
      image: "../../../Images/Bangle3.webp",
      name: "Product 6",
      metal: "Yellow Gold",
      secondPrice: "$3750",
      price: "$3950",
      category: "Necklace"
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

          />
        ))}
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