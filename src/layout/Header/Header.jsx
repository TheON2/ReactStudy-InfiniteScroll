import {Container, HeaderContainer, Linker, Logo, Logo2, ProfilePicture, ProfilePicture2} from "./style";


const Header =()=>{
  return(
    <HeaderContainer>
      <Container>
        <Linker href='/'>
          <Logo2>bow!</Logo2>
          <ProfilePicture2>
            <img width="150px" src="https://cdn2.thedogapi.com/images/w2lA_Tt6c.png" />
          </ProfilePicture2>
          <Logo>The Infinite</Logo>
          <ProfilePicture>
            <img width="150px" src="https://cdn2.thedogapi.com/images/w2lA_Tt6c.png" />
          </ProfilePicture>
          <Logo2>wow!</Logo2>
        </Linker>
      </Container>
    </HeaderContainer>
  )
}

export default Header