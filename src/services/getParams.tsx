function rawurldecode(str: string) {
  return decodeURIComponent((str + '').replace(/%(?![\da-f]{2})/gi, function () {
    return '%25'
  }))
}

export const getParams = (): string => {
  let initRef = rawurldecode(window.location.href);
  let initRef2 = new URL(initRef);
  return initRef2.search;
};