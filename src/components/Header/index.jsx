import { PiSignOutBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineReceipt } from "react-icons/md";
import { Container, Logout } from "./styles";
import { useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth';
import LogoImg from '../../assets/Logo-Background.png'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Header() {
  const [search, setSearch] = useState("")
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }
  async function fetchSearch() {
    const response = await api.get(`/products/title?searchTerm=${search}`)
    console.log(response.data); // Exibindo temporariamente os dados no console
  }

  // Chamada da fetchSearch quando a tecla Enter é pressionada
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchSearch();
    }
  };

  return (
    <Container>
      <img src={LogoImg} alt="Logo da empresa food explorer" />

      <Input icon={(props) => <IoIosSearch {...props} onClick={fetchSearch} />} placeholder="Pesquisar pelo título do prato ou ingrediente" onChange={(e) => setSearch(e.target.value)} onKeyPress={handleEnterKeyPress} />

      <Button className="first-button" icon={MdOutlineReceipt} title="Pedidos (0)" />

      <Logout onClick={handleSignOut}>
        <PiSignOutBold />
      </Logout>
    </Container>
  )
}