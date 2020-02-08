import React from 'react';

import ControlCenterDashboard from './control-center/ControlCenterDashboard'
import FieldAgentDash from './field-agent/FieldAgentDash'
import ls from 'local-storage'
import lsKey from '../../../../data/LocalStorageKeys'



function Dash(props) {

    if (ls.get(lsKey.LS_ROLE_KEY) === "FIELD_AGENT")
        return (
            <FieldAgentDash />
        )
    if (ls.get(lsKey.LS_ROLE_KEY) === "CONTROL_CENTER_AGENT")
        return (
            <ControlCenterDashboard />
        )

}

export default Dash;
