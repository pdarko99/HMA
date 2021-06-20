import express from 'express';
import jwt from 'jsonwebtoken'


export class Authorization {
    secret = 'foefjeo'
    constructor(){this.ifToken = this.ifToken.bind(this)}


    ifToken(req: express.Request, res: express.Response, next: any): any{
        if(!req.header('Authorization'))
            return res.status(200).json({ "message": 'done'})

        

        let token = req.header('Authorization')!.split(' ')[1];
        jwt.verify(token, this.secret, ((err, decoded: any) => {
            if(decoded)
            {
                req.query.id = decoded.id
            }



        }))
        
        next()
    }
}
