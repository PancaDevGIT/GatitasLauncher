/**
 * @author PancaDev
 */

const pkg = require('../package.json');
const fetch = require("node-fetch");
let url = pkg.user ? `${pkg.url}/${pkg.user}` : pkg.url || 'defaultUrl';
let config = `${url}/launcher/config-launcher/config.json`;

class Config {
    GetConfig() {
        return new Promise((resolve, reject) => {
            fetch(config)
            .then(config => {
                return resolve(config.json());
            })
            .catch(error => {
                return reject(error);
            })
        })
    }
}

export default new Config;