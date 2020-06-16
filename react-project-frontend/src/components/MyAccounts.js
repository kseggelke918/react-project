import React from 'react'
import { connect } from 'react-redux'

const myAccounts = () => {

}

//get array of myAccounts from state of the store
//mapStateToProps returns an object with whatever keys we want for props
const mapStateToProps = state => {
    return {
        accounts: state.myAccounts
    }
}

export default connect(mapStateToProps)(MyAccounts)