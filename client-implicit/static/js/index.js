const accessTokenKey = 'accessToken';
const clientId = 'hello-client-implicit';
const authEndpointUrl = 'http://localhost:9000/auth/realms/hello-api/protocol/openid-connect/auth';
const resourceServerUrl = 'http://localhost:8090/hello';
const redirectUri = 'http://localhost:8080/callback.html';

const spanMessage = document.getElementById('span-message');
const divLoginLogout = document.getElementById('div-login-logout');

const getMessage = async () => {
    fetch(resourceServerUrl, {
        // mode: 'cors',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }).then(response => response.json()
    ).then(json => {
        spanMessage.innerHTML = json.message;
    }).catch(error => {
        alert(error.message);
    });
};

const goToAuthEndpoint = () => {
    location.href = `${authEndpointUrl}?response_type=token&client_id=${clientId}&state=xyz&scope=hello&redirect_uri=${encodeURI(redirectUri)}`;
};

const accessToken = sessionStorage.getItem(accessTokenKey);

if (!accessToken) {
    // アクセストークン未取得の場合
    spanMessage.innerHTML = 'アクセストークン未取得です。';
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = 'ログイン';
    buttonElement.addEventListener('click', (event) => {
        // ログインボタンがクリックされたら、認可エンドポイントにアクセス
        goToAuthEndpoint();
    });
    divLoginLogout.appendChild(buttonElement);
} else {
    // アクセストークン取得済みの場合
    getMessage();
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = 'ログアウト';
    buttonElement.addEventListener('click', (event) => {
        // ログアウトボタンがクリックされたら、アクセストークンを削除して画面を再読み込み
        sessionStorage.removeItem(accessTokenKey);
        location.reload();
    });
    divLoginLogout.appendChild(buttonElement);
}
