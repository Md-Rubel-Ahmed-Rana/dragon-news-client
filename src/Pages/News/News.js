import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const {image_url, title, details, category_id} = news
    console.log(news);
    return (
        <div>
            <Card>
                <Image src={image_url}></Image>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                </Card.Body>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Go Back</Button>
                </Link>
            </Card>
        </div>
    );
};

export default News;