import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    align-items: center;
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
`;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    width: 50%;
    perspective: 1000px;
`;
const Title = styled.h1`
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 32px;
    font-family: ${({ theme: { font: { lato } } }) => lato};
    font-size: ${({ theme: { size: { extra } } }) => extra};
    color: ${({ theme: { secondary: { base } } }) => base};
`;
const Subtitle = styled.p`
    margin: 0;
    font-family: ${({ theme: { font: { latoRegular } } }) => latoRegular};
    display: block;
    color: ${({ theme: { colors: { onBackground } } }) => onBackground};
    font-size: ${({ theme: { size: { large } } }) => large};
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const Cube = styled.div.attrs(() => ({ className: 'cube' }))`
    width: 100px;
    height: 100px;
    transform-style: preserve-3D;
    animation: spinCube 10s infinite linear;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);

    & > div {
        width: 100%;
        height: 100%;
        background: ${({ theme: { secondary: { base } } }) => `${base}`};
        position: absolute;
        border: 1px solid ${({ theme: { secondary: { dark } } }) => `${dark}`};
        &::before {
            content: '';
            width: 80%;
            height: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid white;
        }
        &::after {
            content: '';
            width: 50%;
            height: 10%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-top: 1px solid white;
            border-bottom: 1px solid white;
        }

        &:nth-child(1) {
            transform: rotateY(0deg) translateZ(70px); /** front */
            animation: ${
    ({
        theme: { animation: { timing: { bounce }, duration: { slow } } },
    }) => (
        `composeCube1 ${slow}s infinite ${bounce}`
    )};
            @keyframes composeCube1 {
                50% {
                    transform: rotateY(0deg) translateZ(50px);
                }
            }
        }
        &:nth-child(2) {
            transform: rotateY(90deg) translateZ(70px); /** right */
            animation: ${
    ({
        theme: { animation: { timing: { bounce }, duration: { slow } } },
    }) => (
        `composeCube2 ${slow}s infinite ${bounce}`
    )};
            @keyframes composeCube2 {
                50% {
                    transform: rotateY(90deg) translateZ(50px);
                }
            }
        }
        &:nth-child(3) {
            transform: rotateY(180deg) translateZ(70px); /** back */
            animation: ${
    ({
        theme: { animation: { timing: { bounce }, duration: { slow } } },
    }) => (
        `composeCube3 ${slow}s infinite ${bounce}`
    )};
            @keyframes composeCube3 {
                50% {
                    transform: rotateY(180deg) translateZ(50px);
                }
            }
        }
        &:nth-child(4) {
            transform: rotateY(-90deg) translateZ(70px); /** left */
            animation: ${
    ({
        theme: { animation: { timing: { bounce }, duration: { slow } } },
    }) => (
        `composeCube4 ${slow}s infinite ${bounce}`
    )};
            @keyframes composeCube4 {
                50% {
                    transform: rotateY(-90deg) translateZ(50px);
                }
            }
        }
        &:nth-child(5) {
            transform: rotateX(-90deg) translateZ(70px); /** top */
            animation: ${
    ({
        theme: { animation: { timing: { bounce }, duration: { slow } } },
    }) => (
        `composeCube5 ${slow}s infinite ${bounce}`
    )};
            @keyframes composeCube5 {
                50% {
                    transform: rotateX(-90deg) translateZ(50px);
                }
            }
        }
        &:nth-child(6) {
            transform: rotateX(90deg) translateZ(70px); /** bottom */
            animation: ${({
        theme: { animation: { timing: { bounce }, duration: { slow } } },
    }) => (
        `composeCube6 ${slow}s infinite ${bounce}`
    )};
            @keyframes composeCube6 {
                50% {
                    transform: rotateX(90deg) translateZ(50px);
                }
            }
        }
        }
    }

    @keyframes spinCube {
        0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
    }
`;

export {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Subtitle,
    Cube,
};
