import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// hello: the door opens on a bird with an apology, not a business plan.
// thinking_revised: laugh at the pigeon, then nod at the blocked sender paying twelve dollars.
const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// batch: one tiny flock of words per run, dropped into a single entry file.
mkdirSync(outDir, { recursive: true });

// orders: each order is one apology sentence at twelve dollars, bird included.
const text = `We rent apology pigeons to people who've been blocked: $12 gets one bird, your single sentence, and a photo on arrival, because email is where apologies go to die.`;

const target = join(outDir, 'entry.txt');
writeFileSync(target, text, 'utf8');

// bar: proof-of-arrival photo clears the trust bar for a very strange service.
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
