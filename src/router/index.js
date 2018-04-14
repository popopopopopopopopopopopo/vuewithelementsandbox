import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import SutekinaComponent from '@/components/SutekinaComponent';
import ButtonAndDialog from '@/components/ButtonAndDialog';
import AlertComponent from '@/components/AlertComponent';
import ElDialogComponent from '@/components/ElDialogComponent';
import ElConfirmComponent from '@/components/ElConfirmComponent';
import ElPromptComponent from '@/components/ElPromptComponent';
import ElMessageCustomizeComponent from '@/components/ElMessageCustomizeComponent';
import ElMessageHTMLTextComponent from '@/components/ElMessageHTMLTextComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/SutekinaComponent',
      name: 'SutekinaComponent',
      component: SutekinaComponent,
    },
    {
      path: '/ButtonAndDialog',
      name: 'ButtonAndDialog',
      component: ButtonAndDialog,
    },
    {
      path: '/AlertComponent',
      name: 'AlertComponent',
      component: AlertComponent,
    },
    {
      path: '/ElDialogComponent',
      name: 'ElDialogComponent',
      component: ElDialogComponent,
    },
    {
      path: '/ElConfirmComponent',
      name: 'ElConfirmComponent',
      component: ElConfirmComponent,
    },
    {
      path: '/ElPromptComponent',
      name: 'ElPromptComponent',
      component: ElPromptComponent,
    },
    {
      path: '/ElMessageCustomizeComponent',
      name: 'ElMessageCustomizeComponent',
      component: ElMessageCustomizeComponent,
    },
    {
      path: '/ElMessageHTMLTextComponent',
      name: 'ElMessageHTMLTextComponent',
      component: ElMessageHTMLTextComponent,
    },
  ],
});
