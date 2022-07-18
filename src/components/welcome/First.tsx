import { defineComponent } from 'vue';
import s from './First.module.scss'
import welcome1 from '../../assets/icons/welcome1.svg'
import { RouterLink } from 'vue-router';

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.welcome1} src={welcome1}/>
          <h2>薯条记账<br/>你的省钱助手</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
          <RouterLink to="/welcome/2">下一页</RouterLink> 
          <RouterLink to="/start">跳过</RouterLink> 
        </div>
      </div>
    )
  }
})