const MasterData = ({
    data,

}: {
    data: any
}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele: any) => (
                        <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.id}</td>
                            <td>{ele.age}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )

}
export default MasterData