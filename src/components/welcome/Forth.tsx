import s from './WelcomeLayout.module.scss'
import welcome4 from '../../assets/icons/welcome4.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout'

export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.welcome1} src={welcome4}/>,
      title: () => <h2>云备份<br/>数据轻松同步上云</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
        <RouterLink to="/start">完成</RouterLink> 
        <RouterLink class={s.fake} to="/start">跳过</RouterLink> 
      </>
    }}
  </WelcomeLayout>
)

Forth.displayName = 'Forth'
