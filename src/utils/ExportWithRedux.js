import { connect } from 'react-redux';
import { UpdateState } from '../Actions/UpdateState'

export default function ExportWithRedux(com) {
    const mapStateToProps = state => ({
        ...state
    })
    const mapDispatchToProps = dispatch => ({
            UpdateState: (id,value) => dispatch(UpdateState(id,value))
    })

    return connect(mapStateToProps, mapDispatchToProps)(com)
}