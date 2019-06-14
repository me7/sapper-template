// temporary file for evaluate component
// const md = require('markdown-it')()

// let result = md.render("# header one")
// console.log(result)

function main() {
    const d = require('date-fns')
    var ret = d.distanceInWordsToNow(new Date('2019-6-13 16:50'))
    console.log(ret)
}

main()