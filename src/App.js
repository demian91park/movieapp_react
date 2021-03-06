import PropTypes from "prop-types";



const foodILike = [
  {
    id:1,
    name: "Kimchi",
    Image:
      "https://i.ytimg.com/vi/9xpCyQe6f9w/maxresdefault.jpg",
      rating:5
      
  },
  {
    id:2,
    name:"soju",
    Image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qYU93-vIfiMrgAwipogTf3dK-9CO2uM4jg&usqp=CAU",
    rating: 4.5
  },
    {
      id:3,
      name:"beer",
      Image:
      "http://t1.daumcdn.net/liveboard/dailylife/86889ae0a57a4eacb17843ddfa072858.JPG",
      rating: 4

    },

    {
      id:4,
      name:"soup",
      Image:
      "https://www.kenwoodworld.com/Global/Countries/Korea/recipe/201704/internal/%EA%B0%95%EB%82%AD%EC%BD%A9%20%ED%8A%B8%EB%9F%AC%ED%94%8C%20%EC%98%A4%EC%9D%BC%20%EC%88%98%ED%94%84%20-%20main.jpg",
      rating: 5.5
    },

    {
      id:5,
      name:"bibimbab",
      Image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
      rating: 6
    }

];


function Food({ name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h3>rating {rating}/10.0</h3>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (

  <div>

  {foodILike.map(dish => (
  <Food key = {dish.id} Food name = {dish.name + " 최고"} picture = {dish.Image} rating = {dish.rating} />)
  )}
  
  </div>
  );
}



export default App;
