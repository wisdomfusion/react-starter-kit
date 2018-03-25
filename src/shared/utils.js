import { message } from 'antd';

import moment from 'moment';

class Utils {
    success = msg => message.success(msg);

    error = msg => message.error(msg);

    warning = msg => message.warning(msg);

    info = msg => message.info(msg);

    dateTimeFormater = (datetime, formatString) => {
        return moment(datetime).format(formatString);
    };
}

export default new Utils();