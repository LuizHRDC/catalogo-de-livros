# 📚 Catálogo de Livros Pessoal

Este projeto é um sistema web para cadastrar, pesquisar, editar, excluir livros pessoais e gerar relatórios estatísticos de leitura. Usuários "premium" têm acesso a dashboards analíticos exclusivos.

## 📈 Exemplos Visuais

<table>
<tr>
<td align="center">
<img src="https://github.com/user-attachments/assets/5552111d-42b0-4a3f-8bcf-7d2b735ffa15" width="300px" alt="Catálogo de Livros"/>
</td>
<td align="center">
<img src="https://github.com/user-attachments/assets/eed93a09-e15a-492b-8213-270bec80fe2f" width="300px" alt="Estatísticas de Leitura" />
</td>
</tr>
<tr>
<td align="center">
<img src="https://github.com/user-attachments/assets/dec65863-fe1c-450c-9248-2e5210a6fba7" width="300px" alt="Adicionar Livro" />
</td>
</tr>
</table>

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js (com Vite)
- **Backend:** Node.js + Express
- **Banco de Dados:** PostgreSQL (Neon)
- **Gerenciamento de estado:** Context API
- **Gráficos:** Chart.js

## 📂 Estrutura do Projeto

```
catalogo-de-livros/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── db.js
│   └── index.js
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── App.jsx, main.jsx
└── public/
```

## 🔍 Funcionalidades Principais

- Cadastro, pesquisa, edição e exclusão de livros.
- Marcar como favorito, lendo ou lido.
- Upgrade para usuário premium.
- Geração automática de relatórios e dashboards.
- Histórico visual de relatórios anteriores.

## 🚀 Como Rodar o Projeto Localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/LuizHRDC/catalogo-de-livros.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    cd backend && npm install
    ```
3. Inicie o backend:
    ```bash
    node backend/index.js
    ```
4. Inicie o frontend:
    ```bash
    npm run dev
    ```

---


