
// bun run index.mts > generated.mts && bun run generated.mts 'postgresql://...'

console.log(`
import { neon } from '@neondatabase/serverless';

const dburl = process.argv[2];

function expectType(obj: any, type: string, id?: any) {
  if (type === 'array') { if (!Array.isArray(obj)) throw \`\${id}: Expected an array, got \${obj}\`; }
  else if (type === 'defined') { if (typeof obj === 'undefined') throw \`\${id}: Expected a value, got \${obj}\`; }
  else if (typeof obj !== type) throw \`\${id}: Expected \${type}, got \${obj}\`;
}
`);

const tfu = [undefined, false, true];

function optsObj(obj: Record<string, boolean | undefined>) {
  return JSON.stringify(Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)), undefined, 2)
    .replace(/"/g, '').replace(/\s+/g, ' ').replace('{}', '/* {} */');
}

let i = 0;

for (const neonArrayMode of tfu) for (const neonFullResults of tfu) {
  const neonOptsObj = optsObj({ arrayMode: neonArrayMode, fullResults: neonFullResults });

  for (const sqlArrayMode of tfu) for (const sqlFullResults of tfu) {
    const sqlOptsObj = optsObj({ arrayMode: sqlArrayMode, fullResults: sqlFullResults });

  console.log(`
await (async () => {
  console.log('neon ${neonOptsObj}, sql ${sqlOptsObj}');
  const sql = neon(dburl, ${neonOptsObj});
  // template string query
  const sqlRes = await sql\`SELECT 1 AS val\`;
  expectType(sqlRes, '${neonFullResults ?? false ? 'object' : 'array'}', ${i++});
  const sqlResRows = sqlRes${neonFullResults ?? false ? `.rows` : ``};
  expectType(sqlResRows, 'array', ${i++});
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, '${neonArrayMode ?? false ? 'array' : 'object'}', ${i++});
  const sqlResVal = sqlResRow${neonArrayMode ?? false ? '[0]' : '.val'};
  expectType(sqlResVal, 'number', ${i++});
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], ${sqlOptsObj});
  expectType(sqlOptRes, '${sqlFullResults ?? neonFullResults ?? false ? 'object' : 'array'}', ${i++});
  const sqlOptResRows = sqlOptRes${sqlFullResults ?? neonFullResults ?? false ? `.rows` : ``};
  expectType(sqlOptResRows, 'array', ${i++});
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, '${sqlArrayMode ?? neonArrayMode ?? false ? 'array' : 'object'}', ${i++});
  const sqlOptResVal = sqlOptResRow${sqlArrayMode ?? neonArrayMode ?? false ? '[0]' : '.val'};
  expectType(sqlOptResVal, 'number', ${i++});
})();`
  );

  for (const txnArrayMode of tfu) for (const txnFullResults of tfu) {
    const txnOptsObj = optsObj({ arrayMode: txnArrayMode, fullResults: txnFullResults });

      console.log(`
await (async () => {
  console.log('neon ${neonOptsObj}, txn ${txnOptsObj}, sql ${sqlOptsObj}');
  const sql = neon(dburl, ${neonOptsObj});
  const txnRes = await sql.transaction([
    sql\`SELECT 1 AS val\`,
    sql('SELECT 1 AS val', [], ${sqlOptsObj}),
  ], ${txnOptsObj});
  expectType(txnRes, 'array', ${i++});
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, '${txnFullResults ?? neonFullResults ?? false ? 'object' : 'array'}', ${i++});
  const sqlResRows = sqlRes${txnFullResults ?? neonFullResults ?? false ? `.rows` : ``};
  expectType(sqlResRows, 'array', ${i++});
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, '${txnArrayMode ?? neonArrayMode ?? false ? 'array' : 'object'}', ${i++});
  const sqlResVal = sqlResRow${txnArrayMode ?? neonArrayMode ?? false ? '[0]' : '.val'};
  expectType(sqlResVal, 'number', ${i++});
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, '${sqlFullResults ?? txnFullResults ?? neonFullResults ?? false ? 'object' : 'array'}', ${i++});
  const sqlOptResRows = sqlOptRes${sqlFullResults ?? txnFullResults ?? neonFullResults ?? false ? `.rows` : ``};
  expectType(sqlOptResRows, 'array', ${i++});
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, '${sqlArrayMode ?? txnArrayMode ?? neonArrayMode ?? false ? 'array' : 'object'}', ${i++});
  const sqlOptResVal = sqlOptResRow${sqlArrayMode ?? txnArrayMode ?? neonArrayMode ?? false ? '[0]' : '.val'};
  expectType(sqlOptResVal, 'number', ${i++});
})();`
      );
    }
  }
}