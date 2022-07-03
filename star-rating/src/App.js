import React, { useState } from "react"
import { FaStar } from "react-icons/fa"


export default function App() {
  return <StarRating totalStars={5} /> 
}

function StarRating({ totalStars = 5, style = {} }) {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <div style={style}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

function Star({ selected = false, onSelect = () => {} }) {
  return (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  )
}

function createArray(length) {
  return [...Array(length)]
}
