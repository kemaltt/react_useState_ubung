import { useState } from "react";

const Faq = () => {
  const [answer, setAnswer] = useState(true);

  return (
    <div>
      <h4>react state lev1_1-FAQ</h4>
      <div className="faq_container">
        <div className="faq">
          <div className="faq_question">
            <h3>Why is React great?</h3>
            <button onClick={() => setAnswer(!answer)}>
              {answer ? "+" : "-"}
            </button>
          </div>
          <div
            className="faq_answer"
            style={{ display: answer ? "none" : "block" }}
          >
            <p>Fast Learning Curve</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
