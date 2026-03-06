type Req = {
  method?: string;
};

type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default function handler(_req: Req, res: Res): void {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    ok: true,
    service: 'nanoclaw',
    runtime: 'vercel-serverless',
    timestamp: new Date().toISOString(),
  });
}
