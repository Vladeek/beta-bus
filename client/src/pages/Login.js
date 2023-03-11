import Slider from 'react-slick'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import {
  FormContainer,
  FormTitle,
  StyledLink,
  MainContainer,
  SliderContainer,
  SliderItem,
  SliderTitle,
} from './Registration'

const Login = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <MainContainer>
      <SliderContainer>
        <SliderTitle>
          Plan Your Activities
          <br /> So you can Launch High
        </SliderTitle>
        <div style={{ width: 430 }}>
          <Slider {...settings}>
            <div>
              <SliderItem />
            </div>
            <div>
              <SliderItem />
            </div>
            <div>
              <SliderItem />
            </div>
          </Slider>
        </div>
      </SliderContainer>
      <FormContainer>
        <FormTitle>Sign Up or Login</FormTitle>
        <Input
          style={{ marginTop: 20 }}
          labelText={'Fullname'}
          type={'text'}
          placeholder={'Enter your Fullname'}
        />
        <Input
          style={{ marginTop: 20 }}
          labelText={'Password'}
          type={'password'}
          placeholder={'**********************'}
        />
        <Button text={'Sign In'} style={{ marginTop: 43 }} social={false} />
        <StyledLink to='/registration'>Not registered yet?</StyledLink>
        <Button
          text={'Sign in with Facebook'}
          icon={true}
          iconName={'facebook'}
        />
        <Button
          text={'Sign in with Twitter'}
          icon={true}
          iconName={'twitter'}
        />
        <Button text={'Sign in with Google'} icon={true} iconName={'google'} />
      </FormContainer>
    </MainContainer>
  )
}

export default Login
