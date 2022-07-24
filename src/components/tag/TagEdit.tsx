import { defineComponent } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { TagForm } from './TagForm';
import s from './Tag.module.scss';
import { Button } from '../../shared/Button';
export const TagEdit = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name='cancel' onClick={() => {}}/>,
        default: () => <>
          <TagForm />
          <div class={s.actions}>
            <Button kind='danger' class={s.removeTags}>删除标签</Button>
            <Button kind='danger' class={s.removeTagsAndItems} onClick={() => { }}>删除标签和记账</Button>
          </div>
        </>
      }}</MainLayout>
    )
  }
})