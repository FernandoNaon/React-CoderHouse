import 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Item = ({ item }) => {
  return (
    <div style={{'width':'100%', 'textAlign':'center'}}>
        <Card className="container" style={{ width: '25rem', padding: '1rem', display: 'inline-block' }}>
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
