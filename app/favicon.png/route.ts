import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const buffer = await readFile(join(process.cwd(), 'public', 'logo.png'))
    return new Response(buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return new Response(null, { status: 404 })
  }
}
