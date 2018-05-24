import React from 'react';
import Trend from 'react-trend';

class CommitActivity extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [0,0]
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://api.github.com/repos/brandonore/portfolio/stats/contributors')
        .then(res => res.json())
        .then((result) => result[0].weeks.map(week => (
                week.c
        )))
        .then((data) => {
            this.setState({ data: data });
            console.log(this.state.data);
        })
        .catch(err => console.log(err));
    }
    
    render() {
        const { data } = this.state;
        return (
            <Trend
                smooth
                autoDraw
                autoDrawDuration={2000}
                autoDrawEasing="ease-out"
                data={data}
                gradient={['#8a2387', '#e94057', '#f27121']}
                radius={12.6}
                strokeWidth={2.3}
                strokeLinecap={'round'}
            />
        )
    }
}

export default CommitActivity;