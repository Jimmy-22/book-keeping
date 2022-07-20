import s from './Welcome.module.scss'
import welcome2 from '../../assets/icons/welcome2.svg'

export const Second = () => {
  return <div class={s.card}>
    <img src={welcome2} />
    <h2>每日提示<br/>记录你的每天账单</h2>
  </div>
}

Second.displayName = 'Second'