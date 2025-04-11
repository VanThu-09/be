const getHomePage = (req, res) => {
    res.send('Hello World! voi van')
}
const get1 = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage, get1
}