import {Container, HeaderContainer, Linker, Logo, Logo2, ProfilePicture, ProfilePicture2} from "./style";


const Header =()=>{
  return(
    <HeaderContainer>
      <Container>
        <Linker href='/'>
          <Logo2>짹!</Logo2>
          <ProfilePicture2>
            <img width="150px" src="https://avatars.githubusercontent.com/u/32028454?s=400&u=7993b49546f6ebb45968dbafa6c97c5789ec2254&v=4" />
          </ProfilePicture2>
          <Logo>The Infinite</Logo>
          <ProfilePicture>
            <img width="150px" src="https://avatars.githubusercontent.com/u/32028454?s=400&u=7993b49546f6ebb45968dbafa6c97c5789ec2254&v=4" />
          </ProfilePicture>
          <Logo2>짹!</Logo2>
        </Linker>
      </Container>
    </HeaderContainer>
  )
}

export default Header