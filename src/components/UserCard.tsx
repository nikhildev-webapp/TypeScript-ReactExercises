 type UserCardProps = {
        name: string,
        age: number,
        isOnline: boolean,
        city?:string
 }
const UserCard = (props:UserCardProps) => {
   
    return (
        <>
            <div style={{ border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',   
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '300px',
            margin: '10px auto'}}>
                <h1>UserCard</h1>
                <h3>UserName:{props.name}</h3>
                <h3>Age:{props.age}</h3>
                <h3>OnlineStatus:{props.isOnline ? 'Online' : 'Offline'}</h3>
                <h3>City:{props.city}</h3>
            </div>
        </>
  )
}

export default UserCard