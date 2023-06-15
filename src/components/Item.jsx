function Item({
  id,
  description,
  packed,
  quantity,
  onRemoveItem,
  onToggleItem
}) {
  const clickRemoveHandler = () => {
    onRemoveItem(id);
  };
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => onToggleItem(id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={clickRemoveHandler}>❌</button>
    </li>
  );
}

export default Item;
