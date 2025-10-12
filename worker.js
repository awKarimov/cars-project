function filterByType(data, type) {
  const types = data.map((el) => el[type]);
  const result = Array.from(new Set(types));
  return result;
}

const actions = {
  filterByType,
};

onmessage = (evt) => {
  const func = evt.data.functionName;
  const params = evt.data.params;

  const result = actions[func](...params);

  postMessage(result);
};
