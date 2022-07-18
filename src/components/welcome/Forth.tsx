import { defineComponent } from 'vue';
import s from './First.module.scss'
import welcome4 from '../../assets/icons/welcome4.svg'
import { RouterLink } from 'vue-router';

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.welcome1} src={welcome4}/>
          <h2>云备份<br/>数据轻松同步上云</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
          <RouterLink to="/start">完成</RouterLink> 
          <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
        </div>
      </div>
    )
  }
})