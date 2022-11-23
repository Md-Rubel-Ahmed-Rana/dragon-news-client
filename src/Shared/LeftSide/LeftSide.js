import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch("https://dragon-news-server-eight.vercel.app/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }, [])

    return (
        <div>
            <h3>All Categories</h3>
            <div>
                {
                    categories.map((category) => <div key={category.id}> <Link to={`/category/${category.id}`}>{category.name}</Link> </div>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSide;