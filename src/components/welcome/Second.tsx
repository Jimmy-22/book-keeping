import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss'
import welcome2 from '../../assets/icons/welcome2.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout'

export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img class={s.welcome1} src={welcome2}/>,
          title: () => <h2>每日提示<br/>记录你的每天账单</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
            <RouterLink to="/welcome/3">下一页</RouterLink> 
            <RouterLink to="/start">跳过</RouterLink> 
          </>
        }}
      </WelcomeLayout>
    )
  }
})
