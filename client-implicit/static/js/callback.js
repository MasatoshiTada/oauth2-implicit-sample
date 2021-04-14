const params = location.href.split('#')[1].split('&');
const accessToken = params.find(param => param.startsWith('access_token')).split('=')[1];
sessionStorage.setItem('accessToken', accessToken);
location.href = '/';
