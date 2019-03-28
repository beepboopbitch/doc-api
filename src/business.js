
export class Doc {

  getDoc(specialty, name) {
    const apiKey = process.env.exports.apiKey;
    return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.51,-122.65,11&user_key=${apiKey}&specialty_uid=${specialty}&name=${name}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
      request.open("GET", url, true);
      request.send();
    });
  }
  checkResults(body) {
    if(!Object.keys(body.data).length) {
      return false;
    } else {
      return true;
    }
  }

}
