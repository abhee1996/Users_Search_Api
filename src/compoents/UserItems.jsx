import React from 'react'
import {Card,CardImg,CardBody,CardTitle, CardText} from 'reactstrap';

const UserItems = ({user }) => {
    console.log('user', user)
    return (
        <div>
            <Card>
                <CardImg src={user.avatar_url} />
                <CardBody>
                    <CardTitle>{user.login}</CardTitle>
                    <CardTitle>{user.name}</CardTitle>
                    <a href={`users/${user.login}`}  />
                    <CardText>{user.follower}</CardText>
                    <CardText>{user.public_repos}</CardText>
                    <CardText>{user.following}</CardText>
                    <CardText>{user.company}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserItems
