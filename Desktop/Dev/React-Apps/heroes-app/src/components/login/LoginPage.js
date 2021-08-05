import React from 'react'

export const LoginPage = ({ history }) => {

  const handleLogin = () => {
    /* history.push('/'); */
    history.replace('/'); /* de esta forma el navegador entiende que no se ha visitado el login y el usuario aunque presione ir atras en su navegador, LoginPage no se va a mostrar */
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Ingresar
      </button>
    </div>
  )
}
