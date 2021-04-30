import React from 'react';

function PlayerBoard({classes, name}) {    
    return <div className={"playerBoard "+classes}>
        <div className="storeitems">
            <div className="mancala">
            </div>
            <div className="pots">
                <Pot />
                <Pot />
                <Pot />
                <Pot />
                <Pot />
                <Pot />
            </div>
        </div>
        <div className="storename">{name}</div>
    </div>;
}

function Pot() {
    return <div className="pot"></div>
}

export default PlayerBoard;
