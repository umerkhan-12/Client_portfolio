import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const dir = join(process.cwd(), 'app/fonts');
  const [light, regular, hero] = await Promise.all([
    readFile(join(dir, 'Comfortaa-Light.woff')),
    readFile(join(dir, 'Comfortaa-Regular.woff')),
    readFile(join(process.cwd(), 'public', profile.heroImage)),
  ]);
  const heroSrc = `data:image/jpeg;base64,${hero.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', fontFamily: 'Comfortaa' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroSrc} alt="" width={1200} height={675} style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 675, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, display: 'flex', background: 'rgba(20,24,32,0.66)' }} />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '0 90px',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 400, letterSpacing: 2, opacity: 0.9 }}>{`${profile.name} · ${profile.title}`}</div>
          <div style={{ marginTop: 28, fontSize: 64, fontWeight: 300, lineHeight: 1.2 }}>{profile.headline}</div>
          <div style={{ marginTop: 34, width: 150, height: 12, background: '#285792' }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Comfortaa', data: light, style: 'normal', weight: 300 },
        { name: 'Comfortaa', data: regular, style: 'normal', weight: 400 },
      ],
    }
  );
}
