# VÍDEO+ Pro — versão visual profissional

Projeto mobile-first com Next.js + Supabase Auth, cadastro/login e painel inicial do dono.

## Importante
Este ZIP é o código-fonte; **não é ainda um site público hospedado**. Para o login funcionar online, conecte um projeto Supabase e publique a aplicação em um serviço como Vercel. O projeto não contém sua senha e não deve conter senhas de usuário.

## Configuração pelo celular
1. Crie um projeto no Supabase.
2. Abra o **SQL Editor** do Supabase e execute todo o conteúdo de `supabase/schema.sql`.
3. Em **Project Settings → API**, copie a Project URL e a chave pública/anon.
4. Crie um arquivo `.env.local` com base em `.env.example` e preencha:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_OWNER_EMAIL=aetiago035@gmail.com`
5. Publique o repositório em GitHub e importe-o no Vercel. Cadastre as mesmas variáveis nas configurações do projeto e faça o deploy.
6. Abra o endereço que o Vercel gerar, escolha **Criar conta** e cadastre-se com `aetiago035@gmail.com`. O SQL marca esse e-mail como admin quando a conta é criada. Se a conta já existia, o SQL também tenta promovê-la.
7. Entre com a senha que você criar diretamente na página de cadastro/login.

## Segurança e limitações desta versão
- A conta administrativa é baseada no e-mail do dono e no cargo `admin` no banco.
- A chave `service_role` do Supabase nunca deve ser colocada no navegador ou no repositório.
- O painel administrativo desta versão é a base visual/inicial; a gestão completa de vídeos, denúncias, banimentos e métricas ainda precisa ser implementada.
- Uploads e reprodução de vídeo reais precisam de um provedor de vídeo e endpoints seguros; não prometa uploads ilimitados sem revisar custos, limites e regras do serviço.
- Configure confirmação de e-mail, recuperação de senha, limites contra abuso, termos, privacidade e fluxo de direitos autorais antes de abrir ao público.
- Não use a senha compartilhada no chat. Crie uma senha nova e exclusiva diretamente no site depois de publicá-lo.
