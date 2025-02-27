import { getInitPage } from '@keystone-6/auth/pages/InitPage';

const fieldPaths = ["fullName","email","password"];

export default getInitPage({"listKey":"User","fieldPaths":["fullName","email","password"],"enableWelcome":true});
