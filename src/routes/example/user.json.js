export function get(req, res) {
    let msg = []
    for (let i = 1; i <= 20; i++) {
        msg.push({
            name: `user ${i}`,
            score: Math.random() * 100,
        })
    }
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(msg))
}