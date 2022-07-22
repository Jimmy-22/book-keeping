import { defineComponent, mergeProps, PropType } from "vue";
import s from './Icon.module.scss'

export type IconName = 'plus' | 'charts' | 'welcome1' | 'welcome2' | 'welcome3' | 'welcome4' | 'menu' | 'notify' | 'export' | 'cancel'| 'notes' | 'date'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})