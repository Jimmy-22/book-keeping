import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import s from './TagCreate.module.scss';
import { EmojiSelect } from '../../shared/EmojiSelect';
export const TagCreate = defineComponent({
  setup: (props, context) => {
    const formData = reactive({ name: '', sign: ''})
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name='cancel' onClick={() => {}}/>,
        default: () => (
          <form class={s.form}>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model={formData.name} class={[s.formItem, s.input, s.error]}></input>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号{formData.sign}</span>
                <div class={s.formItem_value}>
                  <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]} />
                </div>
              </label>
            </div>
          </form>
        )
      }}</MainLayout>
    )
  }
})