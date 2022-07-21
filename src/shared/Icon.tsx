import { defineComponent, mergeProps, PropType } from "vue";
import s from './Icon.module.scss'

export type IconName = 'plus' | 'chart' | 'welcome1' | 'welcome2' | 'welcome3' | 'welcome4'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})