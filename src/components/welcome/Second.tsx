import s from './Welcome.module.scss'

export const Second = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome2'></use>
    </svg>
    <h2>每日提示<br/>记录你的每天账单</h2>
  </div>
}

Second.displayName = 'Second'