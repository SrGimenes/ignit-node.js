Diferença entre usar Typescript e Javascript

- Vale lembrar que o Nodejs não entende Javascript por padrão

Runtime Type Checking
  O código só é validado a partir que ele estiver rodando
Static Type Checking
  O código é validado enquanto é realizado a sua criação

No Typescript definimos objetos sendo dos tipos:
  Type
  Interface - Utilizado para definir o formato de algo


Alguns comandos:
  - time : Utilizado par amostrar o tempo de execução, posso utilizar tanto em javascript quanto em typescript:
    Ex: 
      Javascript - time node folder/file.js
      Typescript - time tsx folder/file.ts
      lembre-se que, para isso funcionar em Ts é necessário instalar a a biblioteca que integra to ts com o nodejs.


# RF
- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;
# RN
- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;