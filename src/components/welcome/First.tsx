import s from './Welcome.module.scss'
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#welcome1'></use>
      </svg>
      <h2>薯条记账<br />薯着钱过日子</h2>
    </div>
  )
}

First.displayName = 'First'