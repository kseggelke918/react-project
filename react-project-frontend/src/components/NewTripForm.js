import React from 'react'

const NewTripForm = () => {
    const handleChange = () => {}
    return (
    <form>
        <input name="acctType" value={"acctType"} onChange={handleChange} />
        <input name="balance" value={"balance"} onChange={handleChange} />
    </form>
    )
}

export default NewTripForm