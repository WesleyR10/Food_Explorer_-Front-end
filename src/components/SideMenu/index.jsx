/* eslint-disable react/prop-types */
import { X } from "@phosphor-icons/react";
import { Container, Title, Header, Content } from "./styles";
import { SearchInput } from "../SearchInput";
import { Footer } from "../Footer";
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../../utils/roles';
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate()

  function goCreateProduct() {
    navigate("/new")
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        {menuIsOpen &&
          <Title onClick={onCloseMenu}><X /> Menu</Title>
        }
      </Header>
      <Content>
        <SearchInput />
        {user.role === USER_ROLE.ADMIN ? <>
          <h1 onClick={goCreateProduct}>Novo Prato</h1> <h1 onClick={handleSignOut}>Sair</h1>
        </> :
          <h1 onClick={onCloseMenu}>Sair</h1>
        }
      </Content>
      <Footer />
    </Container>
  );
}