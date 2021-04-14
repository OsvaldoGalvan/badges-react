import md5 from 'md5'

function Gravatar(props) {
    const email = props.email
    const hash = md5(email)

    return (
        <div>
            <img className={props.className} src={props.avatarUrl} alt="avatar"></img>
            {/* <img className={props.className} src={`https://s.gravatar.com/avatar/${hash}?id=identicon}`} alt="avatar"></img> */}
        </div>
    )

}

export default Gravatar