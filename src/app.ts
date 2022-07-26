import express from 'express';
const app = express();
const port = 3000;

export const add = (a: number, b: number) => {
  return a + b;
};