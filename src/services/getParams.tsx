function rawurldecode(str: string) {
  return decodeURIComponent(
    (str + "").replace(/%(?![\da-f]{2})/gi, function () {
      return "%25";
    })
  );
}

export const getParams = (): string => {
  const initRef = rawurldecode(window.location.href);
  const initRef2 = new URL(initRef);
  return initRef2.search;
};
