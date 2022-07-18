import s from './WelcomeLayout.module.scss'
import welcome1 from '../../assets/icons/welcome1.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout'

export const First = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={welcome1} />,
      title: () => <h2>薯条记账<br/>你的省钱助手</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
        <RouterLink to="/welcome/2">下一页</RouterLink> 
        <RouterLink to="/start">跳过</RouterLink> 
      </>
    }}
  </WelcomeLayout>
)

First.displayName = 'First'