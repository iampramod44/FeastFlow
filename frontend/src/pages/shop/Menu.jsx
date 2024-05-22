import React, { useEffect, useState } from "react";
import Cards from '../../components/Cards'
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    //fetching data from backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); //Initally display all items
        console.log(data);
      } catch (error) {
        console.log("error fetching");
      }
    };
    fetchData();
  }, []);

  //filter data based on category
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };
  //show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  };
  //Sorting items
  const handleSortChange = (option) => {
    setSortOption(option);
    //logic for sorting on selected option
    const sortItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortItems.sort((a, b) => a.name.localCompare(b.name));
        break;
      case "Z-A":
        sortItems.sort((a, b) => b.name.localCompare(a.name));
        break;
      case "low-high":
        sortItems.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }
    setFilteredItems(sortItems);
  };

  return (
    <div>
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>
      {/* Menu Shop Section */}
      <div className="section-container">
        {/* Filtering and Sorting */}
        <div>Filtering and Sorting</div>
        {/* Product Card */}
        <div>
          {
          filteredItems.map((item) => (
          <Cards key={item._id} item={item}/>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;
