import React from "react";

function IntroSection() {
  return (
    <section>
      <h1 className="intro">TestReact in vite</h1>
      <h3 className="intro">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        ipsum iste maiores modi cum enim sit fugit. Aliquid dolorem consequatur
        nostrum animi eaque, minima aut atque, pariatur quod eligendi eos.
      </h3>
    </section>
  );
}

/*function IntroSection() {
    return React.createElement(
        'section', null, [
        React.createElement('h1', { className: "intro" }, 'SneakShop'),
        React.createElement('h3', { className: "intro" }, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum iste maiores modi cum enim sit fugit.')]
    )
}*/
export default IntroSection;
