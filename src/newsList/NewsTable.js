import React from 'react';

export class NewsTable extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.news.map(letter => 
                    <NewsCard key={letter.id} author={letter.author} title={letter.title} description={letter.description}
                        url={letter.url} image={letter.urlToImage} date={letter.publishedAt}  />
                )}
            </div>
        );
    }
}

class NewsCard extends React.Component {
    render() {
        const date = new Date(this.props.date);

        return (
            <div className="col s12 m5">
                <div className="card small">
                    <div className="card-image">
                        <img src={this.props.image} alt={this.props.title} />
                        <span className="card-title">{this.props.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="card-action">
                        <div className="left">
                            <a href={this.props.url}>Open</a>
                        </div>
                        <div className="right">
                            <span style={{ marginRight: 5 }}>{formatDate(date)}</span>
                            <span style={{ marginRight: 5, color: 'red' }}>|</span>
                            <span>{this.props.author}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function formatDate(date) {
    const dtf = new Intl.DateTimeFormat('en', 
        { year: 'numeric', month: '2-digit', day: '2-digit', minute: '2-digit', hour: '2-digit' });
    const [{ value: month },, { value: day },, { value: year },, { value: hour },, { value: minute }] = dtf.formatToParts(date);
    return `${day}.${month}.${year} ${hour}:${minute}`;
}