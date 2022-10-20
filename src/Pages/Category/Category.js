import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categotyNews = useLoaderData();
    return (
        <div>
            <h2>This category has news: {categotyNews.length}</h2>
            {
                categotyNews.map((news) => <NewsSummaryCard news={news}  />)
            }
        </div>
    );
};

export default Category;