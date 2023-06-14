import Item from './Item';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Fruits', quantity: 1, packed: true }
];

function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackagingList;
