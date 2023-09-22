const UserData = ({product}) => {
    return ( 
        <div className="displayelems">
            {
                product.map((currentProd) => {
                    const {id,Insurancename, Productname, Claimsstatus, Premium, Minmaxage} = currentProd;
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{Insurancename}</td>
                            <td>{Productname}</td>
                            <td>{Claimsstatus}</td>
                            <td>{Premium}</td>
                            <td>{Minmaxage}</td>
                        </tr>
                    )
                })
            }
        </div>
     );
}
 
export default UserData;