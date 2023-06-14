import { useState } from 'react';

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription('');
    setQuantity(1);
  };
  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 🥰 tirp ?</h3>
      <select
        defaultValue={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option
            value={i}
            key={i}
          >
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
