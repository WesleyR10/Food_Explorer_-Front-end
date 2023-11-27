import LogoImg from '../../assets/Logo-Background.png'
import LogoImgAdmin from '../../assets/LogoAdmin.png'
import { PiSignOutBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineReceipt } from "react-icons/md";
import { Container, Logout } from "./styles";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../../utils/roles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Header() {
  const [search, setSearch] = useState("")
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function goCreateProduct() {
    navigate("/new")
  }

  function goHome() {
    navigate("/")
  }

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
      {user.role === USER_ROLE.ADMIN ? <img src={LogoImgAdmin} alt="Logo da empresa food explorer para administradores" onClick={goHome} />
        : <img src={LogoImg} alt="Logo da empresa food explorer para usuários" onClick={goHome} />}

      <Input icon={(props) => <IoIosSearch {...props} onClick={fetchSearch} />} placeholder="Pesquisar pelo título do prato ou ingrediente" onChange={(e) => setSearch(e.target.value)} onKeyPress={handleEnterKeyPress} />

      {user.role === USER_ROLE.ADMIN ? <Button className="first-button" title="Novo prato" onClick={goCreateProduct} /> :
        <Button className="first-button" icon={MdOutlineReceipt} title="Pedidos (0)" />
      }
      <Logout onClick={handleSignOut}>
        <PiSignOutBold />
      </Logout>
    </Container>
  )
}