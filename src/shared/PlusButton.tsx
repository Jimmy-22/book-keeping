import { defineComponent } from "vue";
import s from './PlusButton.module.scss'
import { Icon } from "./Icon";
 
export const PlusButton = defineComponent({
  setup() {
    return () => (
      <div class={s.plusButton}>
        <Icon name="plus" class={s.icon}></Icon>
      </div>
    )
  }
})