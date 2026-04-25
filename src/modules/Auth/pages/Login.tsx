import { useContext, useState, type SubmitEvent } from 'react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import InputText from '../../../components/ui/InputText'
import { mockLogin } from '../../../services/mocks'
import { AuthContext } from '../../../contexts/Auth.Context'

const Login = () => {
  const Auth = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const loggedInUser = mockLogin(email, password)

    if (loggedInUser) {
      // guardar el usuario en el contexto de autenticación o en el estado global
      Auth?.setUser(loggedInUser)
      alert(`Bienvenido, ${loggedInUser.name}!`)
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.')
    }
  }

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-(--input-border) bg-(--input-bg) px-4 py-3 text-[15px] text-(--txt-color) outline-none transition placeholder:text-(--placeholder) focus:border-(--btn-color) focus:bg-(--panel)'

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--bg-color) px-4 py-6 text-(--txt-color) sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--shadow-color),0.08)_1px,transparent_0)] bg-size-[18px_18px] opacity-40" />
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col gap-6 rounded-[36px] border border-(--line) bg-(--panel)/80 p-4 shadow-[0_32px_90px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm md:p-6">
        
          <section className="flex items-center">
              <Card className="w-full bg-(--panel)/70 p-6 md:p-8 lg:sticky lg:top-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-[-0.04em] text-(--txt-color) sm:text-4xl">
                  Login
                </h2>
                <p className="text-base leading-7 text-(--muted)">
                  Ingresa tus credenciales para acceder a tu cuenta.
                </p>
                {error && (
                  <p className="text-sm text-(--error-text)">
                    {error}
                  </p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <InputText
                    id="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="jane@paper.com"
                    className={fieldClass}
                    label="Correo electronico"
                  />
                </div>

                <div>
                  <InputText
                    id="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="Crea una contrasena"
                    type="password"
                    className={fieldClass}
                    label="Contrasena"
                  />
                </div>

                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <Button type="submit" variant="primary" className="w-full cursor-pointer">
                    Ingresar
                  </Button>
                </div>
              </form>
            </Card>
          </section>
      </div>
    </main>
  )
}

export default Login