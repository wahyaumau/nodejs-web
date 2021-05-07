import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { LogUtil } from "./util/LogUtil";
import { EXPRESS_CONFIG } from "./Config";

const main = async() => {
    const app = express();
    app.use(express.json());    
    app.use(cors());
    app.use((req: Request, res: Response, next: NextFunction) =>{
      LogUtil.logger.info(req.protocol + '://' + req.hostname + req.originalUrl);
      next();
    });    
    app.get('/', (req: Request, res: Response) => {
      res.json({"message": "on", "status": 200});      
    });
    app.get('/hello', (req: Request, res: Response) => {
      res.json({"message": "hello", "status": 200});      
    });
    app.get('/new', (req: Request, res: Response) => {
      res.json({"message": "new", "status": 200});      
    });
    app.get('/newer', (req: Request, res: Response) => {
      res.json({"message": "newer", "status": 200});      
    });
    app.get('/recent', (req: Request, res: Response) => {
      res.json({"message": "recent", "status": 200});      
    });
    app.get('/newest', (req: Request, res: Response) => {
      res.json({"message": "newest", "status": 200});      
    });
    app.get('/newest_route', (req: Request, res: Response) => {
      res.json({"message": "newest_route", "status": 200});      
    });
    app.get('/newww', (req: Request, res: Response) => {
      res.json({"message": "newww", "status": 200});      
    });
    app.get('/last_new', (req: Request, res: Response) => {
      res.json({"message": "last_new", "status": 200});      
    });
    
    app.use((req: Request, res: Response) => {
      res.status(404).json({"message": `route ${req.originalUrl} not found`, "status": 404});
    });
    app.listen(EXPRESS_CONFIG.port, () => {    
      LogUtil.logger.info(`Listening on ${EXPRESS_CONFIG.host}:${EXPRESS_CONFIG.port}`);
    });
  }
  
  main();