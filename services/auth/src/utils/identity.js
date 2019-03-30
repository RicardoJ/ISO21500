const FlakeId = require('flake-idgen');
const intformat = require('biguint-format');
const idGenerator = new FlakeId();

function nextId() {
  return intformat(idGenerator.next(), 'dec');
}

module.exports.nextId = nextId;
