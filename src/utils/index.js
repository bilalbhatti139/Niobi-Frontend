import copy from 'copy-to-clipboard';
import { success } from '../modules/shared/Notifications';

export const copyToClipboard = async (value) => {
  await copy(value);
  success('Copied!', { autoClose: 2000 });
};
