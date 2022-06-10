import { useState } from "react";

const Faq2 = () => {
  const [answer, setAnswer] = useState(true);
  const [answer2, setAnswer2] = useState(true);

  return (
    <div>
      <h4>react state lev1_2-FAQ2</h4>
      <div className="faq_container2">
        <div className="faq2">
          <div>
            <h3>Why is React great?</h3>
            <button onClick={() => setAnswer(!answer)}>+</button>
          </div>
          <div className="">
            <div>
              <p style={{ display: answer ? "none" : "block" }}>
                Fast Learning Curve
              </p>
              <button
                style={{ display: answer ? "none" : "block" }}
                onClick={() => setAnswer2(!answer2)}
              >
                +
              </button>
            </div>

            <p style={{ display: answer2 ? "none" : "block" }}>
              React is very a simple and lightweight library that only deals
              with the view layer. It is not a beast like other MV* frameworks
              such as Angular or Ember. Any Javascript developer can understand
              the basics and start developing an awesome web application after
              only a couple of days reading tutorial. As the React guide says
              ‘Thinking in React’ may be a little different than you used to
              since it brings a new approach to the table, but it will become
              much easier and natural as you gain experience with it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
