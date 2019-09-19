import {Request, Response} from 'express';
import User from '../schemas/User';

class UserController {
  public async index (req: Request, res: Response) {
    //const users = await User.find()

    return res.json({
        msg: 'Ok'
    });
  }

  // make method store
}

export default new UserController()