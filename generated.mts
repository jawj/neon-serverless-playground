
import { neon } from '@neondatabase/serverless';

const dburl = process.argv[2];

function expectType(obj: any, type: string, id?: any) {
  if (type === 'array') { if (!Array.isArray(obj)) throw `${id}: Expected an array, got ${obj}`; }
  else if (type === 'defined') { if (typeof obj === 'undefined') throw `${id}: Expected a value, got ${obj}`; }
  else if (typeof obj !== type) throw `${id}: Expected ${type}, got ${obj}`;
}


await (async () => {
  console.log('neon /* {} */, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 0);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'array', 4);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 7);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 8);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 9);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 10);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 11);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 12);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 13);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 14);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 15);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 16);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 17);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 18);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 19);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 20);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 21);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 22);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 23);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 24);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 25);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 26);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 27);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 28);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 29);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 30);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 31);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 32);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 33);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 34);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 35);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 36);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 37);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 38);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 39);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 40);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 41);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 42);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 43);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 44);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 45);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 46);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 47);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 48);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 49);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 50);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 51);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 52);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 53);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 54);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 55);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 56);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 57);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 58);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 59);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 60);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 61);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 62);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 63);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 64);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 65);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 66);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 67);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 68);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 69);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 70);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 71);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 72);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 73);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 74);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 75);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 76);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 77);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 78);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 79);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 80);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 81);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 82);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 83);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 84);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 85);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 86);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 87);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 88);
})();

await (async () => {
  console.log('neon /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 89);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 90);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 91);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 92);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 93);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 94);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 95);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 96);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 97);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 98);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 99);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 100);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 101);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 102);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 103);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 104);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 105);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 106);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 107);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 108);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 109);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 110);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 111);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 112);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 113);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 114);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 115);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 116);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 117);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 118);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 119);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 120);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 121);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 122);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 123);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 124);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 125);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 126);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 127);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 128);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 129);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 130);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 131);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 132);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 133);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 134);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 135);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 136);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 137);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 138);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 139);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 140);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 141);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 142);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 143);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 144);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 145);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 146);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 147);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 148);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 149);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 150);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 151);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 152);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 153);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 154);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 155);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 156);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 157);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 158);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 159);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 160);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 161);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 162);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 163);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 164);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 165);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 166);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 167);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 168);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 169);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 170);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 171);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 172);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 173);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 174);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 175);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 176);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 177);
})();

await (async () => {
  console.log('neon /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 178);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 179);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 180);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 181);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 182);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 183);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 184);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 185);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 186);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 187);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 188);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 189);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 190);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 191);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 192);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 193);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 194);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 195);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 196);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 197);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 198);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 199);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 200);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 201);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 202);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 203);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 204);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 205);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 206);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 207);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 208);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 209);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 210);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 211);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 212);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 213);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 214);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 215);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 216);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 217);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 218);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 219);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 220);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 221);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 222);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 223);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 224);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 225);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 226);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 227);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 228);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 229);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 230);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 231);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 232);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 233);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 234);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 235);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 236);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 237);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 238);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 239);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 240);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 241);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 242);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 243);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 244);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 245);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 246);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 247);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 248);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 249);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 250);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 251);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 252);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 253);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 254);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 255);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 256);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 257);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 258);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 259);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 260);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 261);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 262);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 263);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 264);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 265);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 266);
})();

await (async () => {
  console.log('neon /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 267);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 268);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 269);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 270);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'array', 271);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 272);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 273);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 274);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 275);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 276);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 277);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 278);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 279);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 280);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 281);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 282);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 283);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 284);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 285);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 286);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 287);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 288);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 289);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 290);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 291);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 292);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 293);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 294);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 295);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 296);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 297);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 298);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 299);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 300);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 301);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 302);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 303);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 304);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 305);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 306);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 307);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 308);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 309);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 310);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 311);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 312);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 313);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 314);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 315);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 316);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 317);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 318);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 319);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 320);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 321);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 322);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 323);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 324);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 325);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 326);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 327);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 328);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 329);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 330);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 331);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 332);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 333);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 334);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 335);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 336);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 337);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 338);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 339);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 340);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 341);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 342);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 343);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 344);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 345);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 346);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 347);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 348);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 349);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 350);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 351);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 352);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 353);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 354);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 355);
})();

await (async () => {
  console.log('neon /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 356);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 357);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 358);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 359);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 360);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 361);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 362);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 363);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 364);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 365);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 366);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 367);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 368);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 369);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 370);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 371);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 372);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 373);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 374);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 375);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 376);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 377);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 378);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 379);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 380);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 381);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 382);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 383);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 384);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 385);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 386);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 387);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 388);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 389);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 390);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 391);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 392);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 393);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 394);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 395);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 396);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 397);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 398);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 399);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 400);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 401);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 402);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 403);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 404);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 405);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 406);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 407);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 408);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 409);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 410);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 411);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 412);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 413);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 414);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 415);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 416);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 417);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 418);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 419);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 420);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 421);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 422);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 423);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 424);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 425);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 426);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 427);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 428);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 429);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 430);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 431);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 432);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 433);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 434);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 435);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 436);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 437);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 438);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 439);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 440);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 441);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 442);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 443);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 444);
})();

await (async () => {
  console.log('neon /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 445);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 446);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 447);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 448);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 449);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 450);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 451);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 452);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 453);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 454);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 455);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 456);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 457);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 458);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 459);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 460);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 461);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 462);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 463);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 464);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 465);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 466);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 467);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 468);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 469);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 470);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 471);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 472);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 473);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 474);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 475);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 476);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 477);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 478);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 479);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 480);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 481);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 482);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 483);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 484);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 485);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 486);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 487);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 488);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 489);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 490);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 491);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 492);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 493);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 494);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 495);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 496);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 497);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 498);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 499);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 500);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 501);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 502);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 503);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 504);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 505);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 506);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 507);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 508);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 509);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 510);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 511);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 512);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 513);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 514);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 515);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 516);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 517);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 518);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 519);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 520);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 521);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 522);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 523);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 524);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 525);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 526);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 527);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 528);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 529);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 530);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 531);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 532);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 533);
})();

await (async () => {
  console.log('neon /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 534);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 535);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 536);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 537);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'array', 538);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 539);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 540);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 541);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 542);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 543);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 544);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 545);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 546);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 547);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 548);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 549);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 550);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 551);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 552);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 553);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 554);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 555);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 556);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 557);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 558);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 559);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 560);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 561);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 562);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 563);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 564);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 565);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 566);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 567);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 568);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 569);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 570);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 571);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 572);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 573);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 574);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 575);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 576);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 577);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 578);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 579);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 580);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 581);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 582);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 583);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 584);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 585);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 586);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 587);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 588);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 589);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 590);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 591);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 592);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 593);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 594);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 595);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 596);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 597);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 598);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 599);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 600);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 601);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 602);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 603);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 604);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 605);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 606);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 607);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 608);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 609);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 610);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 611);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 612);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 613);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 614);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 615);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 616);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 617);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 618);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 619);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 620);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 621);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 622);
})();

await (async () => {
  console.log('neon /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 623);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 624);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 625);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 626);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 627);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 628);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 629);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 630);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 631);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 632);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 633);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 634);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 635);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 636);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 637);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 638);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 639);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 640);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 641);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 642);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 643);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 644);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 645);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 646);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 647);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 648);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 649);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 650);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 651);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 652);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 653);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 654);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 655);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 656);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 657);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 658);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 659);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 660);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 661);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 662);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 663);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 664);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 665);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 666);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 667);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 668);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 669);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 670);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 671);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 672);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 673);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 674);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 675);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 676);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 677);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 678);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 679);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 680);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 681);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 682);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 683);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 684);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 685);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 686);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 687);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 688);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 689);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 690);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 691);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 692);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 693);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 694);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 695);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 696);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 697);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 698);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 699);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 700);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 701);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 702);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 703);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 704);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 705);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 706);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 707);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 708);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 709);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 710);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 711);
})();

await (async () => {
  console.log('neon /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 712);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 713);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 714);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 715);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 716);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 717);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 718);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 719);
})();

await (async () => {
  console.log('neon /* {} */, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 720);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 721);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 722);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 723);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 724);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 725);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 726);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 727);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 728);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 729);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 730);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 731);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 732);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 733);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 734);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 735);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 736);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 737);
})();

await (async () => {
  console.log('neon /* {} */, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 738);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 739);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 740);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 741);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 742);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 743);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 744);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 745);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 746);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 747);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 748);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 749);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 750);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 751);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 752);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 753);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 754);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 755);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 756);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 757);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 758);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 759);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 760);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 761);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 762);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 763);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 764);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 765);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 766);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 767);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 768);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 769);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 770);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 771);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 772);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 773);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 774);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 775);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 776);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 777);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 778);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 779);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 780);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 781);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 782);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 783);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 784);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 785);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 786);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 787);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 788);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 789);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 790);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 791);
})();

await (async () => {
  console.log('neon /* {} */, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, /* {} */);
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 792);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 793);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 794);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 795);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 796);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 797);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 798);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 799);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 800);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 801);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 802);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 803);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 804);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'array', 805);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 806);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 807);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 808);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 809);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 810);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 811);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 812);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 813);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 814);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 815);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 816);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 817);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 818);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 819);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 820);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 821);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 822);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 823);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 824);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 825);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 826);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 827);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 828);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 829);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 830);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 831);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 832);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 833);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 834);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 835);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 836);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 837);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 838);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 839);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 840);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 841);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 842);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 843);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 844);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 845);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 846);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 847);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 848);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 849);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 850);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 851);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 852);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 853);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 854);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 855);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 856);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 857);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 858);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 859);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 860);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 861);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 862);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 863);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 864);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 865);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 866);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 867);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 868);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 869);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 870);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 871);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 872);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 873);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 874);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 875);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 876);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 877);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 878);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 879);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 880);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 881);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 882);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 883);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 884);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 885);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 886);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 887);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 888);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 889);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 890);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 891);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 892);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 893);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 894);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 895);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 896);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 897);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 898);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 899);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 900);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 901);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 902);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 903);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 904);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 905);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 906);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 907);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 908);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 909);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 910);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 911);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 912);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 913);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 914);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 915);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 916);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 917);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 918);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 919);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 920);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 921);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 922);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 923);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 924);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 925);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 926);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 927);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 928);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 929);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 930);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 931);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 932);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 933);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 934);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 935);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 936);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 937);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 938);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 939);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 940);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 941);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 942);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 943);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 944);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 945);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 946);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 947);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 948);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 949);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 950);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 951);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 952);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 953);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 954);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 955);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 956);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 957);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 958);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 959);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 960);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 961);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 962);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 963);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 964);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 965);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 966);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 967);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 968);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 969);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 970);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 971);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 972);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 973);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 974);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 975);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 976);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 977);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 978);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 979);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 980);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 981);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 982);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 983);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 984);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 985);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 986);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 987);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 988);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 989);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 990);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 991);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 992);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 993);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 994);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 995);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 996);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 997);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 998);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 999);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1000);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1001);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1002);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1003);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1004);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1005);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1006);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1007);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1008);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1009);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1010);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1011);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1012);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1013);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1014);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1015);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1016);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1017);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1018);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1019);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1020);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1021);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1022);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1023);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1024);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1025);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1026);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1027);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1028);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1029);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1030);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1031);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1032);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1033);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1034);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1035);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1036);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1037);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1038);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1039);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1040);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1041);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1042);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1043);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1044);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1045);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1046);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1047);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1048);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1049);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1050);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1051);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1052);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1053);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1054);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1055);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1056);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1057);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1058);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1059);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1060);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1061);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1062);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1063);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1064);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1065);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1066);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1067);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 1068);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1069);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1070);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1071);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'array', 1072);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1073);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1074);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1075);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 1076);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1077);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1078);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1079);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1080);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1081);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1082);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1083);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1084);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1085);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1086);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1087);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1088);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1089);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1090);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1091);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1092);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1093);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1094);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1095);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1096);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1097);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1098);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1099);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1100);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1101);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1102);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1103);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1104);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1105);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1106);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1107);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1108);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1109);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1110);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1111);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1112);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1113);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1114);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1115);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1116);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1117);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1118);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1119);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1120);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1121);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1122);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1123);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1124);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1125);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1126);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1127);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1128);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1129);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1130);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1131);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1132);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1133);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1134);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1135);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1136);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1137);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1138);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1139);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1140);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1141);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1142);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1143);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1144);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1145);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1146);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1147);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1148);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1149);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1150);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1151);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1152);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1153);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1154);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1155);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1156);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 1157);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1158);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1159);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1160);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 1161);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1162);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1163);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1164);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 1165);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1166);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1167);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1168);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1169);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1170);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1171);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1172);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1173);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1174);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1175);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1176);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1177);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1178);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1179);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1180);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1181);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1182);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1183);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1184);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1185);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1186);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1187);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1188);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1189);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1190);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1191);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1192);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1193);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1194);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1195);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1196);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1197);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1198);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1199);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1200);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1201);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1202);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1203);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1204);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1205);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1206);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1207);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1208);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1209);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1210);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1211);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1212);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1213);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1214);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1215);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1216);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1217);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1218);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1219);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1220);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1221);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1222);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1223);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1224);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1225);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1226);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1227);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1228);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1229);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1230);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1231);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1232);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1233);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1234);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1235);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1236);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1237);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1238);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1239);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1240);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1241);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1242);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1243);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1244);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1245);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 1246);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1247);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1248);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1249);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 1250);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1251);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1252);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1253);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 1254);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1255);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1256);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1257);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1258);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1259);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1260);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1261);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1262);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1263);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1264);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1265);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1266);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1267);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1268);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1269);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1270);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1271);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1272);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1273);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1274);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1275);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1276);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1277);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1278);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1279);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1280);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1281);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1282);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1283);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1284);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1285);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1286);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1287);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1288);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1289);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1290);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1291);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1292);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1293);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1294);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1295);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1296);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1297);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1298);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1299);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1300);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1301);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1302);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1303);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1304);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1305);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1306);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1307);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1308);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1309);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1310);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1311);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1312);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1313);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1314);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1315);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1316);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1317);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1318);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1319);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1320);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1321);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1322);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1323);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1324);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1325);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1326);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1327);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1328);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1329);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1330);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1331);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1332);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1333);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1334);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 1335);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1336);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1337);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1338);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'array', 1339);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1340);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1341);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1342);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 1343);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1344);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1345);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1346);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1347);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1348);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1349);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1350);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1351);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1352);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1353);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1354);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1355);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1356);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1357);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1358);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1359);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1360);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1361);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1362);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1363);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1364);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1365);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1366);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1367);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1368);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1369);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1370);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1371);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1372);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1373);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1374);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1375);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1376);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1377);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1378);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1379);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1380);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1381);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1382);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1383);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1384);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1385);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1386);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1387);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1388);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1389);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1390);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1391);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1392);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1393);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1394);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1395);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1396);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1397);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1398);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1399);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1400);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1401);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1402);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1403);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1404);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1405);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1406);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1407);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1408);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1409);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1410);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1411);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1412);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1413);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1414);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1415);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1416);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1417);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1418);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1419);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1420);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1421);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1422);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1423);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 1424);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1425);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1426);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1427);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 1428);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1429);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1430);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1431);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 1432);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1433);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1434);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1435);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1436);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1437);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1438);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1439);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1440);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1441);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1442);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1443);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1444);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1445);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1446);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1447);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1448);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1449);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1450);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1451);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1452);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1453);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1454);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1455);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1456);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1457);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1458);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1459);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1460);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1461);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1462);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1463);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1464);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1465);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1466);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1467);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1468);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1469);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1470);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1471);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1472);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1473);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1474);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1475);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1476);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1477);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1478);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1479);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1480);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1481);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1482);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1483);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1484);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1485);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1486);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1487);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1488);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1489);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1490);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1491);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1492);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1493);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1494);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1495);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1496);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1497);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1498);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1499);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1500);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1501);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1502);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1503);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1504);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1505);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1506);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1507);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1508);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1509);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1510);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1511);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1512);
})();

await (async () => {
  console.log('neon { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 1513);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1514);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1515);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1516);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 1517);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1518);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1519);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1520);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 1521);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1522);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1523);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1524);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1525);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1526);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1527);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1528);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1529);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1530);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1531);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1532);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1533);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1534);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1535);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1536);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1537);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1538);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1539);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1540);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1541);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1542);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1543);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1544);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1545);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1546);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1547);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1548);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1549);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1550);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1551);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1552);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1553);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1554);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1555);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1556);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1557);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1558);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1559);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1560);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1561);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1562);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1563);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1564);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1565);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1566);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1567);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1568);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1569);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1570);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1571);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1572);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1573);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1574);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1575);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1576);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1577);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1578);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1579);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1580);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1581);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1582);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1583);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1584);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1585);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1586);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1587);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1588);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1589);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1590);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1591);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1592);
})();

await (async () => {
  console.log('neon { fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1593);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1594);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1595);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1596);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1597);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1598);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1599);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1600);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1601);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 1602);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1603);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1604);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1605);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'object', 1606);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1607);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1608);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1609);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 1610);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1611);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1612);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1613);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1614);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1615);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1616);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1617);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1618);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1619);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1620);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1621);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1622);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1623);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1624);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1625);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1626);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1627);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1628);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1629);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1630);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1631);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1632);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1633);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1634);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1635);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1636);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1637);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1638);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1639);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1640);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1641);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1642);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1643);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1644);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1645);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1646);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1647);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1648);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1649);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1650);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1651);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1652);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1653);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1654);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1655);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1656);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1657);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1658);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1659);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1660);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1661);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1662);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1663);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1664);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1665);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1666);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1667);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1668);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1669);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1670);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1671);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1672);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1673);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1674);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1675);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1676);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1677);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1678);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1679);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1680);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1681);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1682);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1683);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1684);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1685);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1686);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1687);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1688);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1689);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1690);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 1691);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1692);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1693);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1694);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 1695);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1696);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1697);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1698);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 1699);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1700);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1701);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1702);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1703);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1704);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1705);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1706);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1707);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1708);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1709);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1710);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1711);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1712);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1713);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1714);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1715);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1716);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1717);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1718);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1719);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1720);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1721);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1722);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1723);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1724);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1725);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1726);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1727);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1728);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1729);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1730);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1731);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1732);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1733);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1734);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1735);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1736);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1737);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1738);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1739);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1740);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1741);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1742);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1743);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1744);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1745);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1746);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1747);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1748);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1749);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1750);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1751);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1752);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1753);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1754);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1755);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1756);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1757);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1758);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1759);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1760);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1761);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1762);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1763);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1764);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1765);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1766);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1767);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1768);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1769);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1770);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1771);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1772);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1773);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1774);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1775);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1776);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1777);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1778);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1779);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 1780);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1781);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1782);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1783);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 1784);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1785);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1786);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1787);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 1788);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1789);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1790);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1791);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1792);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1793);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1794);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1795);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1796);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1797);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1798);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1799);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1800);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1801);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1802);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1803);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1804);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1805);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1806);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1807);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1808);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1809);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1810);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1811);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1812);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1813);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1814);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1815);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1816);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1817);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1818);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1819);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1820);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1821);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1822);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1823);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1824);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1825);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1826);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1827);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1828);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1829);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1830);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1831);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1832);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1833);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1834);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1835);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1836);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1837);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1838);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1839);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1840);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1841);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1842);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1843);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1844);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1845);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1846);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1847);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1848);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1849);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1850);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1851);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1852);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1853);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1854);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1855);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1856);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1857);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1858);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1859);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1860);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1861);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1862);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1863);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1864);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1865);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1866);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 1867);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 1868);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 1869);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1870);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1871);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1872);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'object', 1873);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1874);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1875);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1876);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 1877);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1878);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1879);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1880);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1881);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1882);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1883);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1884);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1885);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1886);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1887);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1888);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1889);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1890);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1891);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1892);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1893);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1894);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1895);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1896);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1897);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1898);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1899);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1900);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1901);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1902);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1903);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1904);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1905);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1906);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1907);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1908);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1909);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1910);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1911);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1912);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 1913);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1914);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1915);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1916);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1917);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1918);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1919);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1920);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1921);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 1922);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1923);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1924);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1925);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1926);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1927);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1928);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1929);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1930);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 1931);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1932);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1933);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1934);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1935);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1936);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1937);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1938);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1939);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 1940);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1941);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1942);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1943);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1944);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1945);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1946);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1947);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1948);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 1949);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1950);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1951);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 1952);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 1953);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 1954);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 1955);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1956);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1957);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 1958);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1959);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1960);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1961);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 1962);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1963);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1964);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1965);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 1966);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1967);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1968);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1969);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1970);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1971);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1972);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1973);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1974);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 1975);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 1976);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 1977);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1978);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1979);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1980);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1981);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1982);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1983);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 1984);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1985);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1986);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1987);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1988);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1989);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1990);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 1991);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 1992);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 1993);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 1994);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 1995);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 1996);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 1997);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 1998);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 1999);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2000);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2001);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2002);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2003);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2004);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2005);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2006);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2007);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2008);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2009);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2010);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2011);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2012);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2013);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2014);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2015);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2016);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2017);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2018);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2019);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2020);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2021);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2022);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2023);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2024);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2025);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2026);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2027);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2028);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2029);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2030);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2031);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2032);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2033);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2034);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2035);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2036);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2037);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2038);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2039);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2040);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2041);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2042);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2043);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2044);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2045);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2046);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 2047);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2048);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2049);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2050);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 2051);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2052);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2053);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2054);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 2055);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2056);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2057);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2058);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2059);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2060);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2061);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2062);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2063);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2064);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2065);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2066);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2067);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2068);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2069);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2070);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2071);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2072);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2073);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2074);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2075);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2076);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2077);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2078);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2079);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2080);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2081);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2082);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2083);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2084);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2085);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2086);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2087);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2088);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2089);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2090);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2091);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2092);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2093);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2094);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2095);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2096);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2097);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2098);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2099);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2100);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2101);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2102);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2103);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2104);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2105);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2106);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2107);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2108);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2109);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2110);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2111);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2112);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2113);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2114);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2115);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2116);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2117);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2118);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2119);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2120);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2121);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2122);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2123);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2124);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2125);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2126);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2127);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2128);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2129);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2130);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2131);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2132);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2133);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2134);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2135);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 2136);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2137);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2138);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2139);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'object', 2140);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2141);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2142);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2143);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 2144);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2145);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2146);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2147);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2148);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2149);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2150);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2151);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2152);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2153);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2154);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2155);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2156);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2157);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2158);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2159);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2160);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2161);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2162);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2163);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2164);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2165);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2166);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2167);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2168);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2169);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2170);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2171);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2172);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2173);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2174);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2175);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2176);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2177);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2178);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2179);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2180);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2181);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2182);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2183);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2184);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2185);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2186);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2187);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2188);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2189);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2190);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2191);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2192);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2193);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2194);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2195);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2196);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2197);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2198);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2199);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2200);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2201);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2202);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2203);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2204);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2205);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2206);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2207);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2208);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2209);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2210);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2211);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2212);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2213);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2214);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2215);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2216);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2217);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2218);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2219);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2220);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2221);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2222);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2223);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2224);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 2225);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2226);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2227);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2228);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 2229);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2230);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2231);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2232);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 2233);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2234);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2235);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2236);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2237);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2238);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2239);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2240);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2241);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2242);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2243);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2244);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2245);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2246);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2247);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2248);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2249);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2250);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2251);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2252);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2253);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2254);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2255);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2256);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2257);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2258);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2259);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2260);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2261);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2262);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2263);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2264);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2265);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2266);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2267);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2268);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2269);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2270);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2271);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2272);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2273);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2274);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2275);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2276);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2277);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2278);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2279);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2280);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2281);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2282);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2283);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2284);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2285);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2286);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2287);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2288);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2289);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2290);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2291);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2292);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2293);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2294);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2295);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2296);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2297);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2298);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2299);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2300);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2301);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2302);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2303);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2304);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2305);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2306);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2307);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2308);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2309);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2310);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2311);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2312);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2313);
})();

await (async () => {
  console.log('neon { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 2314);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2315);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2316);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2317);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 2318);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2319);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2320);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2321);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 2322);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2323);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2324);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2325);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2326);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2327);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2328);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2329);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2330);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2331);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2332);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2333);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2334);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2335);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2336);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2337);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2338);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2339);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2340);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2341);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2342);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2343);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2344);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2345);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2346);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2347);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2348);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2349);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2350);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2351);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2352);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2353);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2354);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2355);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2356);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2357);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2358);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2359);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2360);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2361);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2362);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2363);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2364);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2365);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2366);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2367);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2368);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2369);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2370);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2371);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2372);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2373);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2374);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2375);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2376);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2377);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2378);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2379);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2380);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2381);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2382);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2383);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2384);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2385);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2386);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2387);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2388);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2389);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2390);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2391);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2392);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2393);
})();

await (async () => {
  console.log('neon { fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2394);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2395);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2396);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2397);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2398);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2399);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2400);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2401);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2402);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2403);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2404);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2405);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2406);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'array', 2407);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2408);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2409);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2410);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 2411);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2412);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2413);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2414);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2415);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2416);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2417);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2418);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2419);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2420);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2421);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2422);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2423);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2424);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2425);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2426);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2427);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2428);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2429);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2430);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2431);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2432);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2433);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2434);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2435);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2436);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2437);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2438);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2439);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2440);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2441);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2442);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2443);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2444);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2445);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2446);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2447);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2448);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2449);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2450);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2451);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2452);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2453);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2454);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2455);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2456);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2457);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2458);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2459);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2460);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2461);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2462);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2463);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2464);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2465);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2466);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2467);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2468);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2469);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2470);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2471);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2472);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2473);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2474);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2475);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2476);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2477);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2478);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2479);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2480);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2481);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2482);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2483);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2484);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2485);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2486);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2487);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2488);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2489);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2490);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2491);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2492);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2493);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2494);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2495);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 2496);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2497);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2498);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2499);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 2500);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2501);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2502);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2503);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2504);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2505);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2506);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2507);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2508);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2509);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2510);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2511);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2512);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2513);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2514);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2515);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2516);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2517);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2518);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2519);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2520);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2521);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2522);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2523);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2524);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2525);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2526);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2527);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2528);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2529);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2530);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2531);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2532);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2533);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2534);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2535);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2536);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2537);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2538);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2539);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2540);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2541);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2542);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2543);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2544);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2545);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2546);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2547);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2548);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2549);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2550);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2551);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2552);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2553);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2554);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2555);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2556);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2557);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2558);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2559);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2560);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2561);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2562);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2563);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2564);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2565);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2566);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2567);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2568);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2569);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2570);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2571);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2572);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2573);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2574);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2575);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2576);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2577);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2578);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2579);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2580);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2581);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2582);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2583);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2584);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 2585);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2586);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2587);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2588);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 2589);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2590);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2591);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2592);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2593);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2594);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2595);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2596);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2597);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2598);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2599);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2600);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2601);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2602);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2603);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2604);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2605);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2606);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2607);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2608);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2609);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2610);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2611);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2612);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2613);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2614);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2615);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2616);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2617);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2618);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2619);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2620);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2621);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2622);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2623);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2624);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2625);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2626);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2627);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2628);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2629);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2630);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2631);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2632);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2633);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2634);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2635);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2636);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2637);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2638);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2639);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2640);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2641);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2642);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2643);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2644);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2645);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2646);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2647);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2648);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2649);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2650);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2651);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2652);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2653);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2654);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2655);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2656);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2657);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2658);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2659);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2660);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2661);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2662);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2663);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2664);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2665);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2666);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2667);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2668);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2669);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2670);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2671);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2672);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2673);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'array', 2674);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2675);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2676);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2677);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 2678);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2679);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2680);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2681);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2682);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2683);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2684);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2685);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2686);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2687);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2688);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2689);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2690);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2691);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2692);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2693);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2694);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2695);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2696);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2697);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2698);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2699);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2700);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2701);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2702);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2703);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2704);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2705);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2706);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2707);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2708);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2709);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2710);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2711);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2712);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2713);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2714);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2715);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2716);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2717);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2718);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2719);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2720);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2721);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2722);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2723);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2724);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2725);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2726);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2727);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2728);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2729);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2730);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2731);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2732);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2733);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2734);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2735);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2736);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2737);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2738);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2739);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2740);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2741);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2742);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2743);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2744);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2745);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2746);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2747);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2748);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2749);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2750);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2751);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2752);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2753);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2754);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2755);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2756);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2757);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2758);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2759);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2760);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2761);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2762);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 2763);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2764);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2765);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2766);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 2767);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2768);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2769);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2770);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2771);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2772);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2773);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2774);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2775);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2776);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2777);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2778);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2779);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2780);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2781);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2782);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2783);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2784);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2785);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2786);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2787);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2788);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2789);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2790);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2791);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2792);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2793);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2794);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2795);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2796);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2797);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2798);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2799);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2800);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2801);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2802);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2803);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2804);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2805);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2806);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2807);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2808);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2809);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2810);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2811);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2812);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2813);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2814);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2815);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2816);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2817);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2818);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2819);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2820);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2821);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2822);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2823);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2824);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2825);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2826);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2827);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2828);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2829);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2830);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2831);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2832);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2833);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2834);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2835);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2836);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2837);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2838);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2839);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2840);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2841);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2842);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2843);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2844);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2845);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2846);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2847);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2848);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2849);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2850);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2851);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 2852);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2853);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2854);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2855);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 2856);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2857);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2858);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2859);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2860);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2861);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2862);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2863);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2864);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2865);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2866);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2867);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2868);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2869);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2870);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2871);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2872);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2873);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2874);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2875);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2876);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2877);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2878);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2879);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2880);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2881);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2882);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2883);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2884);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2885);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2886);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2887);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2888);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2889);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2890);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2891);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2892);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2893);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2894);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2895);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2896);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2897);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2898);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2899);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2900);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2901);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2902);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2903);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2904);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2905);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2906);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2907);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2908);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2909);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2910);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2911);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2912);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2913);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2914);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2915);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2916);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2917);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2918);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 2919);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2920);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2921);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2922);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2923);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2924);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2925);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2926);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2927);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 2928);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2929);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2930);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 2931);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 2932);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2933);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2934);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 2935);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 2936);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 2937);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2938);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2939);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2940);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'array', 2941);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2942);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2943);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2944);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 2945);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2946);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2947);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2948);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2949);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2950);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2951);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2952);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2953);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 2954);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2955);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2956);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2957);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2958);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2959);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2960);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2961);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2962);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 2963);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2964);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2965);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2966);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2967);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2968);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2969);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2970);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2971);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 2972);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2973);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2974);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2975);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2976);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2977);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2978);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2979);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2980);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 2981);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 2982);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 2983);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2984);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2985);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 2986);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 2987);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2988);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2989);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 2990);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 2991);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 2992);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 2993);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 2994);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 2995);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 2996);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 2997);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 2998);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 2999);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3000);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3001);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3002);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3003);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3004);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3005);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3006);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3007);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3008);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3009);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3010);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3011);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3012);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3013);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3014);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3015);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3016);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3017);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3018);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3019);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3020);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3021);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3022);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3023);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3024);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3025);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3026);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3027);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3028);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3029);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 3030);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3031);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3032);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3033);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 3034);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3035);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3036);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3037);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3038);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3039);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3040);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3041);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3042);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3043);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3044);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3045);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3046);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3047);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3048);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3049);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3050);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3051);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3052);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3053);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3054);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3055);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3056);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3057);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3058);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3059);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3060);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3061);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3062);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3063);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3064);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3065);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3066);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3067);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3068);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3069);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3070);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3071);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3072);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3073);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3074);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3075);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3076);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3077);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3078);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3079);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3080);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3081);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3082);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3083);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3084);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3085);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3086);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3087);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3088);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3089);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3090);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3091);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3092);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3093);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3094);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3095);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3096);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3097);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3098);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3099);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3100);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3101);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3102);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3103);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3104);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3105);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3106);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3107);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3108);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3109);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3110);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3111);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3112);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3113);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3114);
})();

await (async () => {
  console.log('neon { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3115);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3116);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3117);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3118);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 3119);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3120);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3121);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3122);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 3123);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3124);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3125);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3126);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3127);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3128);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3129);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3130);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3131);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3132);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3133);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3134);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3135);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3136);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3137);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3138);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3139);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3140);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3141);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3142);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3143);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3144);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3145);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3146);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3147);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3148);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3149);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3150);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3151);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3152);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3153);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3154);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3155);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3156);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3157);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3158);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3159);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3160);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3161);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3162);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3163);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3164);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3165);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3166);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3167);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3168);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3169);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3170);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3171);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3172);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3173);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3174);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3175);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3176);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3177);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3178);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3179);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3180);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3181);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3182);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3183);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3184);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3185);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3186);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3187);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3188);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3189);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3190);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3191);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3192);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3193);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3194);
})();

await (async () => {
  console.log('neon { arrayMode: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3195);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3196);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3197);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3198);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3199);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3200);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3201);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3202);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3203);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3204);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3205);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3206);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3207);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'array', 3208);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3209);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3210);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3211);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 3212);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3213);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3214);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3215);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3216);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3217);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3218);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3219);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3220);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3221);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3222);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3223);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3224);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3225);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3226);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3227);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3228);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3229);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3230);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3231);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3232);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3233);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3234);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3235);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3236);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3237);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3238);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3239);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3240);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3241);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3242);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3243);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3244);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3245);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3246);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3247);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3248);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3249);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3250);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3251);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3252);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3253);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3254);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3255);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3256);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3257);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3258);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3259);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3260);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3261);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3262);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3263);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3264);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3265);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3266);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3267);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3268);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3269);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3270);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3271);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3272);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3273);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3274);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3275);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3276);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3277);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3278);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3279);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3280);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3281);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3282);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3283);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3284);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3285);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3286);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3287);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3288);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3289);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3290);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3291);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3292);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3293);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3294);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3295);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3296);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 3297);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3298);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3299);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3300);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 3301);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3302);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3303);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3304);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3305);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3306);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3307);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3308);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3309);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3310);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3311);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3312);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3313);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3314);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3315);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3316);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3317);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3318);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3319);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3320);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3321);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3322);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3323);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3324);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3325);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3326);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3327);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3328);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3329);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3330);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3331);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3332);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3333);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3334);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3335);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3336);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3337);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3338);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3339);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3340);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3341);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3342);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3343);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3344);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3345);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3346);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3347);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3348);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3349);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3350);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3351);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3352);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3353);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3354);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3355);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3356);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3357);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3358);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3359);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3360);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3361);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3362);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3363);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3364);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3365);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3366);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3367);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3368);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3369);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3370);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3371);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3372);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3373);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3374);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3375);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3376);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3377);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3378);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3379);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3380);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3381);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3382);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3383);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3384);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3385);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 3386);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3387);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3388);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3389);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 3390);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3391);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3392);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3393);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3394);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3395);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3396);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3397);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3398);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3399);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3400);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3401);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3402);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3403);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3404);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3405);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3406);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3407);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3408);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3409);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3410);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3411);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3412);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3413);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3414);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3415);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3416);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3417);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3418);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3419);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3420);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3421);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3422);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3423);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3424);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3425);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3426);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3427);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3428);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3429);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3430);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3431);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3432);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3433);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3434);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3435);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3436);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3437);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3438);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3439);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3440);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3441);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3442);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3443);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3444);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3445);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3446);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3447);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3448);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3449);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3450);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3451);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3452);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3453);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3454);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3455);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3456);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3457);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3458);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3459);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3460);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3461);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3462);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3463);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3464);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3465);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3466);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3467);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3468);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3469);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3470);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3471);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3472);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3473);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3474);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'array', 3475);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3476);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3477);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3478);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 3479);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3480);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3481);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3482);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3483);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3484);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3485);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3486);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3487);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3488);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3489);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3490);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3491);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3492);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3493);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3494);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3495);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3496);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3497);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3498);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3499);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3500);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3501);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3502);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3503);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3504);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3505);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3506);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3507);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3508);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3509);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3510);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3511);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3512);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3513);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3514);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3515);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3516);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3517);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3518);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3519);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3520);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3521);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3522);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3523);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3524);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3525);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3526);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3527);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3528);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3529);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3530);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3531);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3532);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3533);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3534);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3535);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3536);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3537);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3538);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3539);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3540);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3541);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3542);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3543);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3544);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3545);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3546);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3547);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3548);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3549);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3550);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3551);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3552);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3553);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3554);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3555);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3556);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3557);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3558);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3559);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3560);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3561);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3562);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3563);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 3564);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3565);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3566);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3567);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 3568);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3569);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3570);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3571);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3572);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3573);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3574);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3575);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3576);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3577);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3578);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3579);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3580);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3581);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3582);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3583);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3584);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3585);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3586);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3587);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3588);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3589);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3590);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3591);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3592);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3593);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3594);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3595);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3596);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3597);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3598);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3599);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3600);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3601);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3602);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3603);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3604);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3605);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3606);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3607);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3608);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3609);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3610);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3611);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3612);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3613);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3614);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3615);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3616);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3617);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3618);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3619);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3620);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3621);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3622);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3623);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3624);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3625);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3626);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3627);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3628);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3629);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3630);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3631);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3632);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3633);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3634);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3635);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3636);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3637);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3638);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3639);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3640);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3641);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3642);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3643);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3644);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3645);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3646);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3647);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3648);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3649);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3650);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3651);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3652);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 3653);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3654);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3655);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3656);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 3657);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3658);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3659);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3660);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3661);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3662);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3663);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3664);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3665);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3666);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3667);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3668);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3669);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3670);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3671);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3672);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3673);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3674);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3675);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3676);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3677);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3678);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3679);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3680);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3681);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3682);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3683);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3684);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3685);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3686);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3687);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3688);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3689);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3690);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3691);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3692);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3693);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3694);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3695);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3696);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3697);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3698);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3699);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3700);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3701);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3702);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3703);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3704);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3705);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3706);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3707);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3708);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3709);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3710);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3711);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3712);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3713);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3714);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3715);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3716);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3717);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3718);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3719);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3720);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3721);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3722);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3723);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3724);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3725);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3726);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3727);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3728);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3729);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3730);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3731);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3732);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3733);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3734);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3735);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 3736);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 3737);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3738);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3739);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3740);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3741);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'array', 3742);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3743);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3744);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3745);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 3746);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3747);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3748);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3749);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3750);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3751);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3752);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3753);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3754);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3755);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3756);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3757);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3758);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3759);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3760);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3761);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3762);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3763);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3764);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3765);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3766);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3767);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3768);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3769);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3770);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3771);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3772);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3773);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3774);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3775);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3776);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3777);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3778);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3779);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3780);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3781);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3782);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3783);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3784);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3785);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3786);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3787);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3788);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3789);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3790);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3791);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3792);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3793);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3794);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3795);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3796);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3797);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3798);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3799);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3800);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3801);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3802);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3803);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3804);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3805);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3806);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3807);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3808);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3809);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3810);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3811);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3812);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3813);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3814);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3815);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3816);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3817);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3818);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3819);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3820);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3821);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3822);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3823);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3824);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3825);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3826);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3827);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3828);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3829);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3830);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 3831);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3832);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3833);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3834);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 3835);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3836);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3837);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3838);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3839);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3840);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3841);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3842);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3843);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3844);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3845);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3846);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3847);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3848);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3849);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3850);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3851);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3852);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3853);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3854);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3855);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3856);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3857);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3858);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3859);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3860);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3861);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3862);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3863);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3864);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3865);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3866);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3867);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3868);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3869);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3870);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3871);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3872);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3873);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3874);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3875);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3876);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3877);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3878);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3879);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3880);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3881);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3882);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3883);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3884);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3885);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3886);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3887);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3888);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3889);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3890);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3891);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3892);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3893);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3894);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3895);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3896);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3897);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3898);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3899);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3900);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3901);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3902);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3903);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3904);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3905);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3906);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3907);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3908);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3909);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3910);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3911);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 3912);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 3913);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3914);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3915);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 3916);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3917);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3918);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3919);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 3920);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3921);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3922);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3923);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 3924);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3925);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3926);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3927);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3928);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3929);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3930);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3931);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3932);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 3933);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3934);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3935);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3936);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3937);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3938);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3939);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3940);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3941);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 3942);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3943);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3944);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3945);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3946);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3947);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3948);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3949);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3950);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 3951);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3952);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3953);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3954);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3955);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3956);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3957);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3958);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3959);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 3960);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3961);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3962);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3963);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3964);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3965);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3966);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3967);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3968);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 3969);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3970);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3971);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 3972);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 3973);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3974);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3975);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3976);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3977);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 3978);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3979);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3980);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3981);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3982);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3983);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3984);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3985);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3986);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 3987);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 3988);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 3989);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3990);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 3991);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 3992);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 3993);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 3994);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 3995);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 3996);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 3997);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 3998);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 3999);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4000);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4001);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4002);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4003);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4004);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4005);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4006);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4007);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4008);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'object', 4009);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4010);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4011);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4012);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 4013);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4014);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4015);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4016);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4017);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4018);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4019);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4020);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4021);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4022);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4023);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4024);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4025);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4026);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4027);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4028);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4029);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4030);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4031);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4032);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4033);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4034);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4035);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4036);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4037);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4038);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4039);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4040);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4041);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4042);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4043);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4044);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4045);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4046);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4047);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4048);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4049);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4050);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4051);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4052);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4053);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4054);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4055);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4056);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4057);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4058);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4059);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4060);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4061);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4062);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4063);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4064);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4065);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4066);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4067);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4068);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4069);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4070);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4071);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4072);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4073);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4074);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4075);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4076);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4077);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4078);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4079);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4080);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4081);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4082);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4083);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4084);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4085);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4086);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4087);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4088);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4089);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4090);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4091);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4092);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4093);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4094);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4095);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4096);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4097);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 4098);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4099);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4100);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4101);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 4102);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4103);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4104);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4105);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4106);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4107);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4108);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4109);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4110);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4111);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4112);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4113);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4114);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4115);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4116);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4117);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4118);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4119);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4120);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4121);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4122);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4123);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4124);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4125);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4126);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4127);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4128);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4129);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4130);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4131);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4132);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4133);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4134);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4135);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4136);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4137);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4138);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4139);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4140);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4141);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4142);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4143);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4144);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4145);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4146);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4147);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4148);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4149);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4150);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4151);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4152);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4153);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4154);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4155);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4156);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4157);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4158);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4159);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4160);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4161);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4162);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4163);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4164);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4165);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4166);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4167);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4168);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4169);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4170);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4171);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4172);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4173);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4174);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4175);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4176);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4177);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4178);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4179);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4180);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4181);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4182);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4183);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4184);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4185);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4186);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 4187);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4188);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4189);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4190);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 4191);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4192);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4193);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4194);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4195);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4196);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4197);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4198);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4199);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4200);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4201);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4202);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4203);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4204);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4205);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4206);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4207);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4208);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4209);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4210);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4211);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4212);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4213);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4214);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4215);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4216);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4217);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4218);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4219);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4220);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4221);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4222);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4223);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4224);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4225);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4226);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4227);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4228);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4229);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4230);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4231);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4232);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4233);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4234);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4235);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4236);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4237);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4238);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4239);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4240);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4241);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4242);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4243);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4244);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4245);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4246);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4247);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4248);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4249);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4250);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4251);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4252);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4253);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4254);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4255);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4256);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4257);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4258);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4259);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4260);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4261);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4262);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4263);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4264);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4265);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4266);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4267);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4268);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4269);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4270);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4271);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4272);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4273);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4274);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4275);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'object', 4276);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4277);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4278);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4279);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 4280);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4281);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4282);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4283);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4284);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4285);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4286);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4287);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4288);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4289);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4290);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4291);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4292);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4293);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4294);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4295);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4296);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4297);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4298);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4299);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4300);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4301);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4302);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4303);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4304);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4305);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4306);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4307);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4308);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4309);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4310);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4311);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4312);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4313);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4314);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4315);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4316);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4317);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4318);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4319);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4320);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4321);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4322);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4323);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4324);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4325);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4326);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4327);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4328);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4329);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4330);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4331);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4332);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4333);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4334);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4335);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4336);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4337);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4338);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4339);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4340);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4341);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4342);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4343);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4344);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4345);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4346);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4347);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4348);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4349);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4350);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4351);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4352);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4353);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4354);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4355);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4356);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4357);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4358);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4359);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4360);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4361);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4362);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4363);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4364);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 4365);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4366);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4367);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4368);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 4369);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4370);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4371);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4372);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4373);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4374);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4375);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4376);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4377);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4378);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4379);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4380);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4381);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4382);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4383);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4384);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4385);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4386);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4387);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4388);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4389);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4390);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4391);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4392);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4393);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4394);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4395);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4396);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4397);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4398);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4399);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4400);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4401);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4402);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4403);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4404);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4405);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4406);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4407);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4408);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4409);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4410);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4411);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4412);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4413);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4414);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4415);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4416);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4417);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4418);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4419);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4420);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4421);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4422);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4423);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4424);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4425);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4426);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4427);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4428);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4429);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4430);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4431);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4432);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4433);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4434);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4435);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4436);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4437);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4438);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4439);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4440);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4441);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4442);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4443);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4444);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4445);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4446);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4447);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4448);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4449);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4450);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4451);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4452);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4453);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 4454);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4455);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4456);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4457);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 4458);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4459);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4460);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4461);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4462);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4463);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4464);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4465);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4466);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4467);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4468);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4469);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4470);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4471);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4472);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4473);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4474);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4475);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4476);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4477);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4478);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4479);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4480);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4481);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4482);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4483);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4484);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4485);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4486);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4487);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4488);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4489);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4490);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4491);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4492);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4493);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4494);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4495);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4496);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4497);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4498);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4499);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4500);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4501);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4502);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4503);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4504);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4505);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4506);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4507);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4508);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4509);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4510);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4511);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4512);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4513);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4514);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4515);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4516);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4517);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4518);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4519);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4520);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4521);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4522);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4523);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4524);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4525);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4526);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4527);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4528);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4529);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4530);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4531);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4532);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4533);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4534);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4535);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4536);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4537);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4538);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4539);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4540);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4541);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4542);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'object', 4543);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4544);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4545);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4546);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 4547);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4548);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4549);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4550);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4551);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4552);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4553);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4554);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4555);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4556);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4557);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4558);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4559);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4560);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4561);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4562);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4563);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4564);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4565);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4566);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4567);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4568);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4569);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4570);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4571);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4572);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4573);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4574);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4575);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4576);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4577);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4578);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4579);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4580);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4581);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4582);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4583);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4584);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4585);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4586);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4587);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4588);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4589);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4590);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4591);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4592);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4593);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4594);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4595);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4596);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4597);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4598);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4599);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4600);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4601);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4602);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4603);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4604);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4605);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4606);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4607);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4608);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4609);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4610);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4611);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4612);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4613);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4614);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4615);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4616);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4617);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4618);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4619);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4620);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4621);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4622);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4623);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4624);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4625);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4626);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4627);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4628);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4629);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4630);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4631);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 4632);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4633);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4634);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4635);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 4636);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4637);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4638);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4639);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4640);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4641);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4642);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4643);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4644);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4645);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4646);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4647);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4648);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4649);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4650);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4651);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4652);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4653);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4654);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4655);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4656);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4657);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4658);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4659);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4660);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4661);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4662);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4663);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4664);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4665);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4666);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4667);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4668);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4669);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4670);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4671);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4672);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4673);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4674);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4675);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4676);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4677);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4678);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4679);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4680);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4681);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4682);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4683);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4684);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4685);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4686);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4687);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4688);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4689);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4690);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4691);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4692);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4693);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4694);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4695);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4696);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4697);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4698);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4699);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4700);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4701);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4702);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4703);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4704);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4705);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4706);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4707);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4708);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4709);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4710);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4711);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4712);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4713);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4714);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4715);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4716);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 4717);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4718);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4719);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4720);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 4721);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4722);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4723);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4724);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 4725);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4726);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4727);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4728);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4729);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4730);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4731);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4732);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4733);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4734);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4735);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4736);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4737);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4738);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4739);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4740);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4741);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4742);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4743);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4744);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4745);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4746);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4747);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4748);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4749);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4750);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4751);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4752);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4753);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4754);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4755);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4756);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4757);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4758);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4759);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4760);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4761);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4762);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4763);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4764);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4765);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4766);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4767);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4768);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4769);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4770);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4771);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4772);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4773);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4774);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4775);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4776);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4777);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4778);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4779);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4780);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4781);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4782);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4783);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4784);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4785);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4786);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4787);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4788);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4789);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4790);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4791);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4792);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4793);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4794);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4795);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4796);
})();

await (async () => {
  console.log('neon { arrayMode: false, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: false, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4797);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4798);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4799);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4800);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4801);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4802);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4803);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4804);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4805);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 4806);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4807);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4808);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4809);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'array', 4810);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4811);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4812);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4813);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 4814);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4815);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4816);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4817);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4818);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4819);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4820);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4821);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4822);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4823);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4824);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4825);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4826);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4827);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4828);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4829);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4830);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4831);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4832);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4833);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4834);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4835);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4836);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4837);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4838);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4839);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4840);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4841);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4842);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4843);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4844);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4845);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4846);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4847);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4848);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4849);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4850);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4851);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4852);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4853);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4854);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4855);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4856);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4857);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4858);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4859);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4860);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4861);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4862);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4863);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4864);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4865);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4866);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4867);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4868);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4869);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4870);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4871);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4872);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4873);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4874);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4875);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4876);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4877);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4878);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4879);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4880);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4881);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4882);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4883);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4884);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4885);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4886);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4887);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4888);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4889);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4890);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4891);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4892);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4893);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4894);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 4895);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4896);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4897);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4898);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 4899);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4900);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4901);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4902);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 4903);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4904);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4905);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4906);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4907);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4908);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4909);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4910);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4911);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 4912);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4913);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4914);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4915);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4916);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4917);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4918);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4919);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4920);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 4921);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4922);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4923);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4924);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4925);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4926);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4927);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4928);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4929);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 4930);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4931);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4932);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4933);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4934);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4935);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4936);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4937);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4938);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 4939);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4940);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4941);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4942);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4943);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4944);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4945);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4946);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4947);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 4948);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4949);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4950);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 4951);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 4952);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4953);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4954);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 4955);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 4956);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 4957);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4958);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4959);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4960);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4961);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4962);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4963);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4964);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4965);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 4966);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4967);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4968);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4969);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4970);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4971);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4972);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4973);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4974);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 4975);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 4976);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 4977);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4978);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4979);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 4980);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 4981);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4982);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4983);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 4984);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4985);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4986);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4987);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 4988);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4989);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4990);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 4991);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 4992);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 4993);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 4994);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 4995);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 4996);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 4997);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 4998);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 4999);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5000);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5001);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5002);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5003);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5004);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5005);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5006);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5007);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5008);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5009);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5010);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5011);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5012);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5013);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5014);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5015);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5016);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5017);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5018);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5019);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5020);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5021);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5022);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5023);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5024);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5025);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5026);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5027);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5028);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5029);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5030);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5031);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5032);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5033);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5034);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5035);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5036);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5037);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5038);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5039);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5040);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5041);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5042);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5043);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5044);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5045);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5046);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5047);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5048);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5049);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5050);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5051);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5052);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5053);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5054);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5055);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5056);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5057);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5058);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5059);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5060);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5061);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5062);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5063);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5064);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5065);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5066);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5067);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5068);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5069);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5070);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5071);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5072);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5073);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5074);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5075);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5076);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'array', 5077);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5078);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5079);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5080);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 5081);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5082);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5083);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5084);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5085);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5086);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5087);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5088);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5089);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5090);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5091);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5092);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5093);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5094);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5095);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5096);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5097);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5098);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5099);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5100);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5101);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5102);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5103);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5104);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5105);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5106);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5107);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5108);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5109);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5110);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5111);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5112);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5113);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5114);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5115);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5116);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5117);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5118);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5119);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5120);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5121);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5122);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5123);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5124);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5125);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5126);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5127);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5128);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5129);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5130);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5131);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5132);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5133);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5134);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5135);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5136);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5137);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5138);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5139);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5140);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5141);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5142);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5143);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5144);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5145);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5146);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5147);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5148);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5149);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5150);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5151);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5152);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5153);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5154);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5155);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5156);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5157);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5158);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5159);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5160);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5161);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5162);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5163);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5164);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5165);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 5166);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5167);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5168);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5169);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 5170);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5171);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5172);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5173);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5174);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5175);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5176);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5177);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5178);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5179);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5180);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5181);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5182);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5183);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5184);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5185);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5186);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5187);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5188);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5189);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5190);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5191);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5192);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5193);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5194);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5195);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5196);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5197);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5198);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5199);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5200);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5201);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5202);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5203);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5204);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5205);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5206);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5207);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5208);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5209);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5210);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5211);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5212);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5213);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5214);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5215);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5216);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5217);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5218);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5219);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5220);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5221);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5222);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5223);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5224);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5225);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5226);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5227);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5228);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5229);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5230);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5231);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5232);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5233);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5234);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5235);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5236);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5237);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5238);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5239);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5240);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5241);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5242);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5243);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5244);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5245);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5246);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5247);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5248);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5249);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5250);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5251);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5252);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5253);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5254);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 5255);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5256);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5257);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5258);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 5259);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5260);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5261);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5262);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5263);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5264);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5265);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5266);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5267);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5268);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5269);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5270);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5271);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5272);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5273);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5274);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5275);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5276);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5277);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5278);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5279);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5280);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5281);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5282);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5283);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5284);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5285);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5286);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5287);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5288);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5289);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5290);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5291);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5292);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5293);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5294);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5295);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5296);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5297);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5298);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5299);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5300);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5301);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5302);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5303);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5304);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5305);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5306);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5307);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5308);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5309);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5310);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5311);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5312);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5313);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5314);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5315);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5316);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5317);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5318);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5319);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5320);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5321);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5322);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5323);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5324);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5325);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5326);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5327);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5328);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5329);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5330);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5331);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5332);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5333);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5334);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5335);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5336);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5337);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5338);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5339);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5340);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5341);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5342);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5343);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'array', 5344);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5345);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5346);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5347);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 5348);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5349);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5350);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5351);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5352);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5353);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5354);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5355);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5356);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5357);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5358);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5359);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5360);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5361);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5362);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5363);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5364);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5365);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5366);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5367);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5368);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5369);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5370);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5371);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5372);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5373);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5374);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5375);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5376);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5377);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5378);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5379);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5380);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5381);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5382);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5383);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5384);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5385);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5386);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5387);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5388);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5389);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5390);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5391);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5392);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5393);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5394);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5395);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5396);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5397);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5398);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5399);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5400);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5401);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5402);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5403);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5404);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5405);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5406);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5407);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5408);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5409);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5410);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5411);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5412);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5413);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5414);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5415);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5416);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5417);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5418);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5419);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5420);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5421);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5422);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5423);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5424);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5425);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5426);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5427);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5428);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5429);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5430);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5431);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5432);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 5433);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5434);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5435);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5436);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 5437);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5438);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5439);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5440);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5441);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5442);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5443);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5444);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5445);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5446);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5447);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5448);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5449);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5450);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5451);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5452);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5453);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5454);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5455);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5456);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5457);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5458);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5459);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5460);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5461);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5462);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5463);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5464);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5465);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5466);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5467);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5468);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5469);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5470);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5471);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5472);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5473);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5474);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5475);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5476);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5477);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5478);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5479);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5480);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5481);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5482);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5483);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5484);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5485);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5486);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5487);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5488);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5489);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5490);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5491);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5492);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5493);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5494);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5495);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5496);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5497);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5498);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5499);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5500);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5501);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5502);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5503);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5504);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5505);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5506);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5507);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5508);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5509);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5510);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5511);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5512);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5513);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5514);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5515);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5516);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5517);
})();

await (async () => {
  console.log('neon { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5518);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5519);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5520);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5521);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 5522);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5523);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5524);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5525);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 5526);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5527);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5528);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5529);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5530);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5531);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5532);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5533);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5534);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5535);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5536);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5537);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5538);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5539);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5540);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5541);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5542);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5543);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5544);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5545);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5546);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5547);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5548);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5549);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5550);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5551);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5552);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5553);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5554);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5555);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5556);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5557);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5558);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5559);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5560);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5561);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5562);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5563);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5564);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5565);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5566);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5567);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5568);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5569);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5570);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5571);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5572);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5573);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5574);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5575);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5576);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5577);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5578);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5579);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5580);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5581);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5582);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5583);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5584);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5585);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5586);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5587);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5588);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5589);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5590);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5591);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5592);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5593);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5594);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5595);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5596);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5597);
})();

await (async () => {
  console.log('neon { arrayMode: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5598);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5599);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5600);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5601);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5602);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5603);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5604);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5605);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5606);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5607);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5608);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5609);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5610);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'array', 5611);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5612);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5613);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5614);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 5615);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5616);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5617);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5618);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5619);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5620);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5621);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5622);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5623);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5624);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5625);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5626);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5627);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5628);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5629);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5630);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5631);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5632);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5633);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5634);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5635);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5636);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5637);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5638);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5639);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5640);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5641);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5642);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5643);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5644);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5645);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5646);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5647);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5648);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5649);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5650);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5651);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5652);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5653);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5654);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5655);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5656);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5657);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5658);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5659);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5660);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5661);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5662);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5663);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5664);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5665);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5666);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5667);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5668);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5669);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5670);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5671);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5672);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5673);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5674);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5675);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5676);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5677);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5678);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5679);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5680);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5681);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5682);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5683);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5684);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5685);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5686);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5687);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5688);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5689);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5690);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5691);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5692);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5693);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5694);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5695);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5696);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5697);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5698);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5699);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 5700);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5701);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5702);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5703);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 5704);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5705);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5706);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5707);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5708);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5709);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5710);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5711);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5712);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5713);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5714);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5715);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5716);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5717);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5718);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5719);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5720);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5721);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5722);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5723);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5724);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5725);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5726);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5727);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5728);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5729);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5730);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5731);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5732);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5733);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5734);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5735);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5736);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5737);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5738);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5739);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5740);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5741);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5742);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5743);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5744);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5745);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5746);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5747);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5748);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5749);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5750);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5751);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5752);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5753);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5754);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5755);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5756);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5757);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5758);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5759);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5760);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5761);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5762);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5763);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5764);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5765);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5766);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5767);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5768);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5769);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5770);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5771);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5772);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5773);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5774);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5775);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5776);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5777);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5778);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5779);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5780);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5781);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5782);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5783);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5784);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5785);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5786);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5787);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5788);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 5789);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5790);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5791);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5792);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 5793);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5794);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5795);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5796);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5797);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5798);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5799);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5800);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5801);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5802);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5803);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5804);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5805);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5806);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5807);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5808);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5809);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5810);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5811);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5812);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5813);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5814);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5815);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5816);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5817);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5818);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5819);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5820);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5821);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5822);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5823);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5824);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5825);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5826);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5827);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5828);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5829);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5830);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5831);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5832);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5833);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5834);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5835);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5836);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5837);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5838);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5839);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5840);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5841);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5842);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5843);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5844);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5845);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5846);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5847);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5848);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5849);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5850);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5851);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5852);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5853);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5854);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5855);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5856);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5857);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5858);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5859);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5860);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5861);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5862);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5863);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5864);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5865);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5866);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5867);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5868);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5869);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5870);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5871);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 5872);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 5873);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5874);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5875);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5876);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5877);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'array', 5878);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5879);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5880);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5881);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 5882);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5883);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5884);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5885);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5886);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5887);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5888);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5889);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5890);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5891);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5892);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5893);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5894);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5895);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5896);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5897);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5898);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5899);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5900);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5901);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5902);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5903);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5904);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5905);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5906);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5907);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5908);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5909);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5910);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5911);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5912);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5913);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5914);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5915);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5916);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5917);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 5918);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5919);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5920);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5921);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5922);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5923);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5924);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5925);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5926);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 5927);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5928);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5929);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 5930);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 5931);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5932);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5933);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5934);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5935);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 5936);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5937);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5938);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5939);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5940);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5941);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5942);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5943);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5944);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 5945);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5946);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5947);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5948);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5949);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5950);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5951);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5952);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5953);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 5954);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5955);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5956);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5957);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5958);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 5959);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 5960);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5961);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5962);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 5963);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5964);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5965);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5966);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 5967);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5968);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5969);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5970);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 5971);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5972);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5973);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5974);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5975);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5976);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5977);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5978);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5979);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 5980);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5981);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 5982);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5983);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5984);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5985);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5986);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5987);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5988);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 5989);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 5990);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 5991);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 5992);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 5993);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 5994);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 5995);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 5996);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 5997);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 5998);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 5999);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6000);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6001);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6002);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6003);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6004);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6005);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6006);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6007);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6008);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6009);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6010);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6011);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6012);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6013);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6014);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6015);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6016);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6017);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6018);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6019);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6020);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6021);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6022);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6023);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6024);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6025);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6026);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6027);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6028);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6029);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6030);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6031);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6032);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6033);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6034);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6035);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6036);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6037);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6038);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6039);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6040);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6041);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6042);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6043);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6044);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6045);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6046);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6047);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6048);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6049);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6050);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6051);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 6052);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6053);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6054);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6055);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 6056);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6057);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6058);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6059);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 6060);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6061);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6062);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6063);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6064);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6065);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6066);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6067);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6068);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6069);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6070);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6071);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6072);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6073);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6074);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6075);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6076);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6077);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6078);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6079);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6080);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6081);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6082);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6083);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6084);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6085);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6086);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6087);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6088);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6089);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6090);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6091);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6092);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6093);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6094);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6095);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6096);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6097);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6098);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6099);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6100);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6101);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6102);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6103);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6104);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6105);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6106);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6107);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6108);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6109);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6110);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6111);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6112);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6113);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6114);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6115);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6116);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6117);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6118);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6119);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6120);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6121);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6122);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6123);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6124);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6125);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6126);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6127);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6128);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6129);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6130);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6131);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6132);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6133);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6134);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6135);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6136);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6137);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6138);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6139);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6140);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 6141);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6142);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6143);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6144);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'array', 6145);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6146);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6147);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6148);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 6149);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6150);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6151);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6152);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6153);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6154);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6155);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6156);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6157);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6158);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6159);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6160);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6161);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6162);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6163);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6164);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6165);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6166);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6167);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6168);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6169);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6170);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6171);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6172);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6173);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6174);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6175);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6176);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6177);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6178);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6179);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6180);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6181);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6182);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6183);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6184);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6185);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6186);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6187);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6188);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6189);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6190);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6191);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6192);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6193);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6194);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6195);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6196);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6197);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6198);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6199);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6200);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6201);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6202);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6203);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6204);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6205);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6206);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6207);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6208);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6209);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6210);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6211);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6212);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6213);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6214);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6215);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6216);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6217);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6218);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6219);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6220);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6221);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6222);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6223);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6224);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6225);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6226);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6227);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6228);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6229);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 6230);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6231);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6232);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6233);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 6234);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6235);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6236);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6237);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 6238);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6239);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6240);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6241);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6242);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6243);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6244);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6245);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6246);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6247);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6248);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6249);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6250);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6251);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6252);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6253);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6254);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6255);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6256);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6257);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6258);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6259);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6260);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6261);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6262);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6263);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6264);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6265);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6266);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6267);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6268);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6269);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6270);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6271);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6272);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6273);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6274);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6275);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6276);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6277);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6278);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6279);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6280);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6281);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6282);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6283);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6284);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6285);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6286);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6287);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6288);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6289);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6290);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6291);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6292);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6293);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6294);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6295);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6296);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6297);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6298);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6299);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6300);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6301);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6302);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6303);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6304);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6305);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6306);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6307);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6308);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6309);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6310);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6311);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6312);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6313);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6314);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6315);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6316);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6317);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6318);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'array', 6319);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6320);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6321);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6322);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 6323);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6324);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6325);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6326);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 6327);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6328);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6329);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6330);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6331);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6332);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6333);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6334);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6335);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6336);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6337);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6338);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6339);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6340);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6341);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6342);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6343);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6344);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6345);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6346);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6347);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6348);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6349);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6350);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6351);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6352);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6353);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6354);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6355);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6356);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6357);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6358);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6359);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6360);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6361);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6362);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6363);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6364);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6365);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6366);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6367);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6368);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6369);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6370);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6371);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6372);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6373);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6374);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6375);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6376);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6377);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6378);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6379);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6380);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6381);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6382);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6383);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6384);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6385);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6386);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6387);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6388);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6389);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6390);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6391);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6392);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6393);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6394);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6395);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6396);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6397);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6398);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: false }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: false });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6399);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6400);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6401);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6402);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6403);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6404);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6405);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6406);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6407);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6408);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6409);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6410);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6411);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], /* {} */);
  expectType(sqlOptRes, 'object', 6412);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6413);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6414);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6415);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], /* {} */);
  expectType(txnRes, 'array', 6416);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6417);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6418);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6419);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6420);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6421);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6422);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6423);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6424);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6425);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6426);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6427);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6428);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6429);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6430);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6431);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6432);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6433);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6434);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6435);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6436);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6437);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6438);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6439);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6440);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6441);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6442);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6443);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6444);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6445);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6446);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6447);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6448);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6449);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6450);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6451);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6452);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6453);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6454);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6455);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6456);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6457);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6458);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6459);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6460);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6461);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6462);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6463);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6464);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6465);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6466);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6467);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6468);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6469);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6470);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6471);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6472);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6473);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6474);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6475);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6476);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6477);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6478);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6479);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6480);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6481);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6482);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6483);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6484);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6485);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6486);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6487);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql /* {} */');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], /* {} */),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6488);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6489);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6490);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6491);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6492);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6493);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6494);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6495);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6496);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6497);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6498);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6499);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6500);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: false });
  expectType(sqlOptRes, 'array', 6501);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6502);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6503);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6504);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 6505);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6506);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6507);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6508);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6509);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6510);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6511);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6512);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6513);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6514);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6515);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6516);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6517);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6518);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6519);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6520);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6521);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6522);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6523);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6524);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6525);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6526);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6527);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6528);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6529);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6530);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6531);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6532);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6533);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6534);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6535);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6536);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6537);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6538);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6539);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6540);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6541);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6542);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6543);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6544);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6545);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6546);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6547);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6548);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6549);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6550);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6551);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6552);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6553);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6554);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6555);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6556);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6557);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6558);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6559);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6560);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6561);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6562);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6563);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6564);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6565);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6566);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6567);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6568);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6569);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6570);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6571);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6572);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6573);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6574);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6575);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6576);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6577);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6578);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6579);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6580);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6581);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6582);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6583);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6584);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6585);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6586);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6587);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6588);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6589);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { fullResults: true });
  expectType(sqlOptRes, 'object', 6590);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6591);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6592);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6593);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 6594);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6595);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6596);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6597);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6598);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6599);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6600);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6601);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6602);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6603);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6604);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6605);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6606);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6607);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6608);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6609);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6610);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6611);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6612);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6613);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6614);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6615);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6616);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6617);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6618);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6619);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6620);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6621);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6622);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6623);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6624);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6625);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6626);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6627);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6628);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6629);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6630);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6631);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6632);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6633);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6634);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6635);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6636);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6637);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6638);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6639);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6640);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6641);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6642);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6643);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6644);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6645);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6646);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6647);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6648);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6649);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6650);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6651);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6652);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6653);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6654);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6655);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6656);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6657);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6658);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6659);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6660);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6661);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6662);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6663);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6664);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6665);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6666);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6667);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6668);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6669);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6670);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6671);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6672);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6673);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6674);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6675);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6676);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6677);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6678);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false });
  expectType(sqlOptRes, 'object', 6679);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6680);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6681);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6682);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 6683);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6684);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6685);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6686);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6687);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6688);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6689);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6690);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6691);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6692);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6693);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6694);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6695);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6696);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6697);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6698);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6699);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6700);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6701);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6702);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6703);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6704);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6705);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6706);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6707);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6708);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6709);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6710);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6711);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6712);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6713);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6714);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6715);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6716);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6717);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6718);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6719);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6720);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6721);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6722);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6723);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6724);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6725);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6726);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6727);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6728);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6729);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6730);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6731);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6732);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6733);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6734);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6735);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6736);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6737);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6738);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6739);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6740);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6741);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6742);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6743);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6744);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6745);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6746);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6747);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6748);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6749);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6750);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6751);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6752);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6753);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6754);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6755);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6756);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6757);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6758);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6759);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6760);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6761);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6762);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6763);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6764);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6765);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6766);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6767);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false });
  expectType(sqlOptRes, 'array', 6768);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6769);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6770);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6771);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 6772);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6773);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6774);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6775);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6776);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6777);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6778);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6779);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6780);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6781);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6782);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6783);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6784);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6785);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6786);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6787);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6788);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6789);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6790);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6791);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6792);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6793);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6794);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6795);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6796);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6797);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6798);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6799);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6800);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6801);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6802);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6803);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6804);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6805);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6806);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6807);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6808);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6809);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6810);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6811);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6812);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6813);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6814);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6815);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6816);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6817);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6818);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6819);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6820);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6821);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6822);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6823);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6824);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6825);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6826);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6827);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6828);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6829);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6830);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6831);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6832);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6833);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6834);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6835);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6836);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6837);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6838);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6839);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6840);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6841);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6842);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6843);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6844);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6845);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6846);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6847);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6848);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6849);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6850);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6851);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6852);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6853);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6854);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6855);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6856);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true });
  expectType(sqlOptRes, 'object', 6857);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6858);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6859);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6860);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 6861);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6862);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6863);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6864);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6865);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6866);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6867);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6868);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6869);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6870);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6871);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6872);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6873);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6874);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6875);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6876);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6877);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6878);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6879);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6880);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6881);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6882);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6883);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6884);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6885);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6886);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6887);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6888);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6889);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6890);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6891);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6892);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6893);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6894);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6895);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6896);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6897);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6898);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6899);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6900);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6901);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6902);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6903);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6904);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6905);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6906);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6907);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6908);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6909);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6910);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6911);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6912);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6913);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6914);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 6915);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6916);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6917);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6918);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6919);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6920);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6921);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6922);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6923);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 6924);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6925);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6926);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6927);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6928);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6929);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6930);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6931);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6932);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: false, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: false, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 6933);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6934);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6935);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6936);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6937);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6938);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6939);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'object', 6940);
  const sqlOptResVal = sqlOptResRow.val;
  expectType(sqlOptResVal, 'number', 6941);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 6942);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6943);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6944);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6945);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true });
  expectType(sqlOptRes, 'object', 6946);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6947);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6948);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6949);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 6950);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6951);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6952);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6953);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6954);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6955);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6956);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6957);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6958);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 6959);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6960);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6961);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6962);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6963);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6964);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6965);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6966);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6967);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 6968);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6969);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6970);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 6971);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 6972);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6973);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6974);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6975);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6976);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 6977);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6978);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6979);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6980);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6981);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 6982);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 6983);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6984);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6985);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 6986);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 6987);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 6988);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6989);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6990);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 6991);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 6992);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 6993);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 6994);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 6995);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 6996);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 6997);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 6998);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 6999);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7000);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7001);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7002);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7003);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 7004);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7005);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7006);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7007);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7008);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7009);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7010);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7011);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7012);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 7013);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7014);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7015);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7016);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7017);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7018);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7019);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7020);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7021);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 7022);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7023);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7024);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7025);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7026);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7027);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7028);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7029);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7030);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 7031);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7032);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7033);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7034);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false });
  expectType(sqlOptRes, 'array', 7035);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7036);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7037);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7038);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], /* {} */);
  expectType(txnRes, 'array', 7039);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7040);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7041);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7042);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7043);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7044);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7045);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7046);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7047);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 7048);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7049);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7050);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7051);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7052);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7053);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7054);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7055);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7056);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 7057);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7058);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7059);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7060);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7061);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7062);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7063);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7064);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7065);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 7066);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7067);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7068);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 7069);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 7070);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7071);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7072);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7073);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7074);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 7075);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7076);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7077);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 7078);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 7079);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7080);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7081);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7082);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7083);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 7084);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7085);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7086);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 7087);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 7088);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7089);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7090);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7091);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7092);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 7093);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7094);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7095);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7096);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7097);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7098);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7099);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7100);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7101);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 7102);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7103);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7104);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7105);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7106);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7107);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7108);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7109);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7110);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: false }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: false }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 7111);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7112);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7113);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7114);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7115);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'array', 7116);
  const sqlOptResRows = sqlOptRes;
  expectType(sqlOptResRows, 'array', 7117);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7118);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7119);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  // template string query
  const sqlRes = await sql`SELECT 1 AS val`;
  expectType(sqlRes, 'object', 7120);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7121);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7122);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7123);
  // query with options
  const sqlOptRes = await sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true });
  expectType(sqlOptRes, 'object', 7124);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7125);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7126);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7127);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn /* {} */, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], /* {} */);
  expectType(txnRes, 'array', 7128);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7129);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7130);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7131);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7132);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7133);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7134);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7135);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7136);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: false });
  expectType(txnRes, 'array', 7137);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7138);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7139);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7140);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7141);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7142);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7143);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7144);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7145);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { fullResults: true });
  expectType(txnRes, 'array', 7146);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7147);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7148);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7149);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7150);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7151);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7152);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7153);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7154);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false });
  expectType(txnRes, 'array', 7155);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7156);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7157);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 7158);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 7159);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7160);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7161);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7162);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7163);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: false });
  expectType(txnRes, 'array', 7164);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7165);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7166);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 7167);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 7168);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7169);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7170);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7171);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7172);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: false, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: false, fullResults: true });
  expectType(txnRes, 'array', 7173);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7174);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7175);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'object', 7176);
  const sqlResVal = sqlResRow.val;
  expectType(sqlResVal, 'number', 7177);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7178);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7179);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7180);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7181);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true });
  expectType(txnRes, 'array', 7182);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7183);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7184);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7185);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7186);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7187);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7188);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7189);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7190);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: false }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: false });
  expectType(txnRes, 'array', 7191);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'array', 7192);
  const sqlResRows = sqlRes;
  expectType(sqlResRows, 'array', 7193);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7194);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7195);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7196);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7197);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7198);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7199);
})();

await (async () => {
  console.log('neon { arrayMode: true, fullResults: true }, txn { arrayMode: true, fullResults: true }, sql { arrayMode: true, fullResults: true }');
  const sql = neon(dburl, { arrayMode: true, fullResults: true });
  const txnRes = await sql.transaction([
    sql`SELECT 1 AS val`,
    sql('SELECT 1 AS val', [], { arrayMode: true, fullResults: true }),
  ], { arrayMode: true, fullResults: true });
  expectType(txnRes, 'array', 7200);
  // template string query
  const sqlRes = txnRes[0];
  expectType(sqlRes, 'object', 7201);
  const sqlResRows = sqlRes.rows;
  expectType(sqlResRows, 'array', 7202);
  const sqlResRow = sqlResRows[0];
  expectType(sqlResRow, 'array', 7203);
  const sqlResVal = sqlResRow[0];
  expectType(sqlResVal, 'number', 7204);
  // query with options
  const sqlOptRes = txnRes[1];
  expectType(sqlOptRes, 'object', 7205);
  const sqlOptResRows = sqlOptRes.rows;
  expectType(sqlOptResRows, 'array', 7206);
  const sqlOptResRow = sqlOptResRows[0];
  expectType(sqlOptResRow, 'array', 7207);
  const sqlOptResVal = sqlOptResRow[0];
  expectType(sqlOptResVal, 'number', 7208);
})();
