export function getCookies(): { [key: string]: string } {
  const pairs = document.cookie.split(";").filter((n) => n);
  const cookies: { [key: string]: string } = {};
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
  }
  return cookies;
}

export function setCookie(nome: string, valor: string, durationDias = 15): void {
  const duracao = new Date();
  duracao.setDate(duracao.getDate() + durationDias);
  const dominioPrincipal = /(?<=\.).+/.exec(location.hostname);
  let cookiePeriodo = nome + "=" + encodeURIComponent(valor);
  cookiePeriodo += duracao ? "; expires=" + duracao.toUTCString() : "";
  if (dominioPrincipal) cookiePeriodo += "; domain=" + dominioPrincipal[0];
  cookiePeriodo += ";path=/;";
  document.cookie = cookiePeriodo;
}
