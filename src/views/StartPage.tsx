import { defineComponent } from "vue";
import s from './StartPage.module.scss';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { PlusButton } from '../shared/PlusButton';
import { Icon } from "../shared/Icon";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('hi')
    }
    return () => (
      <div>
        <nav>menu</nav>
        <Center class={s.welcome1_wrapper}>
          <Icon name="welcome1" style={{width: '128px', height: '128px'}}/>
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>开始记账</Button>
        </div>
        <PlusButton iconName='plus' />
      </div>
    )
  }
})