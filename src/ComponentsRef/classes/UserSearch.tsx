import {Component} from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchSate {
    name: string;
    user: User | undefined

}

class UserSearch extends Component<UserSearchProps> {

 

    state: UserSearchSate = {
        name: '',
        user: undefined
    }


    findUser = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name
           
        })
        this.setState({user: foundUser})
    }

    render() {
        const {name, user} = this.state;
        return(
            <>
            <input 
            value={name} 
            onChange={(e) => this.setState({name: e.target.value})}
            
        />
        <button onClick={this.findUser}>Find User</button>
        {user? (
            <div>
                <p>Name: {user?.name}</p>
                <p>Age: {user?.age}</p>
            </div>
        ): (
            <div>Users Not Found</div>
        )}
            </>
        )
    }
}