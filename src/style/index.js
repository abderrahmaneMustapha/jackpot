import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 24px;
  text-align: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoadingMessage = styled.p`
  font-size: 24px;
  text-align: center;
`;

export { LoadingMessage, LoadingContainer, ErrorContainer, ErrorMessage }

export default Object.freeze({ LoadingMessage, LoadingContainer, ErrorContainer, ErrorMessage })
