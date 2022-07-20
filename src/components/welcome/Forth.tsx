import s from './Welcome.module.scss'

export const Forth = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#welcome4'></use>
    </svg>
    <h2>云备份<br/>数据轻松同步上云</h2>,
  </div>
}

Forth.displayName = 'Forth'