import React,{useState} from "react"
import Square from "./Square"

//conditions to play game and win are:
// 1.one player is x,and the other is O
//2.players takes turns placing their symbol(x or O)in an empty square
//3.the goal is to  get 3 of ur symbols in a row i.e.,horizontally,vertically and diagonally

const Board=()=>{
    const[state,setState]=useState(Array(9).fill(null));  
    const[isXTurn,setIsXTurn]=useState(true);

    const checkWinner=()=>{
        //this is the function to write winning conditions and check who is our winner
        const winnerLogic=[
            //rows condition
            [0,1,2],
            [3,4,5],
            [6,7,8],
            //columns condition
            [0,3,6],
            [1,4,7],
            [2,5,8],
            //diagonal condition
            [0,4,8], 
            [2,4,6],
        ]
        for(let logic of winnerLogic){
            const[a,b,c]=logic;//deconstruct this 
            if(state[a]!==null&&state[a]===state[b]&&state[a]===state[c]){
                return state[a];
            }
        }
        return null;
    }

    const isWinner=checkWinner();
    const isDraw = !isWinner && state.every(square => square !== null);
     
    
    const handleClick=(index)=>{
    if(state[index]!==null)return //coz okasaari x tho fill chesnaaka malla ah box click chesthe adhi o ga maaruthundhi so to fix that we using this condition
     const copyState  =[...state];//we are making the copy of the state array(above we took state as array of size 9),but why copy coz react state should never modified directlyy.
     copyState[index]=isXTurn?"X":"O"; //isXTurn true ayithe x aah pariticular box lo change ayyiddi i.e., copyState[index ]="x" ayyiddi ledhaa "O" avvuddi
     setState(copyState);
     setIsXTurn(!isXTurn);  //next isXTurn value ni true ayithe false chesthaam false ayithe true chesthaam
    }
    //this function will be helpful to either fill the square with x or o and index parameter endhuk theesukunnam ante eh square lo value maaralo theliyaali kadha so thats why we are using parameter index
    //so ippudu index annadhi 1 ayithe ,index 1 lo vunna square yokka  value maariddi alane annitiki
    //so kindhana onClick vaadinam kadha so ah particualr square meedha click chesthe ee function call avuthadhi accoring value change avuthadhi

    const handleReset=()=>{
        setState(Array(9).fill(null))
    }

    return(
    <div className="board-container">

        <h1 className="game-title">Tic-Tac-Toe Game</h1>

        {isWinner?(
            <>
            <h3>{isWinner} won the game {" "} </h3>
            <button onClick={handleReset}>Play Againn..</button>
            </>
        ):isDraw ? (
        <>
        <h3>No one has won the game! </h3>
        <button onClick={handleReset}>Play Again</button>
        </>
        ) : (
        <>
        <h4 className="player-turn-text">Player {isXTurn?'X':'O'} please move </h4>
        <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]} />
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className="board-row">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5) }value={state[5]}/>
        </div>
        <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
        </div>
        </>
    )}
    </div>
    )
}

export default Board;