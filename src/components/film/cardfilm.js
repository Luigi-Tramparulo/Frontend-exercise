import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
