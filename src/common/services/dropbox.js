const { Dropbox } = require('dropbox');

const dbx = new Dropbox({
  accessToken:
    'sl.BEorXthxkUoDt_NwBzwYBPVr7h7fx0RfJl8SJuqRHeAQ4x6vkytkJZrCS8qcZkT96EE-r8ud34QjplRf8N8KVNRydp5cTZsTvsqGoOEaogbyOhBkvLKrDxqffWZ9bBnnHBZiHH6j7nnO',
});

module.exports = dbx;
