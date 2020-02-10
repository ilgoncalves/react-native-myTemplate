export const host = 'https://google.com.br/'

class Api {

  static headers() {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  static formDataHeaders() {
    return new Headers({
      'Accept': 'application/json'
    })
  }

  static get(route, header) {
    return this.xhr(route, null, 'GET', header);
  }

  static put(route, params, header) {
    return this.xhr(route, params, 'PUT', header)
  }

  static post(route, params, header) {
    return this.xhr(route, params, 'POST', header)
  }

  static delete(route, params, header) {
    return this.xhr(route, params, 'DELETE', header)
  }

  static xhr(route, params, verb, header) {

    const url = `${host}${route}`
    let options = {}
    if (params instanceof FormData) {
      options = Object.assign({ method: verb }, params ? { body: params } : null);
      options.headers = Api.formDataHeaders();
    } else {
      options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
      options.headers = Api.headers()
    }
    if (header) {
      options.headers.append("Authorization", header);
    }
    return fetch(url, options).then(resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => { throw err });
    });
  }
}
export { Api };
