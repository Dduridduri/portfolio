import React, { useState, useEffect } from 'react';

// 게임 보드의 크기를 정합니다.
const COLS = 40;
const ROWS = 40;
const CELL_SIZE = 20; // 각 셀의 크기

const getRandomCoord = () => ({
  x: Math.floor(Math.random() * COLS),
  y: Math.floor(Math.random() * ROWS),
});

const DIRECTIONS = {
  37: { x: -1, y: 0 }, // left
  38: { x: 0, y: -1 }, // up
  39: { x: 1, y: 0 },  // right
  40: { x: 0, y: 1 },  // down
};

function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomCoord());
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      // 게임 오버 상태에서는 키 입력을 받지 않습니다.
      if (gameOver) return;

      if (DIRECTIONS[e.keyCode]) {
        const newDirection = DIRECTIONS[e.keyCode];
        const currentDirection = direction;
        if (-newDirection.x !== currentDirection.x || -newDirection.y !== currentDirection.y) {
          setDirection(newDirection);
        }
      }
    }
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction, gameOver]);

  useEffect(() => {
    if (gameOver) {
      // 게임 오버 상태면 게임 루프를 멈춥니다.
      return;
    }

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        let head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;
        
        // 벽에 부딪혔는지 확인
        if (head.x >= COLS || head.x < 0 || head.y >= ROWS || head.y < 0) {
          setGameOver(true); // 게임 오버를 true로 설정합니다.
          return prevSnake;
        }        
        // 자기 자신에게 부딪혔는지 확인
        for (const segment of newSnake.slice(1)) {
          if (head.x === segment.x && head.y === segment.y) {
            setGameOver(true); 
            return prevSnake;
          }
        }
        if (head.x === food.x && head.y === food.y) {
          setFood(getRandomCoord);
          newSnake.unshift(head);
        } else {
          newSnake.unshift(head);
          newSnake.pop();
        }
        return newSnake;
      });
    };

    const gameLoop = setInterval(moveSnake, 200);
    
    return () => clearInterval(gameLoop);
  }, [food, direction, gameOver]);
  const rotationAngle = (direction) => {
    if (direction.x === 1) return '-45deg';  
    if (direction.x === -1) return '45deg';  
    if (direction.y === 1) return '0deg';   
    if (direction.y === -1) return '90deg';  
  };

  return (
    <> 
      <div className="game-area translate-x-[50%] my-10" style={{
        width: COLS * CELL_SIZE,
        height: ROWS * CELL_SIZE,
        border: '1px solid black',
        position: 'relative',
      }}>
            {snake.map((cell, index) => (
              <div key={index} style={{
                position: 'absolute',
                left: cell.x * CELL_SIZE,
                top: cell.y * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE,
                backgroundColor: gameOver ? 'grey' : '#CDDC21',
                backgroundColor: index === 0 ? "transparent" : '#CDDC21',
                zIndex: index === 0 ? 2 : 1, 
                transform: index === 0 ? `rotate(${rotationAngle(direction)})` : undefined,         
              }}>
                {index === 0 && <img src={process.env.PUBLIC_URL + '/images/snakehead2.png'} alt="Snake Head" className='w-full h-full object-cover'   style={{transform: `rotate(${rotationAngle(direction)})`}} />} 
                
              </div>
            ))}
        <div style={{
          position: 'absolute',
          left: food.x * CELL_SIZE,
          top: food.y * CELL_SIZE,
          width: CELL_SIZE,
          height: CELL_SIZE,
          backgroundColor: 'red',
        }} />
      </div>
      {gameOver && (
        <div className="game-over my-10 translate-x-[50%]" style={{
          position: 'absolute',
          top: 0,          
          width: COLS * CELL_SIZE,
          height: ROWS * CELL_SIZE,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '2rem',
        }}>
          Game Over! Press F5 to restart.
        </div>
      )}
    </>
  );
}

export default SnakeGame;
