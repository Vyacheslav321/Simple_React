import Title from "./Title";
import Article from "./Article";
import Gallery from "./Gallery";
import FullPrice from "./FullPrice";
import Counter from "./Counter";
import Popularity from "./Popularity";
import Description from "./Description";
import UserComments from "./UserComments";
import product from "./product";

export default function Print3D() {
  return (
    <section
      style={{
        margin: "auto",
        padding: "10px",
        maxWidth: "450px",
        border: "1px solid red",
      }}
    >
      <Title>{product.name}</Title>
      <Article>{product.code}</Article>
      <div
        style={{
          margin: "auto",
          width: "500px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Gallery src={product.src} alt={product.name}></Gallery>
        <div
          style={{
            minWidth: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {"Цена:  "}
            <FullPrice price={product.price} oldPrice={product.oldPrice} />
          </p>
          <div>
            Количество: <Counter>{product.count}</Counter>
          </div>
          <p>Доставка {product.delivery}</p>
          <button style={{ minWidth: "120px" }} type="button">
            Купить
          </button>
          <Popularity count={product.comments.length} />
        </div>
      </div>
      <Description>{product.description}</Description>
      <h3>Комментарии</h3>
      <UserComments comments={product.comments} />
    </section>
  );
}
