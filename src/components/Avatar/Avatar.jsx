import s from './Avatar.module.css'
console.log(s);

export default function Avatar({username, avatar}) {
    return (<img className={s.avatar} alt={username} src={avatar}></img>)
}