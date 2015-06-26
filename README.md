# ProjetoPI
###Comandos Git###
```
*Usei o exemplo que o José deu do ProjetoLoja
```
* clone <url repositório> = baixa o projeto do repositório informado
* branch = lista todas as ramificações locais
* branch <nome da branch> = cria uma ramificação com o nome informado
* checkout <nome da branch ou id commit> = altera o codigo para a versao informada 
* push -u origin <nome da branch> = upa as alterações para o repositório em uma nova branch
* push = upa as alterações para o repositório da sua branch atual
* pull = baixa todas as alterações da sua branch atual
* status = lista todas as alterações da branch atual
* add <caminho arquivo> = adiciona o arquivo informado ao commit
* add . = adiciona todas as alterações ao commit
* rm -rf <caminho arquivo> = remove arquivo do repositorio
* commit -m "<mensagem do commit>" = cria um commit com todas as alterações adicionadas
```
###Como começar###

* Clonar um projeto git:
 ```
git clone <url repositorio>
```

* Criar uma branch no repositório:
```
git branch <nome da branch>
git checkout <nome da branch>
git push -u origin <nome da branch>

```

* Ir para um branch especifica:
```
git pull
git checkout <nome da branch>

```

* Comitar alterações:
```
git status
git add .
git commit -m "<mensagem do commit>"
git push
```
* Comitar no heroku:
* lembrar de comitar alterações primeiro
```
git push heroku master
```
```
* Para rodar o programa é necessario instalar as dependencias
**para instalar as dependencias vc tem que ir para pasta do projeto
**se estiver no desktop
```
cd desktop/projetopi
**dentro do projeto
npm install
**instalar o express
npm install -g express
**instalar o mongodb
npm install -g mongodb
```
npm install -g mongoose
**instalar o nodejs
npm install -g nodejs
```
*apos instalar as dependencias e o que precisa vc deve inicializar o banco primeiro
mongo
*inicializado o banco vc pode rodar a aplicacao "Lembrando que tem que estar dentro do diretorio do projeto"
node app
```
***ou
nodemon app
