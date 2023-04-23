function Price({ price, del }) {
  return (
    <p style={{ marginLeft: "8px" }}>
      {del ? <del>{price} Р</del> : <b>{price} Р</b>}{" "}
    </p>
  );
}

export default Price;
