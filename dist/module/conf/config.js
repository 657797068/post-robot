var _ALLOWED_POST_MESSAGE;

import { CONSTANTS } from './constants';

export var CONFIG = {

    ALLOW_POSTMESSAGE_POPUP: '__ALLOW_POSTMESSAGE_POPUP__' in window ? window.__ALLOW_POSTMESSAGE_POPUP__ : __POST_ROBOT__.__ALLOW_POSTMESSAGE_POPUP__,

    BRIDGE_TIMEOUT: 5000,
    CHILD_WINDOW_TIMEOUT: 5000,

    ACK_TIMEOUT: 2000,
    ACK_TIMEOUT_KNOWN: 10000,
    RES_TIMEOUT: __TEST__ ? 2000 : -1,

    ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _ALLOWED_POST_MESSAGE[CONSTANTS.SEND_STRATEGIES.POST_MESSAGE] = true, _ALLOWED_POST_MESSAGE[CONSTANTS.SEND_STRATEGIES.BRIDGE] = true, _ALLOWED_POST_MESSAGE[CONSTANTS.SEND_STRATEGIES.GLOBAL] = true, _ALLOWED_POST_MESSAGE)
};

if (window.location.href.indexOf(CONSTANTS.FILE_PROTOCOL) === 0) {
    CONFIG.ALLOW_POSTMESSAGE_POPUP = true;
}