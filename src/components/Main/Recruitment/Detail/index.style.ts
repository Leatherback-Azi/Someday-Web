import styled from "styled-components";

export const Layout = styled.div`
  width: 1200px;
  margin: auto;
  margin-top: 30px;
  height: ${props => props.lang}%;
`;

export const BannerImage = styled.img`
  width: 1200px;
`;

export const Container = styled.div`
  width: 820px;
  margin: auto;
  margin-top: 50px;
`;

export const MainTitle = styled.div`
  font-family: Pretendard700;
  font-size: 30px;
`;

export const Title = styled.div`
  margin-top: 30px;
  font-family: Pretendard600;
  font-size: 18px;
`;

export const Text = styled.div`
  margin-top: 8px;
  font-family: Pretendard400;
  font-size: 14px;
  line-height: 20px;
`;

export const Image = styled.img`
  margin-top: 20px;
`;

export const TextForm = styled.div`
  margin-top: 8px;
  width: 540px;
  height: 112px;
  background-color: #EFF2F6;
  line-height: 112px;
  border-radius: 16px;
  font-family: Pretendard600;
  font-size: 16px;

  div[id='first'] {
    padding-top: 20px;
  }

  div {
    width: 500px;
    line-height: 24px;
    margin: auto;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #EFF2F6;
  margin: 30px auto;
`;

export const Form = styled.div`
  width: 660px;
  height: 50px;
  margin-bottom: 8px;
  background-color: #F9FAFB;
  line-height: 50px;
  border-radius: 8px;

  td {
    color: #33CC99;
    font-family: Pretendard600;
    font-size: 16px;
  }

  td[id='title'] {
    width: 100px;
    padding-left: 16px;
    color: #9CAEC9;
  }
`;

export const ButtonForm = styled.div`
  width: 250px;
  margin: auto;
`;

export const SubmitButton = styled.button`
  margin: 22px auto 12px;
  width: 250px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  color: #FFFFFF;
  background-color: #33CC99;
  font-family: Pretendard600;
  font-size: 14px;
`;

export const QuestionButton = styled.div`
  text-align: center;
  width: 250px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  color: #33CC99;
  background-color: #D6F5EB;
  font-family: Pretendard600;
  font-size: 14px;
`;

export const Bottom = styled.div`
  height: 70px;
`;