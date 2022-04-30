/* <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div> */
  import Avatar from 'components/Avatar/Avatar'
import s from './ProfileDescription.module.css'

  export default function ProfileDescription ({avatar, username, tag, location}) {
    return (
      <div>
        <Avatar avatar={avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
    )
  }