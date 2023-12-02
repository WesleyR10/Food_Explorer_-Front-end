import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from "./styles";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    //console.log(name, email, password)
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.")
      }
    });
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Crie sua conta</h1>

        <label htmlFor="name">Seu nome</label>
        <Input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          id='name'
          name='name'
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <Input
          placeholder="exemplo@exemplo.com.br"
          type="email"
          id='email'
          name='email'
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          id='password'
          name='password'
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button className="button" title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Ja tenho uma conta</Link>
      </Form>

    </Container>
  )
}