const params = location.href.split('#')[1].split('&');
const accessToken = params.find(param => param.startsWith('access_token')).split('=')[1];
console.log('本来はどこかに転送とかするけど、簡単化のためにコンソールに表示');
console.log(accessToken);
sessionStorage.setItem('accessToken', accessToken);
location.href = '/';
