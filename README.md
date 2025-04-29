# Kanban Adese

Este é um projeto simples de um quadro Kanban para gerenciar tarefas.

## Estrutura

- **Backlog**: Tarefas que precisam ser feitas, mas ainda não foram priorizadas.
- **A Fazer (To Do)**: Tarefas prontas para serem iniciadas.
- **Em Progresso (In Progress)**: Tarefas que estão sendo trabalhadas.
- **Em Revisão/Testes (Review/Test)**: Tarefas que estão sendo revisadas ou testadas.
- **Concluído (Done)**: Tarefas finalizadas com sucesso.

## Explicação das Etapas do Fluxo de Trabalho

1. **Backlog**:
   - O backlog é onde todas as tarefas ou ideias são inicialmente armazenadas.
   - Representa tudo o que precisa ser feito, mas ainda não foi priorizado ou preparado para execução.
   - É uma lista de tarefas pendentes que podem ser organizadas ou movidas para a próxima etapa quando necessário.

2. **A Fazer (To Do)**:
   - Esta coluna contém tarefas que estão prontas para serem iniciadas.
   - As tarefas aqui já foram priorizadas e estão aguardando que alguém as pegue para começar o trabalho.
   - É o ponto de partida para o trabalho ativo.

3. **Em Progresso (In Progress)**:
   - Esta coluna contém tarefas que estão atualmente sendo trabalhadas.
   - Representa o trabalho em andamento, onde as tarefas estão sendo desenvolvidas, implementadas ou executadas.
   - Ajuda a visualizar o que está sendo feito no momento.

4. **Em Revisão/Testes (Review/Test)**:
   - Esta etapa é opcional e usada para tarefas que precisam ser revisadas ou testadas antes de serem concluídas.
   - Pode incluir revisão de código, validação de texto, testes de qualidade ou qualquer outro processo de verificação.
   - Garante que o trabalho atenda aos padrões de qualidade antes de ser finalizado.

5. **Concluído (Done)**:
   - Esta coluna contém tarefas que foram finalizadas com sucesso.
   - Representa o trabalho concluído e aprovado.
   - É o objetivo final de todas as tarefas no fluxo de trabalho.

Essas etapas ajudam a organizar e visualizar o progresso das tarefas, garantindo que o trabalho flua de forma eficiente e transparente.

## Estrutura

- **index.html**: Página inicial (login ou redirecionamento para o board).
- **board.html**: Página principal do quadro Kanban.
- **css/style.css**: Estilo geral da aplicação.
- **js/app.js**: Lógica principal de movimentação de tarefas.
- **js/api.js**: Requisições AJAX para o backend.
- **php/**: Scripts PHP para backend.
- **database/kanban.sql**: Script para criação do banco de dados.

## Configuração

1. Importe o arquivo `kanban.sql` no seu banco de dados MySQL.
2. Configure o arquivo `php/db.php` com as credenciais do banco.
3. Inicie o servidor local e acesse `index.html`.

## Footer

O projeto inclui um footer simples para exibir informações adicionais, como direitos autorais ou links úteis. Ele pode ser personalizado conforme necessário para atender às necessidades do projeto.

### Exemplo de Footer

```html
<footer>
    <p>&copy; 2023 Kanban Adese. Todos os direitos reservados.</p>
</footer>
```

O footer deve ser incluído no final de cada página para manter a consistência visual e fornecer informações relevantes.
