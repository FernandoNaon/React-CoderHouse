import 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css';


export const Item = ({ item }) => {
  return (
      <div>
        <Card className="container">
            <Card.Img className="pic" variant="top" src={item.pictureUrl} />
            <Card.Body className="cardContainer">
                <Link to={"/item/" + item.id}>
                    <Card.Title>{item.title}</Card.Title>
                </Link>
                <Card.Text>{item.description}</Card.Text>
                <h3>${item.price}</h3>
            </Card.Body>
        </Card>
        </div>
    )
}
