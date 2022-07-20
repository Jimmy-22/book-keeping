import s from './Welcome.module.scss'

export const First = () => {
  return <div class={s.card}> 
    <svg>
      <use xlinkHref='#welcome1'></use>
    </svg>
    <h2>薯条记账<br />你的省钱助手</h2>
  </div>
}

First.displayName = 'First'