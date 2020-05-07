import React from 'react';
import { NewsList } from './newsList/NewsList';

export function App(props) {
    return (
        <div className="container" style={{marginLeft: 10}}>
            <NewsList />
        </div>
    );
}