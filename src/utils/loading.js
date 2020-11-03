import styled, {keyframes} from 'styled-components';

const LoadingRingAnim = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingRing = styled.div`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    margin: 8px;
    border: 8px solid #000e22e6;
    border-radius: 50%;
    animation: ${LoadingRingAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000e22e6 transparent transparent transparent;
    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
    @key
  }
`;

const Loading = () => {
  return (
    <LoadingRing>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingRing>
  );
};

export default Loading;
