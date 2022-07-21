import { defineComponent, mergeProps, PropType } from "vue";
import s from './Icon.module.scss'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<'plus' | 'chart' | 'welcome1' | 'welcome2' | 'welcome3' | 'welcome4'>
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