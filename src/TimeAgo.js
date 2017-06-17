/**
 * Created by DanielL on 16.06.2017.
 */

import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import moment from 'moment';


/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

/* Component ==================================================================== */
class TimeAgo extends Component {
    static componentName = 'TimeAgo';

    static propTypes = {
        locale: PropTypes.string,
        time: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.instanceOf(Date)
        ]).isRequired,
        interval: PropTypes.number,
        hideAgo: PropTypes.bool
    };

    static defaultProps = {
        locale: 'de',
        interval: 60000,
        hideAgo: false,
    };

    constructor() {
        super();

        this.state = {};
    }

    require(locale) {
        switch (locale) {
            case 'af': require('moment/locale/af'); break;
            case 'ar-dz': require('moment/locale/ar-dz'); break;
            case 'ar-kw': require('moment/locale/ar-kw'); break;
            case 'ar-ly': require('moment/locale/ar-ly'); break;
            case 'ar-ma': require('moment/locale/ar-ma'); break;
            case 'ar-sa': require('moment/locale/ar-sa'); break;
            case 'ar-tn': require('moment/locale/ar-tn'); break;
            case 'ar': require('moment/locale/ar'); break;
            case 'az': require('moment/locale/az'); break;
            case 'be': require('moment/locale/be'); break;
            case 'bg': require('moment/locale/bg'); break;
            case 'bn': require('moment/locale/bn'); break;
            case 'bo': require('moment/locale/bo'); break;
            case 'br': require('moment/locale/br'); break;
            case 'bs': require('moment/locale/bs'); break;
            case 'ca': require('moment/locale/ca'); break;
            case 'cs': require('moment/locale/cs'); break;
            case 'cv': require('moment/locale/cv'); break;
            case 'cy': require('moment/locale/cy'); break;
            case 'da': require('moment/locale/da'); break;
            case 'de-at': require('moment/locale/de-at'); break;
            case 'de-ch': require('moment/locale/de-ch'); break;
            case 'de': require('moment/locale/de'); break;
            case 'dv': require('moment/locale/dv'); break;
            case 'el': require('moment/locale/el'); break;
            case 'en-au': require('moment/locale/en-au'); break;
            case 'en-ca': require('moment/locale/en-ca'); break;
            case 'en-gb': require('moment/locale/en-gb'); break;
            case 'en-ie': require('moment/locale/en-ie'); break;
            case 'en-nz': require('moment/locale/en-nz'); break;
            case 'eo': require('moment/locale/eo'); break;
            case 'es-do': require('moment/locale/es-do'); break;
            case 'es': require('moment/locale/es'); break;
            case 'et': require('moment/locale/et'); break;
            case 'eu': require('moment/locale/eu'); break;
            case 'fa': require('moment/locale/fa'); break;
            case 'fi': require('moment/locale/fi'); break;
            case 'fo': require('moment/locale/fo'); break;
            case 'fr-ca': require('moment/locale/fr-ca'); break;
            case 'fr-ch': require('moment/locale/fr-ch'); break;
            case 'fr': require('moment/locale/fr'); break;
            case 'fy': require('moment/locale/fy'); break;
            case 'gd': require('moment/locale/gd'); break;
            case 'gl': require('moment/locale/gl'); break;
            case 'gom-latn': require('moment/locale/gom-latn'); break;
            case 'he': require('moment/locale/he'); break;
            case 'hi': require('moment/locale/hi'); break;
            case 'hr': require('moment/locale/hr'); break;
            case 'hu': require('moment/locale/hu'); break;
            case 'hy-am': require('moment/locale/hy-am'); break;
            case 'id': require('moment/locale/id'); break;
            case 'is': require('moment/locale/is'); break;
            case 'it': require('moment/locale/it'); break;
            case 'ja': require('moment/locale/ja'); break;
            case 'jv': require('moment/locale/jv'); break;
            case 'ka': require('moment/locale/ka'); break;
            case 'kk': require('moment/locale/kk'); break;
            case 'km': require('moment/locale/km'); break;
            case 'kn': require('moment/locale/kn'); break;
            case 'ko': require('moment/locale/ko'); break;
            case 'ky': require('moment/locale/ky'); break;
            case 'lb': require('moment/locale/lb'); break;
            case 'lo': require('moment/locale/lo'); break;
            case 'lt': require('moment/locale/lt'); break;
            case 'lv': require('moment/locale/lv'); break;
            case 'me': require('moment/locale/me'); break;
            case 'mi': require('moment/locale/mi'); break;
            case 'mk': require('moment/locale/mk'); break;
            case 'ml': require('moment/locale/ml'); break;
            case 'mr': require('moment/locale/mr'); break;
            case 'ms-my': require('moment/locale/ms-my'); break;
            case 'ms': require('moment/locale/ms'); break;
            case 'my': require('moment/locale/my'); break;
            case 'nb': require('moment/locale/nb'); break;
            case 'ne': require('moment/locale/ne'); break;
            case 'nl-be': require('moment/locale/nl-be'); break;
            case 'nl': require('moment/locale/nl'); break;
            case 'nn': require('moment/locale/nn'); break;
            case 'pa-in': require('moment/locale/pa-in'); break;
            case 'pl': require('moment/locale/pl'); break;
            case 'pt-br': require('moment/locale/pt-br'); break;
            case 'pt': require('moment/locale/pt'); break;
            case 'ro': require('moment/locale/ro'); break;
            case 'ru': require('moment/locale/ru'); break;
            case 'sd': require('moment/locale/sd'); break;
            case 'se': require('moment/locale/se'); break;
            case 'si': require('moment/locale/si'); break;
            case 'sk': require('moment/locale/sk'); break;
            case 'sl': require('moment/locale/sl'); break;
            case 'sq': require('moment/locale/sq'); break;
            case 'sr-cyrl': require('moment/locale/sr-cyrl'); break;
            case 'sr': require('moment/locale/sr'); break;
            case 'ss': require('moment/locale/ss'); break;
            case 'sv': require('moment/locale/sv'); break;
            case 'sw': require('moment/locale/sw'); break;
            case 'ta': require('moment/locale/ta'); break;
            case 'te': require('moment/locale/te'); break;
            case 'tet': require('moment/locale/tet'); break;
            case 'th': require('moment/locale/th'); break;
            case 'tl-ph': require('moment/locale/tl-ph'); break;
            case 'tlh': require('moment/locale/tlh'); break;
            case 'tr': require('moment/locale/tr'); break;
            case 'tzl': require('moment/locale/tzl'); break;
            case 'tzm': require('moment/locale/tzm'); break;
            case 'uk': require('moment/locale/uk'); break;
            case 'ur': require('moment/locale/ur'); break;
            case 'uz-latn': require('moment/locale/uz-latn'); break;
            case 'uz': require('moment/locale/uz'); break;
            case 'vi': require('moment/locale/vi'); break;
            case 'x-pseudo': require('moment/locale/x-pseudo'); break;
            case 'yo': require('moment/locale/yo'); break;
            case 'zh-cn': require('moment/locale/zh-cn'); break;
            case 'zh-hk': require('moment/locale/zh-hk'); break;
            case 'zh-tw': require('moment/locale/zh-tw'); break;
        }
    }

    componentDidMount() {
        const { interval, time, locale } = this.props;

        const momentInstance = moment(time);

        this.require(locale);
        momentInstance.locale(locale);

        this.setState({
            moment: momentInstance,
        });

        this.setInterval(this.update, interval);
    }

    componentWillUnmount() {
        this.clearInterval(this.update);
    }

    componentWillReceiveProps(props) {
        const newInterval = props.interval;
        const newLocale = props.locale;
        const newTime = props.time;

        const { locale, time, interval } = this.props;

        if (newLocale && locale !== newLocale) {
            this.require(locale);

            this.state.moment.locale(locale);
        }

        if (newTime && time !== newTime) {
            this.setState({
                moment: moment(newTime),
            });
        }

        if (newInterval && interval !== newInterval) {
            this.clearInterval(this.update);
            this.setInterval(this.update, newInterval);
        }
    }


    update() {
        this.forceUpdate();
    }

    render() {
        const { hideAgo} = this.props;
        const { moment } = this.state;

        if (moment) {
            return (
                <Text {...this.props}>{moment.fromNow(hideAgo)}</Text>
        );
        } else {
            return null;
        }
    }
}

/* Mixins ============================================================================== */
ReactMixin.onClass(TimeAgo, TimerMixin);

/* Export Component ==================================================================== */
export default TimeAgo;