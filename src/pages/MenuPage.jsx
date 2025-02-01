import { useState } from "react";

export default function UpdateMenu() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Rice Plate",
      price: 100,
      category: "Lunch",
      available: true,
    },
    {
      id: 2,
      name: "Masala Dosa",
      price: 80,
      category: "Breakfast",
      available: true,
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      price: 150,
      category: "Dinner",
      available: true,
    },
    {
      id: 4,
      name: "Cold Coffee",
      price: 60,
      category: "Beverages",
      available: false,
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    category: "Lunch",
    available: true,
  });
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Add New Menu Item
  const addMenuItem = () => {
    if (!newItem.name || !newItem.price) return;
    const newEntry = {
      id: Date.now(),
      ...newItem,
      price: Number(newItem.price),
    };
    setMenu([...menu, newEntry]);
    setNewItem({ name: "", price: "", category: "Lunch", available: true });
  };

  // Remove Menu Item
  const removeMenuItem = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  // Update Availability
  const toggleAvailability = (id) => {
    setMenu(
      menu.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  // Filtered Menu List
  const filteredMenu = menu.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === "All" || item.category === filterCategory)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Update Menu</h1>

      {/* Search & Filter */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search menu..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>

      {/* Menu List */}
      <div className="bg-white shadow p-4 rounded-lg">
        {filteredMenu.length === 0 ? (
          <p className="text-gray-500">No menu items found.</p>
        ) : (
          filteredMenu.map((item) => (
            <div
              key={item.id}
              className={`flex justify-between items-center border-b py-2 ${
                !item.available ? "bg-red-100" : ""
              }`}
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <span className="font-semibold">₹{item.price}</span>
              <button
                className={`px-3 py-1 rounded text-sm ${
                  item.available
                    ? "bg-green-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
                onClick={() => toggleAvailability(item.id)}
              >
                {item.available ? "Available" : "Unavailable"}
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                onClick={() => removeMenuItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Add New Menu Item */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Add New Item</h2>
        <div className="grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="Item Name"
            className="border p-2 rounded"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <select
            className="border p-2 rounded"
            value={newItem.category}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
          </select>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={addMenuItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
