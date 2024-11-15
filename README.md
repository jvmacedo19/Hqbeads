# Nuxt <> WordPress Headless Boilerplate

Esse projeto tem como objetivo oferecer um molde para realização de projetos em Nuxt 3, usando Vuetify como pacote de UI e comunicante com WordPress via GraphQL, além de ser otimizado para deploy via Vercel.

## Setup

Certifique-se de ter instalado todas as dependências do projeto:

```bash
npm install
```

## Ambiente de desenvolvimento

O ambiente local de desenvolvimento roda em http://localhost:3000 via:

```bash
npm run dev
```

## Utilizando a integração

### Configurações iniciais

Para tornar possível a integração, é possível realizar algumas configurações através do painel WordPress

#### Instalação do plugin WPGraphQL

O plugin permite o uso do GraphQL e interfaceamento através de um endpoint padrão e autenticação via API WordPress.

Ao utilizar o GraphQL em ambiente de desenvolvimento, é necessário ativar a Introspecção Pública, via:

```bash
GraphQL >> Settings >> Enable Public Introspection
```

Dessa forma, é possível realizar as consultas sem grandes problemas.

O endpoint fornecido deve ser salvo no .env do projeto com o nome GQL_HOST, da seguinte forma:

```bash
GQL_HOST="http://{exemplo.com}/graphql"
```

#### Criação da Senha da Aplicação

Para autenticar o projeto Nuxt na API do WordPress, é necessário criar uma senha de aplicação atribuída a um usuário administrador. Para tal, é necessário acessar o perfil do administrador no painel e, no fim da página, criar uma nova senha de aplicativo. Aconselha-se salvar a senha gerada no .env do projeto, pois ela não será mais exibida após fechar a página.

Logo após, é necessário gerar um token de acesso através [deste link](https://www.debugbear.com/basic-auth-header-generator). O token deve ser salvo no .env do projeto com o nome GQL_TOKEN, da seguinte forma:

```bash
GQL_TOKEN="Basic {TOKEN XXX XXX}"
```

#### Instalação do plugin Faust.js™

O plugin permite converter o painel WordPress em um painel headless, de fato, desativando o frontend padrão e linkando ao projeto Nuxt. Após instalação, a única configuração pendente é, no painel do plugin, informar o link do frontend a ser linkado.

#### Tipos personalizados de posts

Recomenda-se a utilização do plugin Custom Post Type UI (CPT UI) para a criação de tipos personalizados de posts, alternativos às páginas e posts padrão. O plugin já possui integração nativa com o GraphQL, não sendo necessário instalar outros plugins para permitir a consulta a esses tipos. Basta, no final da página de criar/editar tipo de post, definir a propriedade `Show in GraphQL` como True, e, em seguida, definir as demais propriedades necessárias.

#### Campos personalizados

Para criação de campos personalizados, recomenda-se a utilização do plugin Advanced Custom Fields (ACF), preferencialmente, na versão Pro. É possível, tendo o arquivo .zip dessa versão, fazer a instalação através da importação de plugins. A visualização dos campos personalizados via GraphQL, entretanto, necessita de um outro plugin, o WPGraphQL for ACF, desenvolvido em parceria com o mesmo time que desenvolve o plugin GraphQL.

### Consultas via GraphQL

Dentro da pasta `queries`, é possível encontrar arquivos contendo as consultas que podem ser feitas ao painel WordPress via GraphQL. A ideia é que cada arquivo seja equivalente a uma consulta diferente, que pode ser importada nos arquivos do projeto Nuxt.

#### page

O arquivo page tem em seu conteúdo a consulta Page, que recebe como argumento o slug da página a ser consultada em formato de string. A consulta retorna as seguintes propriedades da página:

- **content**: Conteúdo textual da página
- **title**: Título da página

#### post

O arquivo post tem em seu conteúdo a consulta Post, que recebe como argumento o slug da postagem a ser consultada em formato de string. A consulta retorna as seguintes propriedades da postagem:

- **id**: ID da postagem, dentro dos padrões do WordPress
- **title**: Título da postagem
- **date**: Data em que a postagem foi feita
- **content**: Conteúdo textual da postagem

#### posts

O arquivo posts tem em seu conteúdo a consulta Posts, que retorna todas as postagens feitas no painel em um único objeto, contendo as seguintes propriedades por postagem:

- **id**: ID da postagem, dentro dos padrões do WordPress
- **title**: Título da postagem
- **date**: Data em que a postagem foi feita
- **content**: Conteúdo textual da postagem

### Importando consultas

É possível utilizar as consultas via GraphQL nos arquivos do projeto Nuxt usando as funções geradas automaticamente pela lib `nuxt-graphql-client`. Essas seguem um padrão de nome que consiste em: *Gql* + *{Nome da query}*.

Por exemplo, para utilizar a consulta Posts, é possível executar a seguinte linha:

```bash
const posts = await GqlPosts()
```

Ao passo que consultas que possuam argumentos - normalmente, slug - devem recebê-los através de objetos, como é o caso da seguinte linha, em que está sendo consultada uma página através do seu slug:

```bash
const query = await GqlPage({ slug: "sample-page" })
```

### Criando singles

Uma single é uma página modelo a ser preenchida com conteúdo variável. Ao criar um blog, por exemplo, todas as páginas referentes a postagens seguirão o mesmo padrão de layout, alterando apenas o conteúdo textual, imagens e demais informações individuais da postagem. É possível criar singles através de arquivos como o `[...slug].vue`. Essa nomenclatura permite que o arquivo em questão sirva como um padrão para todas as URLs que sejam acessadas nesse caminho.

Exemplo: Se um arquivo `[...slug].vue` for criado dentro da pasta *blog*, ao acessar o link `exemplo.com/blog/primeiro` e o link `exemplo.com/blog/segundo`, ambos renderizarão o arquivo em questão. Nesse caso, é possível consultar o slug via `useRoute()`:

```bash
const { path } = useRoute() // Retornará, nos exemplos dados, as strings "/primeiro" e "/segundo"
const slug = path.replace(/\//g, '') // Remove a barra, tratando o path da página para ser, de fato, um slug ("primeiro" e "segundo")
```

Com isso, é possível criar uma single e, usando o slug da postagem em blog, por exemplo, consultar as informações via GraphQL:

```bash
const query = await GqlPost({ slug: slug }) // Faz a consulta com base no slug
const content = query.postBy?.content // Adquire o conteúdo textual da postagem consultada
```