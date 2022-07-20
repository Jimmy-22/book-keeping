import s from './Welcome.module.scss'
import welcome3 from '../../assets/icons/welcome3.svg'

export const Third = () => {
  return <div class={s.card}>
    <img src={welcome3} />
    <h2>数据可视化<br/>收支一目了然</h2>
  </div>
}

Third.displayName = 'Third'


