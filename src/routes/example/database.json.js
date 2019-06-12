import * as db from '../_db'

export async function get(req, res) {
    try {
        const ret = await db.query('select * from tt1')
        const result = JSON.stringify(ret.rows)
        res.setHeader('content-type', 'application/json')
        res.end(result)
    } catch (e) {
        console.log(e.stack)
        res.end(JSON.stringify({ err: 'something wrong' }))
    }
}