import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

// const cardFilm = (title, source) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src={source} alt="Card image cap" />
//         <CardBody>
//           <CardTitle>{title}</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default cardFilm

const CardFilm = ({ title, source, year, runtime, plot, link }) => (
  <Card>
    <CardImg top width="100%" src={source} alt={title} />
    <CardBody>
      <CardTitle className="font-weight-bold">{title}</CardTitle>
      <CardSubtitle className="font-weight-bold text-secondary">{`Year:${year} Runtime${runtime}`}</CardSubtitle>
      <CardText>{plot}</CardText>
      <Button className="btn-dark" href={`https://www.imdb.com/title/${link}/`}>Vedi i dettagli</Button>
    </CardBody>
  </Card>
)

export default CardFilm;
