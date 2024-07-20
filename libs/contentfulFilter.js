export function contentfulFilter(data, id) {
  return data.items.filter((item) => item.sys.contentType.sys.id === id);
}