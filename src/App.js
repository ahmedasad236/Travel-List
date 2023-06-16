import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackagingList from './components/PackagingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Fruits', quantity: 1, packed: false }
];

function App() {
  const [items, setItems] = useState(initialItems);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((items) => items.filter((currItem) => currItem.id !== itemId));
  };

  const handleToggle = (itemId) => {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleResetItems = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items ?'
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackagingList
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggle}
        onResetItems={handleResetItems}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
