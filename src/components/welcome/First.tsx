import { defineComponent, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useSwipe } from '../../hooks/useSwipe'
import s from './Welcome.module.scss'

export const First = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>()
    const router = useRouter()
    const { swiping, direction } = useSwipe(div, { 
      beforeStart: (e) => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })

    return () => (
      <div class={s.card} ref={div}> 
        <svg>
          <use xlinkHref='#welcome1'></use>
        </svg>
        <h2>薯条记账<br />薯着钱过日子</h2>
      </div>
    )
  }
})

First.displayName = 'First'