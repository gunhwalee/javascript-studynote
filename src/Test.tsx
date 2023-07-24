const element: JSX.Element = <div>Hello, World!</div>;
// JSX.Element는 말 그대로 JSX 요소를 나타내기 위한 타입이다. 따라서 JSX구문을 표현하거나, Component의 반환값을 명시할 때 사용할 수 있다.

interface Props {
  name: string
}

const MyComponent: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};
// React.FC는 JSX를 반환하는 함수 자체를 표현한다. 따라서 interface와 같이 함수 자체를 표현할 때 사용할 수 있다.
