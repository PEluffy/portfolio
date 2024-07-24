import React from "react";
import "./Hero.css";
export function Hero() {
  return (
    <>
      <div className="hero-container flex ">
        <div>
          <div className="text-large font-bold">Hello, it's Me</div>
          <div className="Title text-largerian  font-extrabold">
            Prashanna Kafle
          </div>
          <div className="text-larger flex font-bold">
            And I'm a &nbsp;
            {/* dividing these intoo two parts to highlightss i like oop */}
            <span className="text-primary">
              {" "}
              DEVEL
              <span className="bg-slate-600 text-white ">OP</span>
              ER
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
