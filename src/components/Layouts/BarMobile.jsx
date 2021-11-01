import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import pdf from "assets/nft-pizza.pdf";
function BarMobile() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className={`bar-mobile ${barMobile && "active"}`}>
        <ul>
          <li>
            <a
              href={pdf}
              target="_blank"
              onClick={() => setBarMobile(!barMobile)}
            >
              Menu
            </a>
          </li>
          <li>
            <a href="#home-desc" onClick={() => setBarMobile(!barMobile)}>
              Description
            </a>
          </li>
          <li>
            <a href="#home-faq" onClick={() => setBarMobile(!barMobile)}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BarMobile;
