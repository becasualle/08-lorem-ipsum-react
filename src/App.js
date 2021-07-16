import React, { useState } from 'react';
import data from './data';
function App() {

  // create initial states for count of paras and text array
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    // value of count will be string so we have to convert it
    let amount = parseInt(count);
    // edge cases: if user would type negative value or value greater then number of items in array
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    // we use .slice that created copy of array in selected indexes range, not including last index
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem-ipsum?</h3>
      {/* when submit call function that updates text value */}
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        {/* on every change update count equal to input number and update input value with this count */}
        <input type="number" name="amount" id="amount" value={count} onChange={e => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {/* for each item in our text array render paragraph */}
        {text.map((para, paraIndex) => {
          return <p key={paraIndex}>{para}</p>
        })}
      </article>
    </section>
  )
}

export default App;
