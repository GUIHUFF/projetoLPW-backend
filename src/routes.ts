import { Router, Request, Response, json } from 'express';
import 'dotenv/config';
import { deleteUser, getUser, getUserById, createUser, updateUser, authenticateUser } from './controller/UserController';
import auth from './auth';
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from './controller/CategoryController';

const router = Router();

//USER

router.post('/authenticate', async (req: Request, res: Response) => {
  try{
    const resposta = await authenticateUser(req, res);
    res.status(resposta.status).json(resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.get('/user', async (req: Request, res: Response) => {
  try{
    const resposta = await getUser(req, res);
    res.status(resposta.status).json( resposta.info);
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.get('/user/:id', async (req: Request, res: Response) => {
  try{
    const resposta = await getUserById(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.post('/user', auth, async (req: Request, res: Response) => {
  try{
    const resposta = await createUser(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.patch('/user/:id', auth, async (req: Request, res: Response) => {
  try{
    const resposta = await updateUser(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.delete('/user/:id', auth, async (req: Request, res: Response) => {
  try{
    const resposta = await deleteUser(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

//CATEGORY

router.get('/category', async (req: Request, res: Response) => {
  try{
    const resposta = await getCategory(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.get('/category/:id', async (req: Request, res: Response) => {
  try{
    const resposta = await getCategoryById(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.post('/category', auth, async (req: Request, res: Response) => {
  try{
    const resposta = await createCategory(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.patch('/category/:id', auth, async (req: Request, res: Response) => {
  try{
    const resposta = await updateCategory(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

router.delete('/category/:id', auth, async (req: Request, res: Response) => {
  try{
    const resposta = await deleteCategory(req, res);
    res.status(resposta.status).json( resposta.info );
  }catch(err){
      res.status(500).json({ erro: err });
  }
});

export { router };