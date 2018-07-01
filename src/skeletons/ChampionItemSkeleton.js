import React, {Component} from 'react';
import Skeleton from 'react-loading-skeleton';

class ChampionItemSkeleton extends Component {
    render() {
        return (
            <div style={{width: '100%', marginBottom:15, border:'1px solid gray'}}>
                <span style={{fontSize: 80, borderRight:'1px solid gray', padding:5}}>
                    <Skeleton width={30}/>
                </span>

                <span style={{fontSize: 80, borderRight:'1px solid gray', padding:5}}>
                    <Skeleton width={80}/>
                </span>

                <span style={{fontSize: 20, padding:5}}>
                    <Skeleton width={400} />
                </span>

                <span style={{fontSize: 20, padding:5}}>
                    <Skeleton width={400} />
                </span>
            </div>
        );
    }
}

export default ChampionItemSkeleton;