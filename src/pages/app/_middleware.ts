import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/',  // quando o usuário não estiver autenticado, redireciona para /
    error: '/' // se der algum erro, redireciona para /. Poderia ter uma página de erro
  }
})