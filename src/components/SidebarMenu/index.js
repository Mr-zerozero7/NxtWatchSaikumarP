import {MdHome} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {FaFire} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarMenuContainer,
  MenuContainer,
  MenuItemButton,
  MenuIconSpan,
  FooterContainer,
  ContactUsTag,
  SocialIconsContainer,
  MediaIcon,
  MsgNote,
} from './styledComponents'

const SidebarMenu = () => {
  const handleMenuButton = () => {}
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <SidebarMenuContainer dark={darkTheme}>
            <MenuContainer dark={darkTheme}>
              <MenuItemButton onClick={handleMenuButton}>
                <MenuIconSpan>
                  <MdHome />
                </MenuIconSpan>
                Home
              </MenuItemButton>
              <MenuItemButton>
                <MenuIconSpan>
                  <FaFire />
                </MenuIconSpan>
                Trending
              </MenuItemButton>
              <MenuItemButton>
                <MenuIconSpan>
                  <SiYoutubegaming />
                </MenuIconSpan>
                Gaming
              </MenuItemButton>
              <MenuItemButton>
                <MenuIconSpan>
                  <CgPlayListAdd />
                </MenuIconSpan>
                Saved Videos
              </MenuItemButton>
            </MenuContainer>
            <FooterContainer>
              <ContactUsTag>CONTACT US</ContactUsTag>
              <SocialIconsContainer>
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialIconsContainer>
              <MsgNote>
                Enjoy! Now to see your channels and recommendations!
              </MsgNote>
            </FooterContainer>
          </SidebarMenuContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SidebarMenu
