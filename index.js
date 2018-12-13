const child_process = require('child_process');
const kxcli = require('kxcli');
const version = require('./package.json').version;

exports.name = 'kxcli';

exports.desc = 'xg kxcli plugin, using kxcli';

exports.options = {
    '-v, --version': 'version',
    '-m': 'create new module',
    '-h, --help': 'print this help message'
};

exports.run = function (argv, cli, env) {
    // 显示帮助信息
    if(argv.h || argv.help) {
        return cli.help(exports.name, exports.options);
    }

    if(argv.v || argv.version) {
        console.log(`kxcli verson ${kxcli.version}`);
        console.log(`xg-command-kxcli version ${version}`);
    }
    if(argv.m) {
        child_process.exec(`kxcli -m ${argv.m}`);
    }
};