import React from "react";

const ResultPage = (props) => {
    const {email, name, address1, address2, city, province, postalCode} = props.formData
    return(
        <table>
            <tr>
                <td>Email</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Address 1</td>
                <td>{address1}</td>
            </tr>
            <tr>
                <td>Address 2</td>
                <td>{address2}</td>
            </tr>
            <tr>
                <td>Province</td>
                <td>{province}</td>
            </tr>
            <tr>
                <td>Postal Code</td>
                <td>{postalCode}</td>
            </tr>
        </table>
    )
}

export default ResultPage