import React, {useState} from "react";
import Categories from "./Categories"
import Menu from "./Menu"
import data from "./data"

const allCategories = ["All",
  ...new Set(
  data.map((item) =>
  {return item.category;})
  ),           //รูปแบบเต็ม 
];
//แบบย่อ 
//const allCate

const App = () => {
  const [menuItems, setMenuItems] = useState(data)

  const filterItem =(category)=>{
    if(category === "All"){
      setMenuItems(data)
    }
    else{
      const newItem = data.filter(
        (item) => item.category === category
      )
      setMenuItems(newItem)
    }
  }
  return (
    <div>
  <h2>Workshop 2: food Menu</h2>
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories allCategories ={allCategories} filterItem={filterItem} />
        <Menu items = {menuItems}/>
    </section>
  </main>
    </div>
  );
};

export default App;