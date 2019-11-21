import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardFilm = ({ title, source, year, runtime, plot, routes }) => (
  <Card>
    <CardImg top width="100%" src={source} alt={title} />
    <CardBody>
      <CardTitle className="font-weight-bold">{title}</CardTitle>
      <CardSubtitle className="font-weight-bold text-secondary">{`Year:${year} Runtime${runtime}`}</CardSubtitle>
      <CardText>{plot}</CardText>
      <Button className="btn-dark" href={`/films/:${routes}`}>Vedi i dettagli</Button>
    </CardBody>
  </Card>
)

export default CardFilm;
