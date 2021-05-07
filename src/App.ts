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
    app.get('', (req: Request, res: Response) => {
      res.json({"message": "on", "status": 200});      
    });
    app.get('/hello', (req: Request, res: Response) => {
      res.json({"message": "hello", "status": 200});      
    });
    app.listen(EXPRESS_CONFIG.port, () => {    
      LogUtil.logger.info(`Listening on ${EXPRESS_CONFIG.host}:${EXPRESS_CONFIG.port}`);
    });
  }
  
  main();