import 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {

    return (
        <Card >
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Link to={"/item/" + item.id}>
                    <Card.Title>{item.title}</Card.Title>
                </Link>
                <Card.Text></Card.Text>
                <h3>${item.price}</h3>
            </Card.Body>
        </Card>
    )
}
