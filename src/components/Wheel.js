import React, { useState } from "react";
import Roulette from "react-roulette-game";
import "./wheel.css";
import highlight_img from "../images/hightlight.png";
import pointer_img from "../images/pointer.png";
import roulette_img_under_highlight from "../images/rou_under_high.png";
import roulette_img_on_highlight from "../images/rou_on_high.png";

const Wheel = () => {
  const [prize, setPrize] = useState("");
  const [prizeImg, setPrizeImg] = useState("");
  const [showReward, setShowReward] = useState(false);

  const on_complete = (prize) => {
    setShowReward(true);
    switch (prize) {
      case "tv":
        setPrize("Samsung LED TV");
        setPrizeImg("tv.png");
        break;
      case "iPad":
        setPrize("Apple iPad");
        setPrizeImg("iPad.png");
        break;
      case "iPhone":
        setPrize("iPhone 14 Pro Max");
        setPrizeImg("iPhone.png");
        break;
      case "stay":
        setPrize("Staycation");
        setPrizeImg("stay.png");
        break;
      case "roi":
        setPrize(
          "0.5% Rate Of interest on your latest investment for next quarter"
        );
        setPrizeImg("roi.png");
        break;
      case "range":
        setPrize("Range Rover");
        setPrizeImg("range.png");
        break;
      default:
        break;
    }
  };

  const roulette_props = {
    roulette_img_under_highlight,
    roulette_img_on_highlight,
    highlight_img,
    pointer_img,
    prize_arr: ["iPad", "iPhone", "roi", "tv", "stay"],
    on_complete,
    has_reset: true,
    start_text: "SPIN"
  };

  return (
    <>
      <div className="game-box">
        <Roulette {...roulette_props} />
      </div>
      {showReward ? (
        <div>
          <div className="reward">
            <p>Congratulations you have won! {prize}</p>
            <img src={prizeImg} alt={prize} />
            <button
              className="btn-close"
              onClick={() => {
                setShowReward(false);
                const $ = (s) => document.querySelector(s);
                $(".reset-btn").click();
              }}
            >
              Reset
            </button>
          </div>
          <div className="mask" />
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default Wheel;
