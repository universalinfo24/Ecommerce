//import styles from "../styles/hero.module.css"
import Card from './Card.jsx';
import data from './data.js';
function Hero() {
  console.log(data)

  return (
    <>

      <div >
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>


    </>
  );
}

export default Hero;
