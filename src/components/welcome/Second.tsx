import { defineComponent } from 'vue';
import s from './First.module.scss'
import welcome2 from '../../assets/icons/welcome2.svg'
import { RouterLink } from 'vue-router';

export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.welcome1} src={welcome2}/>
          <h2>每日提示<br/>记录你的每天账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
          <RouterLink to="/welcome/3">下一页</RouterLink> 
          <RouterLink to="/start">跳过</RouterLink> 
        </div>
      </div>
    )
  }
})