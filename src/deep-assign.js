export default function deepAssign(base = {}, ...rest) {
  return rest.reduce((assigned, obj) => {
    return Object.keys(obj || {}).reduce((nestedAssigned, key) => {
      nestedAssigned[key] = Object.assign(
        nestedAssigned[key] || {},
        obj[key] || {}
      );
      return nestedAssigned;
    }, assigned);
  }, base);
}
