import { describe, expect, it, vi } from 'vitest';

import handler from './health.js';

describe('/api/health', () => {
  it('returns status payload for Vercel companion', () => {
    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const setHeader = vi.fn();

    handler({}, { status, json, setHeader });

    expect(setHeader).toHaveBeenCalledWith('Cache-Control', 'no-store');
    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        ok: true,
        service: 'nanoclaw-web-companion',
        runtime: 'vercel-serverless',
        supportsAgents: false,
      }),
    );
  });
});
