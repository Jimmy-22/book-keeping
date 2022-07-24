import { defineComponent } from 'vue';
import { Navbar } from '../shared/Navbar';
import s from './MainLayout.module.scss'
export const MainLayout = defineComponent({
  setup: (props, { slots }) => {
    return () => (
      <div class={s.wrapper}>
        <Navbar class={s.navbar}>{
          {
            default: () => slots.title?.(),
            icon: () => slots.icon?.()
          }  
        }</Navbar>
        { slots.default?.() } 
      </div>
    )
  }
})