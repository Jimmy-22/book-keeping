import { defineComponent, PropType } from "vue";
import s from './Center.module.scss'
const directionMap = {
  '-': 'horizontal',
  '|': 'vertical'
}
export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'-' | '|'>,
      default: 'horizontal'
    }
  },
  setup(props, context) {
    const extraClass = directionMap[props.direction]
    console.log(extraClass)
    return () => (
      <div class={[s.center, extraClass]}>{
        context.slots.default?.()
      }</div>
    )
  }
})