export function getCookies(): { [key: string]: string } {
  var pairs = document.cookie.split(";").filter(n => n)
  var cookies: { [key: string]: string } = {}
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}

export function setCookie(nome: string, valor: string, durationDias = 15): void {
  var duracao = new Date()
  duracao.setDate(duracao.getDate() + durationDias)
  var dominioPrincipal = /(?<=\.).+/.exec(location.hostname)
  var cookiePeriodo = nome + "=" + encodeURIComponent(valor)
  cookiePeriodo += (duracao ? "; expires=" + duracao.toUTCString() : "")
  if (dominioPrincipal) cookiePeriodo += "; domain=" + dominioPrincipal[0]
  cookiePeriodo += ';path=/;'
  document.cookie = cookiePeriodo;
}