export function get(req, res) {
    res.setHeader('Content-Type', 'appplication/json')
    let ret = [
        {
            user: 'gampol',
            machine: 'ict 6',
            type: 'setup',
            note: 'setup ps100',
            status: 'wait for technician',
            ts: '2019-06-17T00:45:45Z'
        },
        {
            user: 'seksan',
            machine: 'ict 5',
            status:'wait for technician',
            type: 'setup',
            note: 'setup ps100',
            ts: '2019-06-17T01:45:45Z'
        },
    ]
    res.end(JSON.stringify(ret))
}

export async function post(req, res, next){
    res.setHeader('Content-type', 'application/json')
    var data = req.body
    console.log(data)
    res.end(JSON.stringify(data))
}