import { InsertEmoticon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, webPortfolio, mobilePorfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([])
  useEffect(() => {
    
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePorfolio);
        break;
      default: setData(featuredPortfolio);
    }

  }, [selected])


  const list = [
    {
      id: 'featured', 
      title: 'Featured'
    }, 
    {
      id: 'web',
      title: 'Web Apps'
    }, 
    {
      id: 'mobile', 
      title: 'Mobile Apps'
    }
  ]
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((i) => (
          <PortfolioList
            title={i.title}
            link={i.link}
            active={selected === i.id}
            setSelected={setSelected}
            id={i.id}
          />
        ))}
      </ul>
      
      <div className="container">
        {data.map((i) => (
          <div className="item">
            <img src={i.img} alt="" />
            <h3><a href={i.link}>{ i.title}</a></h3>
          </div>
        ))}
      </div>
    </div>
  );
}
