import {Card} from "react-bootstrap";
import Link from "next/link";

const CardItem = ({
    title,
    subtitle,
    link,
    image,
    date,
    author
}) => {
    const avatarImage = author ? `${author?.avatar}?w=50&h=50&crop=focalpoint&fit=crop` : 'https://via.placeholder.com/150';

    return (
        <Card className={`fj-card`}>
            <div className="card-body-wrapper">
                <Card.Header
                    className="d-flex flex-row">
                    <img
                        src={avatarImage}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt={author?.name} />
                    <div>
                        <Card.Title className="font-weight-bold mb-1">
                            {author?.name}
                        </Card.Title>
                        <Card.Text className="card-date">{date}</Card.Text>
                    </div>
                </Card.Header>
                <div className="view overlay">
                    <Card.Img
                        src={`${image}?w=477&h=268&crop=focalpoint&fit=crop`}
                        alt="Card image cap"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                </Card.Body>
            </div>
            {
                link && (
                    <Link href={link} passHref>
                        <a className="card-button">
                            Read More
                        </a>
                    </Link>
                )
            }
        </Card>
    );
}


export default CardItem;
