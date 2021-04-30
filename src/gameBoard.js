import React from 'react';
import PlayerBoard from './playerBoard';

function GameBoard({ players }) {
    if (players.length === 3) return threePlayers()
    if (players.length === 4) return fourPlayers()
    return <>
        <PlayerBoard classes="pb2a" name={players[0]} />
        <PlayerBoard classes="pb2b" name={players[1]} />
    </>
    function threePlayers() {
        return <>
            <PlayerBoard classes="pb3a" name={players[0]} />
            <PlayerBoard classes="pb3b" name={players[1]} />
            <PlayerBoard classes="pb3c" name={players[2]} />
        </>
    }
    function fourPlayers() {
        return <>
            <PlayerBoard classes="pb4a" name={players[0]} />
            <PlayerBoard classes="pb4b" name={players[1]} />
            <PlayerBoard classes="pb4c" name={players[2]} />
            <PlayerBoard classes="pb4d" name={players[3]} />
        </>
    }
}

export default GameBoard;
