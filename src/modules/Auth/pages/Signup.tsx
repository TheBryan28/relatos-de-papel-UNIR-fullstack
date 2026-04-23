import { useState, type SubmitEvent } from 'react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    console.log('USUARIO REGISTRADO', { name, email, password })
  }

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-(--line) bg-white/70 px-4 py-3 text-[15px] text-(--ink) outline-none transition placeholder:text-(--muted) focus:border-(--ink) focus:bg-white'

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--paper) px-4 py-6 text-(--ink) sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(17,17,17,0.08)_1px,transparent_0)] bg-size-[18px_18px] opacity-40" />
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col gap-6 rounded-[36px] border border-(--line) bg-(--surface)/80 p-4 shadow-[0_32px_90px_rgba(17,17,17,0.08)] backdrop-blur-sm md:p-6">
        
          <section className="flex items-center">
              <Card className="w-full bg-white/70 p-6 md:p-8 lg:sticky lg:top-6">
              <div className="space-y-3">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-(--muted)">
                  Sign up
                </p>
                <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  Create your account.
                </h2>
                <p className="text-base leading-7 text-(--muted)">
                  The form uses the same monochrome system as the cards and
                  buttons, so the whole flow feels consistent.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-[0.16em] text-(--muted)">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className={fieldClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-[0.16em] text-(--muted)">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@paper.com"
                    className={fieldClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-bold uppercase tracking-[0.16em] text-(--muted)">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className={fieldClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="text-sm font-bold uppercase tracking-[0.16em] text-(--muted)">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat the password"
                    className={fieldClass}
                    required
                  />
                </div>

                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <Button type="submit" variant="primary" className="w-full cursor-pointer">
                    Sign up
                  </Button>
                </div>
              </form>
            </Card>
          </section>
      </div>
    </main>
  )
}

export default Signup