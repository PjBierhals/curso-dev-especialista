<h1 align='center'>
  <img src='fdev.png'>
  Iniciando Trilha Especialistas
</h1>

## 📝 Sobre


## ⚔ Tecnologias

- [Node](https://nodejs.org/pt)


**Configuração Inicial**
<p>
No terminal digite:</p>

```
npm init -y

```
O comando vai gerar um arquivo de configuração padrão chamado tsconfig.json.

- npm:  Ferramenta para gerenciar pacotes JavaScript.

<br>

<p>
No terminal digite:</p>

```
npm i -D typescript ts-node-dev

```



- i: Abreviação de install. Este comando instala pacotes.

- D: Abreviação de --save-dev. Especifica que as dependências devem ser salvas como dependências de desenvolvimento no arquivo package.json. Isso significa que elas são necessárias apenas durante o desenvolvimento e não para a execução em produção.

- typescript: Um superset de JavaScript que adiciona tipagem estática ao código.

- ts-node-dev: Uma ferramenta que combina ts-node e nodemon para permitir o desenvolvimento com TypeScript. Ele recompila e reinicia automaticamente o aplicativo Node.js quando mudanças são detectadas nos arquivos TypeScript.

<p>
No terminal digite:</p>

```
npx tsc --init
```

O comando vai gerar um arquivo de configuração padrão chamado tsconfig.json.

- npx: É usado para executar pacotes executáveis do npm sem instalá-los globalmente.

- tsc: Ferramenta que compila arquivos TypeScript (.ts) para JavaScript (.js).

- -init: É uma flag que indica ao tsc que deve gerar um arquivo tsconfig.json com configurações iniciais.

<br>

**Configuração do arquivo tsconfig.json**

No arquivo tsconfig.json configuramos a saida da aplicação para "outDir": "dist",  descomentando  (// "outDir": "./"). 

<br>

**Configuração do arquivo package.json**

 No arquivo package.json na parte de 
```
 scripts.   "scripts": {
  "build": "tsc",
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- dev: Este é o nome do script. Você pode executar esse script com o comando npm run dev. Ele é usado para iniciar o processo de desenvolvimento.

- ts-node-dev: É uma ferramenta que combina ts-node e nodemon, permitindo executar arquivos TypeScript diretamente no Node.js e reiniciar automaticamente o servidor sempre que detecta alterações no código.

- --respawn: Esta opção faz com que o ts-node-dev reinicie o processo quando ele for encerrado. Isso é útil em cenários onde o servidor precisa ser reiniciado completamente, por exemplo, após certas falhas ou mudanças.

- src/server.ts: Este é o caminho para o arquivo TypeScript que serve como ponto de entrada para o seu servidor. O ts-node-dev vai monitorar esse arquivo e qualquer outro importado por ele para reiniciar o servidor automaticamente quando houver mudanças.
<br>
  <p>
No terminal digite:</p>

```
npm run build
```

O comando vai gerar uma pasta dist com arquivo index.js, versão do arquivo ts convertida para js.


 <br>

**Configuração para execultar testes**

<p>
No terminal digite:</p>

```
npm i -D jest ts-jest
```
O comando vai instalar a biblioteca jest de test.
 <br>

Agora devemos ciar um arquivo chamado jest.config.js e digitar.

```
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
```

Agora criar um pasta chamada de test na raiz do projeto.
 Os arquivos devem se criados como *.test.ts, para que o programa entenda que é arquivo de teste.

 <br>

**Configuração tipos de metodos disponiveis para testes**


No terminal digite:</p>

```
npm i -D @types/jest @types/node
```
O comando vai instalar a bibliotecas que ajudaram a identificar o tipos, na execulsão dos testes em determinadas bibliotecas.

 No arquivo package.json na parte de 
```
 scripts.   "scripts": {
  "build": "tsc",
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "test": "jest"
  },
```

 No vscode deves instalar o plugin **Jest Runner**
 Isto permitira que você teste no propio vscode ou 

<p>
No terminal digite:</p>

```
npm t
```

O comando detectará o teste e execultará.

Lembrando qua a extensão do arquivo deve ser *.test.ts ou *.spec.ts