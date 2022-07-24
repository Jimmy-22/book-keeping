import { defineComponent, PropType } from "vue";
import s from './Button.module.scss'

interface Props{ }
export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    },
    kind: {
      type: String as PropType<'normal' | 'danger' | 'warning'>,
      default: 'normal'
    }
  },
  setup: (props, { slots }) => {
    return () => (
      <button class={[s.button, s[props.kind]]}>
        {slots.default?.()}
      </button>
    )
  }
})