import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Slider from 'react-slick'
import spaceShip from '../assets/img/spaceShip.png'
import Button from '../components/UI/Button'
import CheckBox from '../components/UI/CheckBox'
import Input from '../components/UI/Input'
import colors from '../constants/colors'

const Registration = (props) => {
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
        <Slider />
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
        <Input
          style={{ marginTop: 20 }}
          labelText={'E-mail'}
          type={'email'}
          placeholder={'Enter your E-mail Address'}
        />
        <CheckBox
          text={'I agree to  all the Terms & Conditions'}
          style={{ marginLeft: 20 }}
        />
        <Button text={'Sign Up'} style={{ marginTop: 43 }} social={false} />
        <StyledLink to='/login'>Already have an account?</StyledLink>
        <Button
          text={'Sign up with Facebook'}
          icon={true}
          iconName={'facebook'}
        />
        <Button
          text={'Sign up with Twitter'}
          icon={true}
          iconName={'twitter'}
        />
        <Button text={'Sign up with Google'} icon={true} iconName={'google'} />
      </FormContainer>
    </MainContainer>
  )
}

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans';
`

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44%;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.white};
`

export const SliderTitle = styled.div`
  color: ${colors.lightBlue};
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.09em;
  text-align: center;
  opacity: 0.75;
`

export const SliderItem = styled.div`
  width: 430px;
  height: 645px;
  margin-top: 33px;
  background: url(${spaceShip});
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 56%;
  background-color: ${colors.blue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 0px 0px 30px;
`

export const FormTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: ${colors.gray};
  opacity: 0.8;
`

export const StyledLink = styled(Link)`
  margin-top: 40px;
  text-decoration: underline;
  color: ${colors.white};
  :hover {
    cursor: pointer;
  }
`

export default Registration
