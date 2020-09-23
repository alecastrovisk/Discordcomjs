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
            <strong>{nickname}</strong>
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

          
           <UserRow nickname="Zé Boiola" />

           
           <UserRow nickname="Mel" isBot />

           
           <UserRow nickname="Laís" />

           
           <UserRow nickname="fulano" />

           
           <UserRow nickname="fulano" />

           
           <UserRow nickname="fulano" />
           

          
       </Container>
       
    )
}

export default UserList;