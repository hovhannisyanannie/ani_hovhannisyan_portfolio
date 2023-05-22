import React, { useState } from "react";
import { portfolio } from "../data/data";
import './portfolio.css'


const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]



const Portfolio = () => {

  const [data, setData] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  const [readMore, setReadMore]=useState(false);
  console.log(category)


  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setData(newItems)
    if (category === "all") {
      setData(portfolio)
      return
    }
  }
  return (
    <div id="portfolio">
        <div className='container'>
        <h2 className="heading">Portfolio</h2>
          <div className='buttons'>
            {category.map((category) => (
              <button className='btn' onClick={() => filterItems(category)}>
                {category}
              </button>
            ))}
          </div>
          <div className='inner'>
            {data.map((item) => (
              <div className='box'>
                  <img src={item.image} alt={item.title} />
                <div className='content'>
                  <h2>{item.title}</h2>
                  <p className="description">{item.technologies}</p>
                  <ul className="social">
                    <a href={item.code} target="_blank">Code</a>
                    <a href={item.demo} target="_blank">Website</a>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Portfolio 