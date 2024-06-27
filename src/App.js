import Card from "./Card.js";
import data from "./data.js";

export default function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });

  console.log(cards);

  return <>{cards}</>;
}
