import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  /* width: 1920px; */
  width: 100%;
  height: 840px;

  background-image: url('/assets/principal_banner_desktop_1.svg');

  color: #fff;
`

export const NavBar = styled.div`
  width: 1189px;
  height: 35px;

  margin-top: 40px;

  display: flex;
  justify-content: space-between;
`

export const Menu = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 210px;
`

export const ClientMenu = styled.div`
  display: flex;
  align-items: center;
`

export const Contact = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`
export const Search = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }
`

export const Input = styled.input`
  border: 1px solid var(--blue);
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 30px;
`

export const Bag = styled.button`
  display: flex;
`

export const BagCount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  font-size: 18px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--blue);
`

export const Line = styled.div`
  border: 1px solid #ffffff;
  border-radius: 2px;

  width: 1px;
  height: 100%;
  margin: 0 35px;
`

export const BannerInfo = styled.div`
  width: 410px;
  margin-top: 100px;
  margin-left: 600px;

  h1 {
    font-weight: 900;
    font-size: 49px;
    line-height: 54px;
  }
  p:nth-child(2) {
    color: var(--blue);
    font-weight: 900;
    font-size: 70px;
    line-height: 82px;
    text-align: right;

    sup {
      font-size: 30px;
    }
  }
  p:nth-child(3) {
    margin-top: 20px;
    line-height: 25px;
    font-size: 16px;
    text-align: right;
  }
`
