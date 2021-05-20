// export default function Button(props) {
//   return <button className="btn-green right">{props.children}</button>;
// }

export default function Button({ children, onClick, type, posicao }) {
  return (
    <button type={type} onClick={onClick} className={`btn-green ${posicao}`}>
      {children}
    </button>
  );
}
