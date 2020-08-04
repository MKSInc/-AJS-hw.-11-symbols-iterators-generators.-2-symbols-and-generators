export default function canIterate(item) {
  try {
    return !!item[Symbol.iterator];
  } catch (e) {
    return false;
  }
}
