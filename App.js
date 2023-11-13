import { useState } from 'react';
import { contestEntries } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < contestEntries.length - 1;

  function handleNextClick() {
    if (hasNext) { 
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let entry = contestEntries[index];

  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{entry.title} </i>
        by {entry.gposer}
      </h2>
      <h3>
        ({index + 1} of {contestEntries.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{entry.month} {entry.year}</p>}
      {showMore && <p>Theme: {entry.theme}</p>}
      {showMore && <p>Category: {entry.category}</p>}
      <img
        src={entry.img}
        width="960"
        height="540"
      />
    </>
  );
}
