import s from './Welcome.module.scss'
import welcome1 from '../../assets/icons/welcome1.svg'

export const First = () => {
  return <div class={s.card}> 
    <img src={welcome1} />
    <h2>薯条记账<br />你的省钱助手</h2>
  </div>
}

First.displayName = 'First'