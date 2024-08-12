// import googleButton from './assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'

function navigate(url) {
    window.location.href = url;
}

async function auth() {
    const response = await fetch('http://127.0.0.1:1234/request', { method: 'post' });

    const data = await response.json();
    console.log(data);
    navigate(data.url);

}


function Login() {


    return (
        <>
            <h1>Welcome to Khorouga!</h1>
            <h3>Google OAuth!</h3>

            <button className="btn-auth" type="button" onClick={() => auth()}>
                login
                {/* <img className="btn-auth-img" src={googleButton} alt='google sign in' /> */}
            </button>
        </>
    )
}

export default Login;