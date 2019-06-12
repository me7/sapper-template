import { Pool } from 'pg'

const pool = new Pool({
    database: 'ddd',
    user: 'uuu',
    password: 'ppp'
})

export function query(text, params, callback) {
    return pool.query(text, params, callback)
}

export function dbName() {
    return "DbName is pg"
}