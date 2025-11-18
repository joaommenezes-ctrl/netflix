# 🎬 Netflix Clone Mobile em React Native

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native Badge">
</p>

<h4 align="center">
  Um projeto que replica a interface da Netflix, focado na fidelidade visual e inclui um sistema de login totalmente funcional.
</h4>

---

### 📝 Índice

* [✨ Visão Geral do Projeto](#-visão-geral-do-projeto)
* [🚀 Funcionalidades Principais](#-funcionalidades-principais)
* [🔑 Dados de Acesso para Teste (Login Funcional)](#-dados-de-acesso-para-teste-login-funcional)
* [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)

---

### ✨ Visão Geral do Projeto

Este projeto é um clone mobile (aplicativo) da interface da **Netflix**, desenvolvido utilizando **React Native**. O objetivo foi replicar fielmente o design visual e a experiência do usuário, cobrindo as telas essenciais:

1.  **Tela de Abertura (Loading Screen)**
2.  **Tela de Autenticação (Login)**
3.  **Tela Inicial (Home)**

O diferencial entregue neste trabalho é a implementação da **lógica de login funcional**, demonstrando a capacidade de integração de UI com o fluxo de autenticação.

---

### 🚀 Funcionalidades Principais

* **Abertura Fiel:** Componente de abertura replicando o visual da marca Netflix.
* **Design de Login:** Interfaces de Login com o layout idêntico ao original.
* **Login Funcional:** Implementação completa da lógica de autenticação.
    * Validação de formato de e-mail e tratamento de campos vazios.
    * Verificação de credenciais e mensagens de erro específicas.
    * Redirecionamento para a Home em caso de sucesso.
* **Tela Home Estruturada:** Layout da página principal com componentes para visualização de conteúdo (banners e carrosséis), seguindo a navegação e o estilo da plataforma.

---

### 🔑 Dados de Acesso para Teste (Login Funcional)

Para facilitar a demonstração da funcionalidade de login, utilize as seguintes credenciais para acessar a Home:

| E-mail | Senha | Resultado |
| :--- | :--- | :--- |
| `felipe@email.com` | `123456` | ✅ Login Sucesso |
| `invalido@email.com` | `000000` | ❌ Falha (Credenciais Incorretas) |

---

### 💻 Tecnologias Utilizadas

O projeto foi construído primariamente com:

* **React Native**
* **TypeScript**

---
