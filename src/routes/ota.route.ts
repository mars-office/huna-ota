import { Request, Response, Router } from "express";
import {readFile} from 'fs/promises';

const otaRouter = Router();

otaRouter.get("/api/ota/update", async (req: Request, res: Response) => {
  const file = await readFile('/firmware/firmware.bin');
  res.send(file);
});

otaRouter.get("/api/ota/version", async (req: Request, res: Response) => {
  const version = await readFile('/firmware/VERSION.txt');
  res.send(version);
});

export default otaRouter;