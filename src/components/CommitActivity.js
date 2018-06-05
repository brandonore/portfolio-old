import React from 'react';
import Trend from 'react-trend';

let repos = [];
let data = [];

class CommitActivity extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [0,0,0]
        }
    }

    // componentDidMount() {
    //     this.fetchData();
    // }

    // fetchData() {
    //     // fetch('https://api.github.com/users/brandonore/repos')
    //     // .then((res) => res.json())
    //     // .then((result) => {
    //     //     for(let i = 0; i <= 1; i++) {
    //     //         repos.push(result[i].name);
    //     //     }
    //     //     console.log(repos);
    //     // })
    //     // .then(() => {
    //     //     for(let i = 0; i < repos.length; i++) {
    //     //         fetch(`https://api.github.com/repos/brandonore/${repos[i]}/stats/contributors`)
    //     //         .then((res) => res.json())
    //     //         .then((result) => {
    //     //             console.log(result);
    //     //         })
    //     //     }
    //     //     // console.log(data);
    //     // })
    //     // .catch(err => console.log(err));
    //     fetch('https://api.github.com/repos/brandonore/portfolio/stats/contributors')
    //     .then(res => res.json())
    //     .then((result) => result[0].weeks.map(week => (
    //             week.c
    //     )))
    //     .then((data) => {
    //         this.setState({ data: data });
    //         console.log(this.state.data);
    //     })
    //     .catch(err => console.log(err));
    // }
    
    render() {
        const { data } = this.state;
        return (
            <Trend
                smooth
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-out"
                data={[5,4,5,8,4,5,2]}
                gradient={['#fc00ff', '#00dbde']}
                radius={12.6}
                strokeWidth={2.3}
                strokeLinecap={'round'}
            />
        )
    }
}

export default CommitActivity;