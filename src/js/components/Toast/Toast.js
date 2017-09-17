// @flow
import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class Toast extends React.Component {

  static createNotification(type: string, message: string) {
    const longTimeOut = 259200000;
    const shortTimeOut = 10000;
    switch (type) {
      case 'success':
        return NotificationManager.success(message, 'SUCCESS');
      case 'warning':
        return NotificationManager.warning(message, 'WARNING', longTimeOut);
      case 'error':
        return NotificationManager.error(message, 'ERROR', longTimeOut);
      default:
        return NotificationManager.error('undefined message', 'ERROR', shortTimeOut);
    }
  }

  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}
export default Toast;
