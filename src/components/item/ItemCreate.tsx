import { defineComponent, PropType } from 'vue';
import s from './ItemCreate.module.scss'
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon class={s.navIcon} name="cancel" />  ,
        default: () => <div>main</div>
      }}</MainLayout> 
    )
  }
})