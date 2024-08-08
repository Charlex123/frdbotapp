// types/next-connect.d.ts
declare module 'next-connect' {
    import { NextApiRequest, NextApiResponse } from 'next';
    import { IncomingMessage, ServerResponse } from 'http';
  
    interface Request extends NextApiRequest {
      file: Express.Multer.File;
    }
  
    interface NextConnect {
      use: (...middleware: any[]) => NextConnect;
      onError: (handler: (err: any, req: NextApiRequest, res: NextApiResponse, next: () => void) => void) => NextConnect;
      onNoMatch: (handler: (req: NextApiRequest, res: NextApiResponse) => void) => NextConnect;
      get: (handler: (req: NextApiRequest, res: NextApiResponse) => void) => NextConnect;
      post: (handler: (req: NextApiRequest, res: NextApiResponse) => void) => NextConnect;
      put: (handler: (req: NextApiRequest, res: NextApiResponse) => void) => NextConnect;
      delete: (handler: (req: NextApiRequest, res: NextApiResponse) => void) => NextConnect;
      patch: (handler: (req: NextApiRequest, res: NextApiResponse) => void) => NextConnect;
    }
  
    const nextConnect: () => NextConnect;
  
    export default nextConnect;
  }
  