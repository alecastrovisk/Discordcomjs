import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;

}
 
const UserRow: React.FC<UserProps> = ({nickname, isBot}) =>{
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>AleCastrovisk</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}


const UserList: React.FC = () =>{
    return (
       <Container>
           <Role>Disponível - 1</Role>
           <UserRow nickname="AleCastrovisk" />

           <Role>Offline - 18 </Role>
           <UserRow nickname= "Leo Boiola" isBot/>

          
       </Container>
       
    )
}

export default UserList;