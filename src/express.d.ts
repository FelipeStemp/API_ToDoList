import express from 'express';

// Defina a interface personalizada para o conteúdo do token
interface DecodedToken {
  userId: string;
  email: string;
  // Adicione outras propriedades conforme necessário
}

// Estenda a interface Request do Express
declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken; // Define que o req.user pode ser do tipo DecodedToken
    }
  }
}
