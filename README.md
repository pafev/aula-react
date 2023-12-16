Primeiro, o que é API né? É uma interface para comunicação entre partes do nosso código, mais especificamente queremos comunicar/integrar o nosso banco de dados (prisma) com o nosso front (páginas do next)

## em prisma/index.ts

- aqui criei uma instância de cliente prisma para utilizarmos de forma global em toda aplicação, evitando criar múltiplos clientes prisma em trechos diferentes do código, evitando assim vazamento de memória

## em @/pages/api/

- nessa parte é onde estamos construindo a api do lado do servidor, então criei um arquivo para criar interações com uma model do prisma (model Gender)

## em @/pages/api/gender/[slug].ts

- esse arquivo representa uma rota da nossa API. Quando acessando a api do lado do servidor, vamos utilizar a URL "localhost:3000/api/gender/alguma-coisa", onde esse "alguma-coisa" vai para o slug
- criei então de forma interativa maneiras de usar nossa api, pelo lado do servidor:
  - "localhost:3000/api/gender/index" me retorna todos os gêneros do banco de dados
  - "localhost:3000/api/gender/show" me retorna um gênero em específico do banco de dados
  - "localhost:3000/api/gender/create" me permite criar um gênero no banco de dados
  - etc.

## em @/clientApi

- Agora aqui estamos finalizando a construção dessa interface de comunicação, criando funções para API no lado do cliente. O que significa? é só que basicamente criei funções, que vamos chamar no front mesmo (nas páginas), e essas funções vão executar uma chamada a uma das rotas da API que fizemos
- A parte mais essencial e importante do por que fazemos essa separação é para tornar a nossa API type safe. Agora o que isso significa? é que queremos chamar funções no front onde já sabemos o que devemos passar de parâmetro e o que devemos esperar de retorno (queremos um auto-complete legalzinho, só apertar ctrl + espaço e ver o que tenho q passar de parâmetro para função)
- E como que essa separação torna a api type safe e dá esse auto-complete? Quando for ver as funções nesse clientApi, perceba que tipei os parâmetros das funções e o seu retorno, e só isso já basta (vamos nos aproveitar da magia do TypeScript)

## em @/clientApi/gender/

- Aqui criei funções para utilizar as rotas da API referentes ao Gender e tipei elas para tornar a api type safe
- Perceba que muitas vezes me aproveitei do tipo Gender que o próprio prisma cria pra mim, quando criei a model Gender e dei um "npx prisma db push"

## em @/clientApi/api.ts

- esse arquivo cria uma instância do axios que vamos utilizar para ligar a api do lado do cliente com a api do lado do servidor. Então, em todas as funções do clientApi, eu utiilizo essa instância chamada "api" msm
