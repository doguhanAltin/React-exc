
import propTypes from 'prop-types'
function User({name, surname,age ,friends,isLogged}) {


    return (<>
        <h1>{isLogged ? `${name} ${surname} `  : "Giriş yap aw "}</h1>
           
    
    

        {friends.map((friend ,index) =>(<div key={index}>
                            {friend}
                        </div>))
         }
      
    
    </>
           
            );
}
User.propTypes={
    name:propTypes.string.isRequired,
    surname:propTypes.string,
    age:propTypes.oneOfType([propTypes.number,propTypes.string]),
    friends:propTypes.array,
    isLogged:propTypes.bool

}
User.defaultProps= {
    name: "sad"
}
export default User
