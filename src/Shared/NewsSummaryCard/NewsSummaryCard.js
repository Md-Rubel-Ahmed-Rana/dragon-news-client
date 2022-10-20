import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    return (
        <div>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-2'>
                        <div>
                            <Image
                                roundedCircle
                                src={author.img}
                                style={{ height: "60px" }}
                            >
                            </Image>
                        </div>
                        <div>
                            <h5 className='mb-0'>{author.name}</h5>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <Card.Text>
                        {
                        details.length > 200 ?
                        <p>{details.slice(0, 200) + "..."} <Link to={`/news/${_id}`}>Read More</Link> </p>
                                : <p>{details}</p>
                    }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div className='d-flex gap-2 align-items-center'>
                        <FaStar />
                        <span>{rating?.number}</span>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;