import styled from 'styled-components';

const Sun = styled.div`
  overflow:hidden;
	width: 34vw;
  height: 34vw;
	margin-left:31.5vw;
	z-index:-5;
	position: absolute;
	background: radial-gradient(transparent 50%, white), radial-gradient(yellow, transparent 70%);
	-webkit-mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
	mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
	border-radius: 50%;

	&::after,
	&::before {

			content: '';
			position: absolute;
			top: 0;
			left: 0;
      width: 100%;
			height: 100%;
			transform-origin: center;
			border-radius: 50%;
			-webkit-mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
	mask-image: radial-gradient(rgba(0, 0, 0, 1.0) 40%, transparent 65%);
	}

	&::before {
      overflow:hidden;
			background: repeating-conic-gradient(from 0deg, yellow 0deg 20deg, transparent 20deg 40deg);
			animation: rotate 720s linear, scale 3s linear infinite;
	}

	&::after {
      overflow:hidden;
			background: radial-gradient(yellow, orange 27%, transparent calc(27% + 3px) 100%), radial-gradient(gold, transparent 70%), repeating-conic-gradient(from 0deg, gold 0deg 5deg, transparent 5deg 10deg);
			transform: rotate(15deg);
			animation: rotate 360s linear;
	}
}

@keyframes rotate {
	100% {
			transform: rotate(360deg);
	}
}

@keyframes scale {
	0% {
			transform: scale(1);
	}
	20% {
			transform: scale(1.2);
	}
	40% {
			transform: scale(0.8);
	}
	60% {
			transform: scale(1.1);
	}
	70% {
			transform: scale(0.9);
	}
	100% {
			transform: scale(1);
	}
}`
export default Sun;
