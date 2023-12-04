/* eslint-disable react/prop-types */
import LogoImg from '../../assets/Logo-Background.png'
import LogoImgAdmin from '../../assets/LogoAdmin.png'
import { PiSignOutBold, PiReceipt } from "react-icons/pi";
import { MdOutlineReceipt } from "react-icons/md";
import { List } from "@phosphor-icons/react";
import { Container, Logout, Menu, ButtonMobile } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../../utils/roles';
import { Button } from '../../components/Button'
import { SearchInput } from '../SearchInput';

export function Header({ onOpenMenu, productQuantity }) {
  const { signOut, user } = useAuth()
  const [selectedQuantity, setSelectedQuantity] = useState(0);

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

  useEffect(() => {
    setSelectedQuantity(productQuantity);
  }, [productQuantity]);

  return (
    <Container>
      <Menu onClick={onOpenMenu} >
        <List />
      </Menu>

      {user.role === USER_ROLE.ADMIN ? <img src={LogoImgAdmin} alt="Logo da empresa food explorer para administradores" onClick={goHome} />
        : <img src={LogoImg} alt="Logo da empresa food explorer para usuários" onClick={goHome} />}

      <SearchInput />

      {user.role === USER_ROLE.ADMIN ? <Button className="first-button" title="Novo prato" onClick={goCreateProduct} /> :
        <Button className="first-button" icon={MdOutlineReceipt} title={`Pedido (${selectedQuantity})`} />
      }

      <ButtonMobile>
        <PiReceipt />
      </ButtonMobile>

      <Logout onClick={handleSignOut}>
        <PiSignOutBold />
      </Logout>
    </Container>
  )
}