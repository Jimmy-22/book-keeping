import { defineComponent, PropType  } from "vue";
import s from './PlusButton.module.scss'
import { Icon, IconName } from "./Icon";
 
export const PlusButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconName>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div class={s.plusButton}>
        <Icon name={props.iconName} class={s.icon}></Icon>
      </div>
    )
  }
})