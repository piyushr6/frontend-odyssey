import { useState } from "react";

export default function StockPage() {
  const [stock, setStock] = useState([
    { id: 1, item: "Rice", quantity: 50, unit: "kg", price: 40 },
    { id: 2, item: "Wheat", quantity: 40, unit: "kg", price: 35 },
    { id: 3, item: "Vegetables", quantity: 30, unit: "kg", price: 50 },
    { id: 4, item: "Milk", quantity: 20, unit: "liters", price: 60 },
  ]);
  const [newItem, setNewItem] = useState({
    item: "",
    quantity: "",
    unit: "",
    price: "",
  });
  const [search, setSearch] = useState("");

  // Update Stock Quantity & Price
  const updateStock = (id, field, value) => {
    setStock(
      stock.map((s) => (s.id === id ? { ...s, [field]: Number(value) } : s))
    );
  };

  // Add New Stock Item
  const addStockItem = () => {
    if (!newItem.item || !newItem.quantity || !newItem.unit || !newItem.price)
      return;
    const newEntry = {
      id: Date.now(),
      ...newItem,
      quantity: Number(newItem.quantity),
      price: Number(newItem.price),
    };
    setStock([...stock, newEntry]);
    setNewItem({ item: "", quantity: "", unit: "", price: "" });
  };

  // Remove Stock Item
  const removeStockItem = (id) => {
    setStock(stock.filter((item) => item.id !== id));
  };

  // Filtered Stock List
  const filteredStock = stock.filter((s) =>
    s.item.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate Total Stock Value
  const totalValue = stock.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Stock Monitoring</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search stock..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Stock List */}
      <div className="bg-white shadow p-4 rounded-lg">
        {filteredStock.length === 0 ? (
          <p className="text-gray-500">No items found.</p>
        ) : (
          <div>
            <div className="grid grid-cols-5 gap-4 items-center font-semibold text-lg border-b pb-2">
              <span>Item</span>
              <span>Quantity</span>
              <span>Price per Unit</span>
              <span>Total Value</span>
              <span>Action</span>
            </div>
            {filteredStock.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-5 gap-4 items-center py-2 ${item.quantity < 10 ? "bg-red-100" : ""
                  } border-b`}
              >
                <span>
                  {item.item} ({item.unit})
                </span>
                <input
                  type="number"
                  className="border rounded p-1 w-20 text-sm"
                  value={item.quantity}
                  onChange={(e) =>
                    updateStock(item.id, "quantity", e.target.value)
                  }
                />
                <input
                  type="number"
                  className="border rounded p-1 w-20 text-sm"
                  value={item.price}
                  onChange={(e) =>
                    updateStock(item.id, "price", e.target.value)
                  }
                />
                <span>₹{item.quantity * item.price}</span>
                <button
                  className="bg-red-500 text-white hover:cursor-pointer px-3 py-1 rounded text-sm"
                  onClick={() => removeStockItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Value */}
      <div className="text-right mt-4 text-lg font-semibold">
        Total Stock Value: ₹{totalValue}
      </div>

      {/* Add New Stock */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Add New Stock</h2>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            className="border p-2 rounded"
            value={newItem.item}
            onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Unit (kg/liters)"
            className="border p-2 rounded"
            value={newItem.unit}
            onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price per Unit"
            className="border p-2 rounded"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
        </div>
        <button
          className="mt-3 hover:cursor-pointer hover:opacity-90 bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={addStockItem}
        >
          Add Stock
        </button>
      </div>
    </div>
  );
}
