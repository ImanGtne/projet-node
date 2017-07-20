class IndexCtrl {
    constructor(config) {
        this._config = config;
    }

    index(req, res) {
        console.log(this);
        console.log(this._config);

        const name = req.params.name || 'inconnu';

        res.render('index', {
            name
        });
    }

    auth(req, res) {
        console.log(req.body);

        res.redirect('/');
    }
}

module.exports = IndexCtrl;