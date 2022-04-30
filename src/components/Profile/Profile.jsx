// import s from './Profile.module.css'
import Container from 'components/Container/Container'
import ProfileDescription from 'components/ProfileDescription/ProfileDescription'
import StatsList from 'components/StatsList/StatsList'
import s from './Profile.module.css'

export default function Profile({user}) {
    
    const { username, avatar, tag, location, stats } = user
    return (
        <Container>
            <div className={s.profile}>
                <ProfileDescription username={username} avatar={avatar} tag={tag} location={location}/>
                <StatsList stats={stats}/>
            </div>
        </Container>
    )
}