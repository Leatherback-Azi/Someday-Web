import * as S from "src/components/Modal/index.style";

import ReactModal from "react-modal";

import { useRouter } from "next/router";

const CustomModal = (props: any) => {
  const { setModalIsOpen, title, number, name, phoneNumber, email } = props;
  const router = useRouter();

  return (
    <ReactModal 
      isOpen={props.modalIsOpen} 
      onRequestClose={() => {setModalIsOpen(false);}}
      style={{
      overlay: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        margin: 'auto',
      },
      content: {
        width: '29.3%',
        height: '36.4%',
        margin: 'auto',
        padding: '30px',
        borderRadius: '16px'
      }
    }}>
      <S.ModalTitle>{title} 지원서</S.ModalTitle>
      <S.ModalText>
        <div>학번: {number}</div>
        <div>이름: {name}</div>
        <div>전화번호: {phoneNumber}</div>
        <div>이메일: {email}</div>
      </S.ModalText>
      <S.Text>
        *입력된 이메일을 통해, 사전과제 및 합격 여부를 전송해드립니다.<br />
        *제출하시면, 지원 내역을 수정할 수 없습니다.
      </S.Text>
      <S.CancelButton onClick={() => {props.setModalIsOpen(false)}}>닫기</S.CancelButton>
      <S.SubmitButton onClick={() => {
        // 서버에 값 저장하는 코드
        router.push(`/success?name=${name}&jobGroup=${title}`)
      }}>제출</S.SubmitButton>
    </ReactModal>
  );
};

export default CustomModal;