import { query } from '../_db'

export function get(req, res) {
    res.setHeader('Content-Type', 'application/json')
    query('select name, score, created_at as ts from scoreboard order by ts desc', (err, ret) => {
        if (err) {
            console.log(err)
            res.end(JSON.stringify({ err: 'error' }))
        } else {
            res.end(JSON.stringify(ret.rows))
        }
    })
}

export function post(req, res) {
    res.setHeader('Content-Type', 'application/json')
    query('select name, score, created_at as ts from scoreboard order by ts desc', (err, ret) => {
        if (err) {
            console.log(err)
            res.end(JSON.stringify({ err: 'error' }))
        } else {
            res.end(JSON.stringify(ret.rows))
        }
    })
}