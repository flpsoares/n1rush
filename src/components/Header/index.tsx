import { useState } from 'react'

import {
  Container,
  Menu,
  ClientMenu,
  NavBar,
  Contact,
  Search,
  Bag,
  Line,
  Input,
  BannerInfo,
  BagCount
} from './style'

import HamburgerMenu from 'react-hamburger-menu'

import Image from 'next/image'

export const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const activeInput = () => {
    setIsSearch(true)
  }

  const desactiveInput = () => {
    setIsSearch(false)
  }

  return (
    <Container>
      <NavBar>
        <Menu>
          <button type="button">
            <HamburgerMenu
              isOpen={menuIsOpen}
              menuClicked={handleMenu}
              color="white"
              width={25}
              height={20}
              strokeWidth={3}
            />
          </button>
          <Image src="/assets/logo_n1rush.svg" alt="Logo" width={163} height={35} />
        </Menu>
        <ClientMenu>
          <Contact onClick={desactiveInput}>
            <Image
              src="/assets/icons/paper-plane.svg"
              alt="paper plane"
              width={45}
              height={35}
            />
            <p>CONTATO</p>
          </Contact>
          <Line />
          <Search>
            {isSearch && <Input />}
            {!isSearch && (
              <button
                onMouseOverCapture={desactiveInput}
                onClick={activeInput}
                type="button"
              >
                <Image
                  src="/assets/icons/search-solid.svg"
                  alt="search"
                  width={45}
                  height={30}
                />
                <p>BUSCAR</p>
              </button>
            )}
          </Search>
          <Line />
          <Bag>
            <Image
              src="/assets/icons/shopping-bag-solid.svg"
              alt="search"
              width={45}
              height={30}
            />
            <BagCount>2</BagCount>
          </Bag>
        </ClientMenu>
      </NavBar>
      <BannerInfo>
        <h1>MORTAL KOMBAT</h1>
        <p>
          R$ 229<sup>,99</sup>
        </p>
        <p>
          Mortal Kombat X combina uma apresentação cinemática única com uma
          jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez
          diversas variantes de cada personagem, afetando tanto a estratégia como o
          estilo de luta.
        </p>
      </BannerInfo>
    </Container>
  )
}

export default Header
