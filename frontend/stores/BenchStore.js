var Store = require('flux/utils').Store,
    Dispatcher = require("../dispatcher/Dispatcher");

var _benches = {};

var BenchStore = new Store(Dispatcher);

function updateBenches(data){
  _benches = {};
  for (var i = 0; i < data.length; i++) {
    _benches[data[i].id] = data[i];
  }
  BenchStore.__emitChange();
}

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "GET_BENCHES":
      updateBenches(payload.data);
      break;
  }
};

module.exports = BenchStore;
