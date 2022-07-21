import { defineComponent, ref } from "vue";
import s from './StartPage.module.scss';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { Navbar } from '../shared/Navbar';
import { PlusButton } from '../shared/PlusButton';
import { Icon } from "../shared/Icon";
import { Overlay } from "../shared/Overlay";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false)
    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value
    }
    return () => (
      <div>
        <Navbar>{
          {
            default: () => '薯条记账',
            icon: () => <Icon name="menu" onClick={onClickMenu} class={s.navIcon}/>
          }
        }</Navbar>
        <Center class={s.welcome1_wrapper}>
          <Icon name="welcome1" style={{width: '128px', height: '128px'}}/>
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <PlusButton iconName='plus' />
        { overlayVisible.value && <Overlay onClose={() => {overlayVisible.value = false}}></Overlay>}
      </div>
    )
  }
})