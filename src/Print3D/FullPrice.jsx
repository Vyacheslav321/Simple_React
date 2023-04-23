function FullPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && price >= oldPrice;
  return (
    <p>
      {showOldPrice && <del style={{ marginLeft: "8px" }}>{oldPrice} Р </del>}
      <b style={{ marginLeft: "8px" }}>{price} Р</b>
    </p>
  );
}

export default FullPrice;
