function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );
  }

  const itemsCount = items.length;
  const packedCount = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((packedCount / itemsCount) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `👜 You have ${itemsCount} item on your list, and you already packed ${packedCount} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
