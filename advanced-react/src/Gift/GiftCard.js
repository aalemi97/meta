import { useState } from "react";
import "./GiftCard.css";

function GiftCard() {
  const [gifts, setGifts] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    count: Math.floor(Math.random() * 10 + 1),
    valid: true,
    instructions: "To use your coupon, click the button below.",
    text() {
      if (this.count > 0) {
        return `Free dinner for ${this.count} guests`;
      } else {
        return "Your coupon has been used.";
      }
    },
  });

  function spendGifts() {
    if (gifts.count === 0) {
      return;
    } else if (gifts.count === 1) {
      setGifts((prevState) => {
        return {
          ...prevState,
          count: prevState.count - 1,
          instructions: "Please visit our restaurant to renew your gift card.",
          valid: false,
        };
      });
      return;
    } else {
      setGifts((prevState) => {
        return {
          ...prevState,
          count: prevState.count - 1,
        };
      });
      return;
    }
  }

  return (
    <div className="gift-card">
      <h1>Spend Your Gift Cards!</h1>
      <h2>
        Customer name: {gifts.firstName} {gifts.lastName}
      </h2>
      <h3>{gifts.text()}</h3>
      <p>{gifts.instructions}</p>
      <button onClick={spendGifts} disabled={!gifts.valid}>
        Spend Gift Card{" "}
      </button>
    </div>
  );
}

export default GiftCard;
