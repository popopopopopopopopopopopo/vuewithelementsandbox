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
import ElAlertBasicComponent from '@/components/ElAlertBasicComponent';
import ElAlertWithIcomComponent from '@/components/ElAlertWithIcomComponent';
import ElToolTipComponent from '@/components/ElToolTipComponent';
import ElToolTipAdvancedUsageComponent from '@/components/ElToolTipAdvancedUsageComponent';
import ElPopoverComponent from '@/components/ElPopoverComponent';
import ElPopoverNestedComponent from '@/components/ElPopoverNestedComponent';
import ElCardWithVForComponent from '@/components/ElCardWithVForComponent';
import ElStepComponent from '@/components/ElStepComponent';
import LayoutAndDetailComponent from '@/components/LayoutAndDetailComponent';

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
    {
      path: '/ElAlertBasicComponent',
      name: 'ElAlertBasicComponent',
      component: ElAlertBasicComponent,
    },
    {
      path: '/ElAlertWithIcomComponent',
      name: 'ElAlertWithIcomComponent',
      component: ElAlertWithIcomComponent,
    },
    {
      path: '/ElToolTipComponent',
      name: 'ElToolTipComponent',
      component: ElToolTipComponent,
    },
    {
      path: '/ElToolTipAdvancedUsageComponent',
      name: 'ElToolTipAdvancedUsageComponent',
      component: ElToolTipAdvancedUsageComponent,
    },
    {
      path: '/ElPopoverComponent',
      name: 'ElPopoverComponent',
      component: ElPopoverComponent,
    },
    {
      path: '/ElPopoverNestedComponent',
      name: 'ElPopoverNestedComponent',
      component: ElPopoverNestedComponent,
    },
    {
      path: '/ElCardWithVForComponent',
      name: 'ElCardWithVForComponent',
      component: ElCardWithVForComponent,
    },
    {
      path: '/ElStepComponent',
      name: 'ElStepComponent',
      component: ElStepComponent,
    },
    {
      path: '/LayoutAndDetailComponent',
      name: 'LayoutAndDetailComponent',
      component: LayoutAndDetailComponent,
    },
  ],
});
