import {Component} from 'react'
import {HomePageMainContainer, Heading} from './styledComponents'
import Header from '../Header'
import SidebarMenu from '../SidebarMenu'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HomePageMainContainer>
          <SidebarMenu />
          <Heading>Home Page</Heading>
        </HomePageMainContainer>
      </>
    )
  }
}

export default Home
