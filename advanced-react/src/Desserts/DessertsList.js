import "./DessertsList.css";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function DessertsList() {
  const lowCalDessert = desserts
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    });
  return (
    <div>
      <h1>List of low calories desserts:</h1>
      <ul>
        {lowCalDessert.map((dessert, index) => (
          <li
            key={dessert.name}
          >{`${dessert.name} - ${dessert.calories} cal`}</li>
        ))}
      </ul>
    </div>
  );
}

export default DessertsList;
