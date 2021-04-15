function Gravatar(props) {
  return (
    <div>
      <img className={props.className} src={props.avatarUrl} alt="avatar"></img>
      {/* <img className={props.className} src={`https://s.gravatar.com/avatar/${hash}?id=identicon}`} alt="avatar"></img> */}
    </div>
  );
}

export default Gravatar;
