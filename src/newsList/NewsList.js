import React from 'react';
import { NewsTable } from './NewsTable';

export class NewsList extends React.Component {
    render() {
        return <NewsTable news={this.props.data} />;
    }
}