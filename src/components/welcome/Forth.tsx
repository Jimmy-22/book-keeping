import s from './Welcome.module.scss'
import welcome4 from '../../assets/icons/welcome4.svg'

export const Forth = () => {
  return <div class={s.card}>
    <img src={welcome4} />
    <h2>云备份<br/>数据轻松同步上云</h2>,
  </div>
}

Forth.displayName = 'Forth'