'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Slider, Typography, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@mui/material';
import Tower from './Tower';
import RecursionTree from './RecursionTree';

interface Move {
  from: number;
  to: number;
}

const HanoiSimulator: React.FC = () => {
  const [numberOfDisks, setNumberOfDisks] = useState(3);
  const [towers, setTowers] = useState<number[][]>([
    Array.from(Array(numberOfDisks).keys()).map(x => x + 1).reverse(),
    [],
    []
  ]);
  const [moves, setMoves] = useState<Move[]>([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openTree, setOpenTree] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isSimulationReady, setIsSimulationReady] = useState(false);

  const hanoi = (n: number, from: number, to: number, aux: number, moves: Move[]) => {
    if (n === 1) {
      moves.push({ from, to });
      return;
    }
    hanoi(n - 1, from, aux, to, moves);
    moves.push({ from, to });
    hanoi(n - 1, aux, to, from, moves);
  };

  const prepareSimulation = () => {
    const newMoves: Move[] = [];
    hanoi(numberOfDisks, 0, 2, 1, newMoves);
    setMoves(newMoves);
    setMoveIndex(0);
    setTowers([
      Array.from(Array(numberOfDisks).keys()).map(x => x + 1).reverse(),
      [],
      []
    ]);
    setIsSimulationReady(true); // Set simulation ready flag
  };

  const startSimulation = () => {
    if (isSimulationReady) {
      animateMoves(moves, 1000, 0);
    }
  };

  const animateMoves = (moves: Move[], delay: number, startIndex: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let index = startIndex;
    intervalRef.current = setInterval(() => {
      if (!isPaused && index < moves.length) {
        const { from, to } = moves[index];
        setTowers(prevTowers => {
          const newTowers = prevTowers.map(t => [...t]);
          const disk = newTowers[from].pop();
          if (disk !== undefined) {
            newTowers[to].push(disk);
          }
          return newTowers;
        });
        setMoveIndex(index + 1);
        index++;
      } else if (index >= moves.length) {
        clearInterval(intervalRef.current!);
      }
    }, delay);
  };

  const handleRestart = () => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear any running intervals
    setIsPaused(false);
    setIsSimulationReady(false); // Mark simulation as not ready
    prepareSimulation(); // Prepare simulation without starting it
  };

  useEffect(() => {
    prepareSimulation();
  }, [numberOfDisks]);

  return (
    <Box>
      <Typography gutterBottom>Escolha o número de discos:</Typography>
      <Slider
        value={numberOfDisks}
        onChange={(e, newValue) => setNumberOfDisks(newValue as number)}
        step={1}
        marks
        min={1}
        max={8}
        valueLabelDisplay="auto"
      />
      <Button variant="contained" color="primary" onClick={startSimulation}>
        Iniciar Simulação
      </Button>
      <Button variant="contained" color="error" onClick={handleRestart}>
        Reiniciar
      </Button>
      <Button variant="contained" color="info" onClick={() => setOpenHistory(true)}>
        Mostrar Histórico
      </Button>
      <Button variant="contained" color="warning" onClick={() => setOpenTree(true)}>
        Visualizar Árvore de Recursão
      </Button>
      <Typography variant="h6" align="center" gutterBottom>
        Passo {moveIndex} de {moves.length}
      </Typography>
      <Grid container spacing={2} justifyContent="center" marginTop={4}>
        {towers.map((tower, index) => (
          <Grid item key={index}>
            <Tower disks={tower} />
          </Grid>
        ))}
      </Grid>

      <Dialog open={openHistory} onClose={() => setOpenHistory(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Histórico de Movimentos</DialogTitle>
        <DialogContent>
          <List>
            {moves.map((move, index) => (
              <ListItem key={index}>
                <ListItemText primary={`Movimento ${index + 1}: De ${move.from + 1} para ${move.to + 1}`} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <Button onClick={() => setOpenHistory(false)} color="primary">
          Fechar
        </Button>
      </Dialog>

      <Dialog open={openTree} onClose={() => setOpenTree(false)} maxWidth="md" fullWidth>
        <DialogTitle>Árvore de Recursão</DialogTitle>
        <DialogContent>
          <RecursionTree numberOfDisks={numberOfDisks} />
        </DialogContent>
        <Button onClick={() => setOpenTree(false)} color="primary">
          Fechar
        </Button>
      </Dialog>
    </Box>
  );
};

export default HanoiSimulator;
