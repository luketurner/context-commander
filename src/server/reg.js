// reg.js - contains logic for generating the registry file contents.

var util = require('util');

var REG_ROOT_KEY = 'HKEY_CURRENT_USER\\Software\\Classes\\';
var REG_VERSION = 'Windows Registry Editor Version 5.00';

var RegException = function(message) {
    this.message = message;
    this.name = "RegException";
};

// opts.name: Registry key name (must be unique on the system)
// opts.text: Text to display in context menu
// opts.command: Command to execute
// opts.extensions: List of file extensions to apply to
// opts.type: either 'install' or 'uninstall'
var create = function (opts) {
    var name = opts.name;
    var exts = opts.extensions;
    var text = opts.text.replace(/"/g, '\\"');
    var command = opts.command.replace(/([^"]|^)%1(?!")/g, '"%1"').replace(/"/g, '\\"');
    var type = opts.type;

    // Throw an exception if we are handed invalid data.
    if (!name || name.length === 0) throw new RegException('Name is required.');
    if (!text || text.length === 0) throw new RegException('Text is required.');
    if (!command || command.length === 0) throw new RegException('Command is required.');
    if (!exts || exts.length === 0) throw new RegException('Must specify at least one extension.');
    if (/\W/.test(name)) throw new RegException('Name "'+name+'" is invalid.');
    if (type !== 'install' && type !== 'uninstall') {
        throw new RegException('type "' + type + '" is invalid. Should be "install" or "uninstall".');
    }
    for (var ext of exts) {
        if (!(ext === '*' || ext === 'Directory' || ext === 'Background' || (ext.length > 1 && ext[0] === '.'))) {
            throw new RegException('Extension "' + ext + '" is invalid.');
        }
    }

    return REG_VERSION + '\n\n' +
        exts.map((ext) => REG_ROOT_KEY + (ext === 'Background' ? 'Directory\\Background' : ext))
        .map((keyRoot) => (type === 'install' ? installExt : uninstallExt)(keyRoot, name, text, command))
        .join("\n\n");
};

var installExt = function (keyRoot, name, text, command) {
    return  '[' + keyRoot + ']' +
        '\n\n[' + keyRoot + '\\shell]' +
        '\n\n[' + keyRoot + '\\shell\\' + name + ']' +
        '\n@="' + text + '"' +
        '\n\n[' + keyRoot + '\\shell\\' + name + '\\command]' +
        '\n@="' + command + '"';
};

var uninstallExt = function (keyRoot, name, text, command) {
    return  '[-' + keyRoot + '\\shell\\' + name + ']' +
        '\n\n[-' + keyRoot + '\\shell\\' + name + '\\command]';
};

module.exports = {
    create: create
};